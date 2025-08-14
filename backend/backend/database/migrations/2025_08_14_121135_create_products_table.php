// database/migrations/xxxx_create_products_table.php
<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('description');
            $table->text('content')->nullable();
            $table->decimal('price', 10, 2);
            $table->decimal('discount_price', 10, 2)->nullable();
            $table->string('cover_image');
            $table->enum('type', ['ebook', 'podcast', 'course']);
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->string('author')->nullable();
            $table->integer('duration')->nullable(); // for podcasts/courses in minutes
            $table->json('tags')->nullable();
            $table->enum('subscription_level', ['free', 'basic', 'premium', 'vip'])->default('free');
            $table->foreignId('category_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('products');
    }
};