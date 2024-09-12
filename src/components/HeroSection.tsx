'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const HeroSection: React.FC = React.memo(() => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  return (
    <section
      ref={ref}
      className='relative w-full h-screen bg-cover bg-center bg-fixed flex flex-col justify-center px-4 md:px-8 lg:px-16 xl:px-[140px]'
      style={{
        backgroundImage: `url('/orang.svg')`,
        backgroundColor: '#F5F5F5',
      }}>
      {/* Hero Heading */}
      <motion.h1
        className='text-[#F5F5F5] text-[40px] md:text-[50px] font-bold leading-[48px] md:leading-[64px] mb-4 max-w-[563px]'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
        transition={{ duration: 1 }}>
        Instant collaboration for remote teams
      </motion.h1>

      {/* Hero Subheading */}
      <motion.p
        className='text-[#F5F5F5] text-base md:text-lg font-normal leading-[24px] md:leading-[27px] mb-14 max-w-[397px]'
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
        transition={{ duration: 1, delay: 0.3 }}>
        All-in-one place for your remote team to chat, collaborate and track
        project progress.
      </motion.p>

      {/* Action Buttons */}
      <div className='relative flex flex-col md:flex-row gap-4'>
        <input
          type='email'
          placeholder='Email'
          className='w-full md:w-[298px] py-[11px] px-4 bg-[#F5F5F5] border-2 border-[#D1ECFD] rounded-md text-sm text-[#7676B2]'
          required
        />
        <button className='py-[10px] px-11 bg-[#5468E7] text-[#F5F5F5] text-lg font-normal rounded-md cursor-pointer'>
          Get Early Access
        </button>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
