<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlogTag extends Model {

  /**
   * @return \Illuminate\Database\Eloquent\Relations\HasMany
   */
  public function value()
  {
    return $this->hasMany('App\Models\Tag', 'id','tag_id');
  }

}