// frontend/src/types/index.ts
export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  type: 'ebook' | 'podcast' | 'course';
  image?: string;
  created_at: string;
  updated_at: string;
  products?: Product[];
}

export interface Product {
  id: number;
  title: string;
  slug: string;
  description: string;
  content?: string;
  price: number;
  discount_price?: number;
  cover_image: string;
  type: 'ebook' | 'podcast' | 'course';
  status: 'active' | 'inactive';
  author?: string;
  duration?: number;
  tags?: string[];
  subscription_level: 'free' | 'basic' | 'premium' | 'vip';
  category_id: number;
  category?: Category;
  files?: ProductFile[];
  final_price: number;
  created_at: string;
  updated_at: string;
}

export interface ProductFile {
  id: number;
  product_id: number;
  type: 'ebook' | 'audio' | 'video' | 'document';
  filename: string;
  filepath: string;
  mime_type: string;
  file_size: number;
  duration?: number;
  metadata?: any;
}

export interface Order {
  id: number;
  order_number: string;
  user_id: number;
  total_amount: number;
  discount_amount: number;
  status: 'pending' | 'completed' | 'cancelled';
  payment_method: 'credit_card' | 'paypal' | 'bank_transfer';
  payment_details?: any;
  completed_at?: string;
  created_at: string;
  updated_at: string;
  items?: OrderItem[];
}

export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  price: number;
  discount_price?: number;
  product?: Product;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: any;
}

export interface AuthResponse {
  user: User;
  access_token: string;
  token_type: string;
  subscription_level: string;
}