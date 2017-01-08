<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\Blog;
use App\Models\BlogCategory;
use App\Models\BlogTag;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

/**
 * Class BlogController
 * @package App\Http\Controllers
 */
class BlogController extends Controller {

  /**
   * @return \Illuminate\View\View
   */
  public function blogs()
  {
    //list all blogs
    $results = Blog::with('tags.value','categories.values', 'comments')->orderBy('id', 'DESC')->paginate(6);
    return view('blogs', compact('results'));
  }

  /**
   * @param $id
   * @return \Illuminate\View\View
   */
  public function blog($id)
  {
    $result = Blog::where('id', $id)->with('tags.value', 'categories.values')->first();
    return view('blog', compact('result'));
  }

  /**
   * @return \Illuminate\View\View
   */
  public function showWrite()
  {
    return view('createblog');
  }

  /**
   * @param Request $request
   * @return \Illuminate\Http\RedirectResponse
   */
  public function processBlog(Request $request)
  {
    $title = $request->title;

    if(Input::hasFile('picture'))
    {
      $file = Input::file('picture');
      $filename = str_random(12);
      $destinationPath = public_path(). '/uploads/';
      $extension = $file->getClientOriginalExtension();

      $file->move($destinationPath, $filename.'.'.$extension);
    }
    $filename = $filename.'.'. $extension;
    $tags = $request->tags;
    $tags = explode(',',$tags);
    $categories = $request->categories;
    $categories = explode(',', $categories);
    $story = $request->story;

    $blog = new Blog();
    $blog->title = $title;
    $blog->story = $story;
    $blog->picture = '/uploads/'.$filename;
    $blog->save();

    //for($i=0;$i<=count($tags);$i++)
    foreach($tags as $tag)
    {
      $tags = new Tag();
      $tags->name = $tag;
      $tags->save();

      $blog_tags = new BlogTag();
      $blog_tags->blog_id = $blog->id;
      $blog_tags->tag_id = $tags->id;
      $blog_tags->save();
    }

    foreach($categories as $category)
    {
      $categories = new Category();
      $categories->name = $category;
      $categories->save();

      $blog_categories = new BlogCategory();
      $blog_categories->blog_id = $blog->id;
      $blog_categories->category_id = $categories->id;
      $blog_categories->save();
    }
    return redirect()->to('/blog');
  }

  public function getPostsByTag($tag)
  {
    $tag = str_replace('-', ' ', $tag);
    $tag = Tag::where('name',$tag)->first();
    $blogTags = BlogTag::where('tag_id', $tag->id)->get();

    $blogs = [];
    foreach($blogTags as $blogTag)
    {
      $blogs[] = $blogTag->blog_id;
    }

    $results = Blog::whereIn('id', $blogs)->with('tags.value','categories.values', 'comments')->orderBy('id', 'DESC')->paginate(6);
    foreach($results as $result)
    {
      return $result->tags[0]->value->name;
    }
    return view('blogs', compact('results'));
  }
}