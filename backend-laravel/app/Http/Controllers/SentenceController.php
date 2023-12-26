<?php

namespace App\Http\Controllers;

use App\Models\Sentence;
use Illuminate\Http\Request;

class SentenceController extends Controller
{
    //tampilkan semua data
    public function index($count = null)
    {
        if ($count) {
            $sentences = Sentence::inRandomOrder()->get($count);
        } else {
            $sentences = Sentence::all();
        }
        //kembalikan dalam bentuk json
        return $this->successResponse($sentences);
    }
    public function show($id)
    {
        $sentence = Sentence::find($id);
        if ($sentence) {
            return $this->successResponse($sentence);
        }
        return $this->errorResponse("Sentence with id $id not found", 404);
    }
    public function store(Request $request)
    {
        $rules = [
            "sentence" => "required",
        ];
        $this->validate($request, $rules);
        $sentence = Sentence::create($request->all());
        return $this->successResponse($sentence, 201);
    }
    public function update(Request $request, $id)
    {
        $rules = [
            "sentence" => "required",
        ];
        $this->validate($request, $rules);
        $sentence = Sentence::find($id);
        if ($sentence) {
            $sentence->fill($request->all());
            $sentence->save();
            return $this->successResponse($sentence);
        }
        return $this->errorResponse("Sentence with id $id not found", 404);
    }
    public function destroy($id)
    {
        $sentence = Sentence::find($id);
        if ($sentence) {
            $sentence->delete();
            return $this->successResponse($sentence);
        }
        return $this->errorResponse("Sentence with id $id not found", 404);
    }
    
}
