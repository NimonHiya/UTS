'use client';

import React from 'react';
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
  rating,
  content,
  isActive,
}) => {
  return (
    <div
      className={`bg-white p-5 shadow-lg min-w-[300px] max-w-[400px] rounded-lg transition-transform duration-300 ease-in-out ${
        isActive ? 'scale-105' : 'scale-100'
      }`}
      aria-labelledby={`${name}-testimonial`}
      role='article'>
      <div
        className='flex items-center gap-1 text-yellow-400'
        aria-label={`Rating: ${rating} stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={`${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
            aria-hidden='true'
          />
        ))}
      </div>

      <p className='mt-4 text-sm text-gray-600 leading-relaxed'>{content}</p>

      <div className='mt-8 flex items-center gap-4'>
        <Image
          src='/user.png'
          alt={`${name}'s avatar`}
          width={56}
          height={56}
          className='w-12 h-12 rounded-full object-cover'
          priority
        />
        <div>
          <h4
            className='text-sm font-semibold text-gray-900'
            id={`${name}-testimonial`}>
            {name}
          </h4>
          <p className='text-xs text-gray-600'>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TestimonialCard);
