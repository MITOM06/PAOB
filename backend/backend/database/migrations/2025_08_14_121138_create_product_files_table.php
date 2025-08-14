<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('product_files', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained()->onDelete('cascade');
            $table->enum('type', ['ebook', 'audio', 'video', 'document']); // Loại file
            $table->string('filename'); // Tên file gốc
            $table->string('filepath'); // Đường dẫn file
            $table->string('mime_type'); // Loại MIME: application/pdf, video/mp4...
            $table->bigInteger('file_size'); // Kích thước file (bytes)
            $table->integer('duration')->nullable(); // Thời lượng (giây) cho audio/video
            $table->json('metadata')->nullable(); // Thông tin bổ sung
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('product_files');
    }
};