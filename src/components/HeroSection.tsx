'use client';

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const HeroSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [bgImageLoaded, setBgImageLoaded] = useState(false);

  useEffect(() => {
    if (inView) {
      const img = new Image();
      img.src = '/orang.png'; // Ensure the path is correct
      img.onload = () => setBgImageLoaded(true);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className={`relative w-full h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 xl:px-[140px] bg-cover bg-center transition-all duration-500 ease-in-out ${
        bgImageLoaded ? 'bg-[url(/orang.png)]' : 'bg-[#F5F5F5]'
      }`}>
      <h1 className='text-white text-4xl md:text-5xl font-bold mb-4 max-w-md'>
        Instant collaboration for remote teams
      </h1>

      <p className='text-white text-base md:text-lg mb-14 max-w-md'>
        All-in-one place for your remote team to chat, collaborate, and track
        project progress.
      </p>

      <div className='flex flex-col md:flex-row gap-4'>
        <input
          type='email'
          placeholder='Email'
          className='w-full md:w-[298px] py-2 px-4 bg-white border-2 border-blue-200 rounded-md text-sm text-gray-600'
          required
          aria-label='Email address'
        />
        <button className='py-2 px-6 bg-blue-600 text-white text-lg rounded-md'>
          Get Early Access
        </button>
      </div>
    </section>
  );
};

HeroSection.displayName = 'HeroSection';

export default HeroSection;
