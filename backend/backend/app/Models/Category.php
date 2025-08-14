<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug', 
        'description',
        'type',
        'image'
    ];

    // Relationship: Một danh mục có nhiều sản phẩm
    public function products()
    {
        return $this->hasMany(Product::class);
    }

    // Scope: Lọc theo loại
    public function scopeByType($query, $type)
    {
        return $query->where('type', $type);
    }
}