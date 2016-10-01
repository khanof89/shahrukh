<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model {

  /**
   * @return \Illuminate\Database\Eloquent\Relations\HasMany
   */
  public function tags()
  {
    return $this->hasMany('App\Models\BlogTag');
  }

  /**
   * @return \Illuminate\Database\Eloquent\Relations\HasMany
   */
  public function categories()
  {
    return $this->hasMany('App\Models\BlogCategory');
  }

  /**
   * @return \Illuminate\Database\Eloquent\Relations\HasMany
   */
  public function comments()
  {
    return $this->hasMany('App\Models\BlogComment');
  }

}