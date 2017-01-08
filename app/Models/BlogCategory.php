<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class BlogCategory
 * @package App\Models
 */
class BlogCategory extends Model {

  /**
   * @return \Illuminate\Database\Eloquent\Relations\HasMany
   */
  public function values()
  {
    return $this->hasMany('App\Models\Category', 'id', 'category_id');
  }

}