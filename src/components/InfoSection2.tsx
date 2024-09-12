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
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  return (
    <section
      ref={ref}
      className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
        {/* Image Section */}
        <motion.div
          className='relative h-64 overflow-hidden lg:h-full'
          variants={sectionVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.5, duration: 1 }}>
          <Image
            alt='Mockup'
            src='/angle.png'
            fill
            style={{ objectFit: 'cover' }}
            className='absolute inset-0'
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={sectionVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.5, duration: 1 }}
          className='relative lg:py-24'>
          <h2 className='text-3xl font-bold text-[#232340] sm:text-4xl lg:text-5xl leading-tight'>
            Move faster with your Team tools
          </h2>

          <p className='mt-4 text-lg text-[#232340] leading-relaxed'>
            With your other work apps connected to Team, you can work faster by
            switching tabs less. And with powerful tools like Workflow Builder,
            you can automate away routine tasks.
          </p>

          <a
            href='#'
            className='mt-6 inline-flex items-center text-[#5468E7] font-medium underline underline-offset-2 transition-transform duration-200 ease-in-out hover:scale-105'>
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