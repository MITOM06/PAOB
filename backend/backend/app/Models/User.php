<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    // app/Models/User.php - Thêm vào class User hiện có
public function orders()
{
    return $this->hasMany(Order::class);
}

public function subscriptions()
{
    return $this->hasMany(UserSubscription::class);
}

// Kiểm tra cấp độ thành viên hiện tại
public function getCurrentSubscriptionLevel()
{
    $activeSubscription = $this->subscriptions()
        ->where('status', 'active')
        ->where('expires_at', '>', now())
        ->orderBy('expires_at', 'desc')
        ->first();
    
    return $activeSubscription ? $activeSubscription->plan : 'free';
}

// Kiểm tra có thể truy cập sản phẩm không
public function canAccessProduct(Product $product)
{
    $userLevel = $this->getCurrentSubscriptionLevel();
    $levels = ['free', 'basic', 'premium', 'vip'];
    
    $userLevelIndex = array_search($userLevel, $levels);
    $productLevelIndex = array_search($product->subscription_level, $levels);
    
    return $userLevelIndex >= $productLevelIndex;
}
}
