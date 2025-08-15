// frontend/src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { 
  BookOpenIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <BookOpenIcon className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">EBookPlatform</span>
            </div>
            <p className="text-gray-300 mb-4">
              Nền tảng hàng đầu cung cấp sách điện tử, podcast và khóa học trực tuyến 
              chất lượng cao. Khám phá thế giới tri thức cùng chúng tôi.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">contact@ebookplatform.com</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">+84 123 456 789</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">Hà Nội, Việt Nam</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Danh mục</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products?type=ebook" className="text-gray-300 hover:text-white transition-colors">
                  Sách điện tử
                </Link>
              </li>
              <li>
                <Link href="/products?type=podcast" className="text-gray-300 hover:text-white transition-colors">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/products?type=course" className="text-gray-300 hover:text-white transition-colors">
                  Khóa học
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-white transition-colors">
                  Tất cả danh mục
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hỗ trợ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-300 hover:text-white transition-colors">
                  Trung tâm trợ giúp
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Điều khoản sử dụng
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 EBookPlatform. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
                Bảo mật
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
                Điều khoản
              </Link>
              <Link href="/sitemap" className="text-gray-300 hover:text-white text-sm transition-colors">
                Sơ đồ trang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;