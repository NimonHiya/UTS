'use client';

import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Variants for animation
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Section: React.FC = React.memo(() => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
        <motion.div
          className='relative h-64 overflow-hidden sm:h-80 lg:order-last lg:h-full'
          variants={sectionVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.5, duration: 0.8 }}>
          <Image
            alt='Illustrative mockup showcasing features'
            src='/Rec.png'
            fill
            sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
            style={{ objectFit: 'cover' }}
            className='absolute inset-0'
            priority
          />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.5, duration: 0.8 }}
          className='flex flex-col justify-center lg:py-24'>
          <h2 className='text-3xl font-bold text-[#232340] sm:text-4xl lg:text-5xl leading-tight'>
            Choose how you want to work
          </h2>
          <p className='mt-4 text-lg text-[#232340] leading-relaxed'>
            In Team, you’ve got all the flexibility to work when, where, and how
            it’s best for you. You can easily chat, send audio and video clips,
            or hop on a huddle to talk things out live.
          </p>
          <a
            href='#'
            className='mt-6 inline-flex items-center text-[#5468E7] font-medium underline underline-offset-2 transition-transform duration-200 ease-in-out hover:scale-105'
            aria-label='Learn more about flexible working options'>
            <span className='pr-2'>Learn more</span>
            <FaArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
});

Section.displayName = 'Section';

export default Section;
