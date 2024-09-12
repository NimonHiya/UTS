'use client';

import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

interface TestimonialCardProps {
  name: string;
  title: string;
  rating: number;
  content: string;
  isActive: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  title,
  content,
  isActive,
}) => {
  return (
    <div
      className={`bg-white p-5 shadow-lg min-w-[300px] max-w-[400px] rounded-lg transition-transform duration-300 ease-in-out ${
        isActive ? 'scale-105' : 'scale-100'
      }`}>
      {/* Rating */}
      <div className='flex items-center gap-1 text-yellow-400'>
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      {/* Content */}
      <p className='mt-4 text-sm text-gray-600 leading-relaxed'>{content}</p>

      {/* User Info */}
      <div className='mt-8 flex items-center gap-4'>
        <Image
          src='/user.png'
          alt='User avatar'
          width={56}
          height={56}
          className='w-12 h-12 rounded-full object-cover'
        />
        <div>
          <h4 className='text-sm font-semibold text-gray-900'>{name}</h4>
          <p className='text-xs text-gray-600'>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;