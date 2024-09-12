'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Variants untuk animasi
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Komponen AnimatedSection dengan variants
const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      variants={sectionVariants}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.8 }}>
      {children}
    </motion.div>
  );
};
AnimatedSection.displayName = 'AnimatedSection'; // Menambahkan display name

// Komponen FooterSection yang di-memo
const FooterSection = React.memo(
  ({ title, items }: { title: string; items: string[] }) => (
    <div className='flex-1 mb-8 md:mb-0'>
      <div className='text-[#5468E7] text-xl md:text-2xl font-normal mb-4'>
        {title}
      </div>
      {items.map((item) => (
        <div
          key={item}
          className='text-white text-xs md:text-sm font-normal leading-[20px] md:leading-[23px] mb-2'>
          {item}
        </div>
      ))}
    </div>
  )
);
FooterSection.displayName = 'FooterSection'; // Menambahkan display name

// Komponen ContactSection yang di-memo
const ContactSection = React.memo(() => (
  <div className='flex-1 mb-8 md:mb-0'>
    <div className='text-[#5468E7] text-xl md:text-2xl font-normal mb-4'>
      Contact Us
    </div>
    <div className='text-white text-xs md:text-sm font-normal leading-[20px] md:leading-[23px] mb-2'>
      info@teamapp.com
    </div>
    <div className='text-white text-xs md:text-sm font-normal leading-[20px] md:leading-[23px] mb-2'>
      1-800-200-300
    </div>
    <div className='text-white text-xs md:text-sm font-normal leading-[20px] md:leading-[23px]'>
      1010 Sunset Blv.
      <br />
      Palo Alto, California
    </div>
  </div>
));
ContactSection.displayName = 'ContactSection'; // Menambahkan display name

// Komponen StayUpToDateSection yang di-memo
const StayUpToDateSection = React.memo(() => (
  <div className='flex-1'>
    <div className='text-[#5468E7] text-xl md:text-2xl font-normal mb-4'>
      Stay up to date
    </div>
    <div className='text-white text-xs md:text-sm font-normal leading-[20px] md:leading-[23px] mb-4'>
      Subscribe to our newsletter
    </div>
    <div className='flex flex-col md:flex-row'>
      <input
        type='email'
        placeholder='Email'
        className='flex-1 p-3 bg-[rgba(245,245,245,0.24)] border-none rounded-md text-white text-xs md:text-sm'
        required // Menambahkan atribut required
      />
      <button className='bg-[rgba(245,245,245,0.24)] border-none rounded-md p-3 mt-2 md:mt-0 md:ml-2 cursor-pointer'>
        <span className='text-white text-lg md:text-xl'>→</span>
      </button>
    </div>
  </div>
));
StayUpToDateSection.displayName = 'StayUpToDateSection'; // Menambahkan display name

// Komponen Footer
const Footer = () => {
  return (
    <div className='w-full min-h-[500px] bg-[#232340] p-6 sm:p-10 md:px-24 lg:px-36 relative flex flex-col'>
      {/* Content Container */}
      <div className='flex-1'>
        {/* Logo and Tagline */}
        <AnimatedSection>
          <div className='flex flex-col items-start gap-4 mb-8 md:mb-10'>
            <div className='flex items-center'>
              <div>
                <span className='text-white text-[30px] md:text-[50px] font-semibold leading-[30px] md:leading-[50px]'>
                  team
                </span>
                <span className='text-[#5468E7] text-[32px] md:text-[52px] font-semibold leading-[32px] md:leading-[52px]'>
                  .
                </span>
              </div>
            </div>
            <div className='text-white text-xs md:text-sm font-normal leading-[20px] md:leading-[23px]'>
              Collaboration platform for modern teams
            </div>
          </div>
        </AnimatedSection>

        {/* Footer Links */}
        <AnimatedSection>
          <div className='flex flex-col md:flex-row md:justify-between'>
            {/* Company Section */}
            <FooterSection
              title='Company'
              items={['Product', 'Blog', 'Support']}
            />

            {/* Features Section */}
            <FooterSection
              title='Features'
              items={[
                'Screen Sharing',
                'iOS & Android Apps',
                'File Sharing',
                'User Management',
              ]}
            />

            {/* Contact Us Section */}
            <ContactSection />

            {/* Stay Up to Date Section */}
            <StayUpToDateSection />
          </div>
        </AnimatedSection>
      </div>

      {/* Copyright Section */}
      <AnimatedSection>
        <div className='text-white text-xs font-normal opacity-50 mt-8 md:mt-10'>
          © Copyright Team Inc.
        </div>
      </AnimatedSection>
    </div>
  );
};

Footer.displayName = 'Footer'; // Menambahkan display name

export default Footer;
