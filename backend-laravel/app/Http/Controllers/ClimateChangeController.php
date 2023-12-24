<?php

namespace App\Http\Controllers;

use App\Models\ClimateChange;
use Illuminate\Http\Request;

class ClimateChangeController extends Controller
{
    public function index()
    {
        $climatechanges = ClimateChange::all();
        return $this->successResponse($climatechanges);
    }
    public function show($id)
    {
        $climatechange = ClimateChange::find($id);
        if ($climatechange) {
            return $this->successResponse($climatechange);
        }
        return $this->errorResponse("ClimateChange with id $id not found", 404);
    }
    public function store(Request $request)
    {
        $rules = [
            "title" => "required",
            "description" => "required",
            "image" => "required",
        ];
        $this->validate($request, $rules);
        $climatechange = ClimateChange::create($request->all());
        return $this->successResponse($climatechange, 201);
    }
    public function update(Request $request, $id)
    {
        $rules = [
            "title" => "required",
            "description" => "required",
            "image" => "required",
        ];
        $this->validate($request, $rules);
        $climatechange = ClimateChange::find($id);
        if ($climatechange) {
            $climatechange->fill($request->all());
            $climatechange->save();
            return $this->successResponse($climatechange);
        }
        return $this->errorResponse("ClimateChange with id $id not found", 404);
    }
    public function destroy($id)
    {
        $climatechange = ClimateChange::find($id);
        if ($climatechange) {
            $climatechange->delete();
            return $this->successResponse($climatechange);
        }
        return $this->errorResponse("ClimateChange with id $id not found", 404);
    }
    }
