'use client';

import React from 'react';
import TestimonialCard from './TestimonialCard'; // Ensure the path is correct
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Testimonial {
  name: string;
  title: string;
  rating: number;
  content: string;
  isActive: boolean;
}

const Testi: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Memoized testimonials array
  const testimonials: Testimonial[] = React.useMemo(
    () => [
      {
        name: 'Chealsea Morgan',
        title: 'CEO of Subway',
        rating: 5,
        content:
          'This is a placeholder testimonial content that is the same for all entries. It provides a generic review of the service or product, ensuring uniformity across all testimonials.',
        isActive: true,
      },
      {
        name: 'Jordan Lee',
        title: 'Marketing Director at TechTribe',
        rating: 5,
        content:
          'This is a placeholder testimonial content that is the same for all entries. It provides a generic review of the service or product, ensuring uniformity across all testimonials.',
        isActive: false,
      },
      {
        name: 'Avery Johnson',
        title: 'Founder of DesignWorks',
        rating: 5,
        content:
          'This is a placeholder testimonial content that is the same for all entries. It provides a generic review of the service or product, ensuring uniformity across all testimonials.',
        isActive: true,
      },
      {
        name: 'Morgan Smith',
        title: 'Product Manager at FreshMart',
        rating: 5,
        content:
          'This is a placeholder testimonial content that is the same for all entries. It provides a generic review of the service or product, ensuring uniformity across all testimonials.',
        isActive: false,
      },
      {
        name: 'Casey Wilson',
        title: 'Operations Manager at Global Enterprises',
        rating: 5,
        content:
          'This is a placeholder testimonial content that is the same for all entries. It provides a generic review of the service or product, ensuring uniformity across all testimonials.',
        isActive: true,
      },
      {
        name: 'Jamie Martin',
        title: 'Sales Executive at MarketMakers',
        rating: 5,
        content:
          'This is a placeholder testimonial content that is the same for all entries. It provides a generic review of the service or product, ensuring uniformity across all testimonials.',
        isActive: false,
      },
      {
        name: 'Taylor Reed',
        title: 'Creative Director at Visionary Studios',
        rating: 5,
        content:
          'This is a placeholder testimonial content that is the same for all entries. It provides a generic review of the service or product, ensuring uniformity across all testimonials.',
        isActive: true,
      },
    ],
    []
  );

  const sliderSettings = React.useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    }),
    []
  );

  return (
    <div className='w-full py-12 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-[#232340]'>
            What people say about Team
          </h2>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className='text-[#232340]'>
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                title={testimonial.title}
                rating={testimonial.rating}
                content={testimonial.content}
                isActive={testimonial.isActive}
              />
            ))}
          </Slider>
        </motion.div>
      </div>
    </div>
  );
};

export default Testi;
