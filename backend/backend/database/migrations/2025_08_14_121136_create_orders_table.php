// database/migrations/xxxx_create_orders_table.php
<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_number')->unique(); // Mã đơn hàng: ORD-20241201-001
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Người mua
            $table->decimal('total_amount', 10, 2); // Tổng tiền
            $table->decimal('discount_amount', 10, 2)->default(0); // Tiền giảm giá
            $table->enum('status', ['pending', 'completed', 'cancelled'])->default('pending');
            $table->enum('payment_method', ['credit_card', 'paypal', 'bank_transfer']);
            $table->json('payment_details')->nullable(); // Chi tiết thanh toán
            $table->timestamp('completed_at')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('orders');
    }
};