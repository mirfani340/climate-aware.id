<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    protected function errorResponse($errors, $status)
    {
        return response()->json(['errors' => $errors], $status);
    }
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('auth_token')->plainTextToken;
            return $this->successResponse(['token' => $token], 'Login successful');
        }
        return $this->failedResponse('Login Failed');
    }
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return $this->successResponse('Successfully logged out');
    }
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users|max:255',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return $this->errorResponse($validator->errors()->toArray(), 422);
        }

        $data = $validator->validated(); // Get the validated data

        $data['password'] = bcrypt($data['password']);
        User::create($data);
        return $this->successResponse('User created successfully', 201);
    }
}
