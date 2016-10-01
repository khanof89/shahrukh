<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

    Route::get('blog', 'BlogController@blogs');

    Route::get('blog/{id}/{name}', 'BlogController@blog');

    Route::get('login', 'AuthController@showLogin');

    Route::post('login', 'AuthController@processLogin');

    Route::get('/logout', function()
    {
        \Illuminate\Support\Facades\Auth::logout();
        return redirect()->to('/login');
    });

    Route::group(['middleware' => 'auth'], function()
    {
        Route::get('write', 'BlogController@showWrite');

        Route::post('write', 'BlogController@processBlog');
    });

    Route::get('feed', function(){

        // create new feed

        $feed = \Roumen\Feed\Facades\Feed::make();

        // cache the feed for 60 minutes (second parameter is optional)
        $feed->setCache(60, 'laravelFeedKey');

        // check if there is cached feed and build new only if is not
        if (!$feed->isCached())
        {
            // creating rss feed with our most recent 20 posts
            $posts = \Illuminate\Support\Facades\DB::table('blogs')->orderBy('created_at', 'desc')->take(20)->get();

            // set your feed's title, description, link, pubdate and language
            $feed->title = 'I am Shahrukh';
            $feed->description = 'Technology blogs';
            $feed->link = \Illuminate\Support\Facades\URL::to('feed');
            $feed->setDateFormat('datetime'); // 'datetime', 'timestamp' or 'carbon'
            $feed->pubdate = $posts[0]->created_at;
            $feed->lang = 'en';
            $feed->setShortening(true); // true or false
            $feed->setTextLimit(100); // maximum length of description text

            foreach ($posts as $post)
            {
                // set item's title, author, url, pubdate, description and content
                $post->slug = 'blog/'. $post->id.'/'.\Illuminate\Support\Str::slug($post->title);
                $post->description = strip_tags(substr($post->story, 0,250));
                $feed->add($post->title, 'Shahrukh Khan', \Illuminate\Support\Facades\URL::to($post->slug), $post->created_at, $post->description, $post->story);
            }

        }

        // first param is the feed format
        // optional: second param is cache duration (value of 0 turns off caching)
        // optional: you can set custom cache key with 3rd param as string
        return $feed->render('atom');

        // to return your feed as a string set second param to -1
        // $xml = $feed->render('atom', -1);

    });

    Route::post('contact-form', 'WelcomeController@contact');
