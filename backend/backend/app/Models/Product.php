<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'description', 
        'content',
        'price',
        'discount_price',
        'cover_image',
        'type',
        'status',
        'author',
        'duration',
        'tags',
        'subscription_level',
        'category_id'
    ];

    protected $casts = [
        'tags' => 'array',
        'price' => 'decimal:2',
        'discount_price' => 'decimal:2'
    ];

    // Relationship: Sản phẩm thuộc một danh mục
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    // Relationship: Sản phẩm có nhiều files
    public function files()
    {
        return $this->hasMany(ProductFile::class);
    }

    // Relationship: Sản phẩm có trong nhiều đơn hàng
    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

    // Accessor: Tính giá cuối cùng
    public function getFinalPriceAttribute()
    {
        return $this->discount_price ?? $this->price;
    }

    // Scope: Sản phẩm active
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    // Scope: Theo cấp độ thành viên
    public function scopeBySubscriptionLevel($query, $level)
    {
        $levels = ['free', 'basic', 'premium', 'vip'];
        $userLevelIndex = array_search($level, $levels);
        
        return $query->whereIn('subscription_level', array_slice($levels, 0, $userLevelIndex + 1));
    }
}