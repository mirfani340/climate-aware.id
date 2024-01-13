<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClimateChangeController;
use App\Http\Controllers\SentenceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post("/register", [AuthController::class, "register"])->name("register");
Route::post("/login", [AuthController::class, "login"])->name("login");

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('sentences', SentenceController::class);
    Route::apiResource('climatechanges', ClimateChangeController::class);
    Route::post("/logout", [AuthController::class, "logout"])->name("logout");
});

Route::get('/save-climate-news', [NewsController::class, 'saveClimateChangeNewsToDatabase']);
Route::get('/climate-news', [NewsController::class, 'getClimateChangeNews']);
