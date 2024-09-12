'use client';

import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '@fontsource/lexend-deca';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Section: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className='py-8 sm:py-12 lg:py-16'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
          <motion.div
            className='relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last'
            variants={sectionVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.3, duration: 0.8 }}>
            <Image
              alt='Illustrative mockup'
              src='/mockup.png'
              fill
              sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
              style={{ objectFit: 'cover' }}
              className='absolute inset-0'
              priority
            />
          </motion.div>

          <motion.div
            ref={ref}
            variants={sectionVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='flex flex-col lg:py-24'>
            <h2 className='text-3xl font-bold text-[#232340] sm:text-4xl lg:text-5xl leading-tight'>
              Chats for your distributed teams
            </h2>
            <p className='mt-4 text-lg text-[#232340] leading-relaxed'>
              Team combines the immediacy of real-time chat with an email
              threading model. With Team, you can catch up on important
              conversations while ignoring irrelevant ones.
            </p>
            <a
              href='#'
              className='mt-6 inline-flex items-center text-[#5468E7] font-medium underline underline-offset-2 transition-transform duration-200 ease-in-out hover:scale-105'
              aria-label='Learn more about chat features'>
              <span className='pr-2'>Learn more</span>
              <FaArrowRight />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section;
