// frontend/src/app/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Loading from '@/components/ui/Loading';
import { Category, Product } from '@/types';
import { categoriesAPI, productsAPI } from '@/lib/api';
import { 
  BookOpenIcon,
  MicrophoneIcon,
  AcademicCapIcon,
  StarIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

const HomePage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, productsRes] = await Promise.all([
          categoriesAPI.getAll(),
          productsAPI.getAll({ limit: 8 })
        ]);

        if (categoriesRes.data.success) {
          setCategories(categoriesRes.data.data || []);
        }

        if (productsRes.data.success) {
          setFeaturedProducts(productsRes.data.data || []);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <Loading size="lg" text="Đang tải trang chủ..." />
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Khám phá thế giới tri thức
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Hàng ngàn sách điện tử, podcast và khóa học chất lượng cao
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Khám phá ngay
              </Link>
              <Link
                href="/auth/register"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Đăng ký miễn phí
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Danh mục nổi bật
            </h2>
            <p className="text-xl text-gray-600">
              Lựa chọn theo sở thích của bạn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* eBooks */}
            <Link href="/products?type=ebook" className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <BookOpenIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sách điện tử</h3>
                <p className="text-gray-600 mb-4">
                  Tiểu thuyết, truyện tranh, sách kỹ năng và nhiều thể loại khác
                </p>
                <div className="text-blue-600 font-semibold">
                  {categories.filter(cat => cat.type === 'ebook').length} danh mục →
                </div>
              </div>
            </Link>

            {/* Podcasts */}
            <Link href="/products?type=podcast" className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <MicrophoneIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Podcast</h3>
                <p className="text-gray-600 mb-4">
                  Tư tưởng, triết học, kinh doanh và phát triển bản thân
                </p>
                <div className="text-green-600 font-semibold">
                  {categories.filter(cat => cat.type === 'podcast').length} danh mục →
                </div>
              </div>
            </Link>

            {/* Courses */}
            <Link href="/products?type=course" className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <AcademicCapIcon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Khóa học</h3>
                <p className="text-gray-600 mb-4">
                  Kỹ năng sống, giao tiếp, thuyết trình và phát triển nghề nghiệp
                </p>
                <div className="text-purple-600 font-semibold">
                  {categories.filter(cat => cat.type === 'course').length} danh mục →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sản phẩm nổi bật
            </h2>
            <p className="text-xl text-gray-600">
              Những sản phẩm được yêu thích nhất
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 8).map((product) => (
              <Link key={product.id} href={`/products/${product.slug}`} className="group">
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative aspect-[3/4]">
                    <img
                      src={product.cover_image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.type === 'podcast' && (
                      <div className="absolute top-2 left-2 bg-black bg-opacity-60 rounded-full p-2">
                        <PlayIcon className="w-4 h-4 text-white" />
                      </div>
                    )}
                    {product.discount_price && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                        -{Math.round((1 - product.discount_price / product.price) * 100)}%
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {product.title}
                    </h3>
                    {product.author && (
                      <p className="text-sm text-gray-600 mb-2">
                        {product.author}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        {product.discount_price ? (
                          <>
                            <span className="text-lg font-bold text-red-600">
                              {new Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND'
                              }).format(product.discount_price)}
                            </span>
                            <span className="text-sm text-gray-500 line-through">
                              {new Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND'
                              }).format(product.price)}
                            </span>
                          </>
                        ) : (
                          <span className="text-lg font-bold text-gray-900">
                            {product.price === 0 ? 'Miễn phí' : 
                              new Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND'
                              }).format(product.price)
                            }
                          </span>
                        )}
                      </div>
                      <div className="flex items-center">
                        <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">4.5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Xem tất cả sản phẩm
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Sách điện tử</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-blue-100">Podcast</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2,000+</div>
              <div className="text-blue-100">Khóa học</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100,000+</div>
              <div className="text-blue-100">Người dùng</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;