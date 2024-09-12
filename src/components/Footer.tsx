'use client';

import React from 'react';

interface FooterSectionProps {
  title: string;
  items: string[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => (
  <div className='flex-1 mb-8 md:mb-0'>
    <div className='text-[#5468E7] text-xl md:text-2xl font-normal mb-4'>
      {title}
    </div>
    {items.map((item) => (
      <div
        key={item}
        className='text-white text-xs md:text-sm font-normal mb-2'>
        {item}
      </div>
    ))}
  </div>
);

const ContactSection: React.FC = () => (
  <div className='flex-1 mb-8 md:mb-0'>
    <div className='text-[#5468E7] text-xl md:text-2xl font-normal mb-4'>
      Contact Us
    </div>
    <div className='text-white text-xs md:text-sm font-normal mb-2'>
      info@teamapp.com
    </div>
    <div className='text-white text-xs md:text-sm font-normal mb-2'>
      1-800-200-300
    </div>
    <div className='text-white text-xs md:text-sm font-normal'>
      1010 Sunset Blv., Palo Alto, California
    </div>
  </div>
);

const StayUpToDateSection: React.FC = () => (
  <div className='flex-1'>
    <div className='text-[#5468E7] text-xl md:text-2xl font-normal mb-4'>
      Stay up to date
    </div>
    <div className='text-white text-xs md:text-sm font-normal mb-4'>
      Subscribe to our newsletter
    </div>
    <div className='flex flex-col md:flex-row'>
      <input
        type='email'
        placeholder='Email'
        className='flex-1 p-3 bg-[rgba(245,245,245,0.24)] border-none rounded-md text-white'
        required
      />
      <button className='bg-[rgba(245,245,245,0.24)] border-none rounded-md p-3 mt-2 md:mt-0 md:ml-2 cursor-pointer'>
        →
      </button>
    </div>
  </div>
);

const Footer: React.FC = () => (
  <div className='w-full min-h-[500px] bg-[#232340] p-6 sm:p-10 md:px-24 lg:px-36 flex flex-col'>
    <div className='flex flex-col items-start gap-4 mb-8 md:mb-10'>
      <div className='text-white text-[30px] md:text-[50px] font-semibold leading-[30px] md:leading-[50px]'>
        team<span className='text-[#5468E7]'>.</span>
      </div>
      <div className='text-white text-xs md:text-sm font-normal'>
        Collaboration platform for modern teams
      </div>
    </div>
    <div className='flex flex-col md:flex-row md:justify-between'>
      <FooterSection title='Company' items={['Product', 'Blog', 'Support']} />
      <FooterSection
        title='Features'
        items={[
          'Screen Sharing',
          'iOS & Android Apps',
          'File Sharing',
          'User Management',
        ]}
      />
      <ContactSection />
      <StayUpToDateSection />
    </div>
    <div className='text-white text-xs font-normal opacity-50 mt-8 md:mt-10'>
      © Copyright Team Inc.
    </div>
  </div>
);

export default Footer;
