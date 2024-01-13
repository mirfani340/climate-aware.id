<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Carbon\Carbon;
use App\Http\Resources\NewsResource;

class NewsController extends Controller
{


    public function saveClimateChangeNewsToDatabase()
    {
        $apiKey = config('services.news_api.key');

        try {
            $response = Http::get("https://newsapi.org/v2/everything", [
                'apiKey' => $apiKey,
                'q' => 'climate change',
                'sortBy' => 'publishedAt',

            ]);
            $newsData = $response->json()['articles'];

            foreach ($newsData as $article) {

                // Parse datetime string using Carbon
                $publishedAt = Carbon::parse($article['publishedAt']);

                // Check if description is not null
                $description = $article['description'] ?? 'No description available';
                $imageUrl = $article['urlToImage'] ?? null;
                // Save data to the database
                if ($imageUrl) {
                    News::create([
                        'title' => $article['title'],
                        'description' => $description,
                        'url' => $article['url'],
                        'published_at' => $publishedAt,
                        'image_url' => $imageUrl,
                    ]);
                }
            }
            return response()->json(['status' => 'success', 'message' => 'Climate change news saved to database.'], 200);
        } catch (\Exception $e) {
            // Handle errors if any
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
        }
    }
    public function getClimateChangeNews()
    {
        try {
            $news = News::orderBy('published_at', 'desc')->get();
            return response()->json([
                'status' => 'success',
                'data' => NewsResource::collection($news),
            ], 200);
        } catch (\Exception $e) {
            // Handle errors if any
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
        }
    }
}
