'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Loading from '../components/loading';
import '@fontsource/lexend-deca';

import Navbar from '../components/Navbar';
import HeroSection from '@/components/HeroSection';
import MockupSection from '@/components/MockupSection';

const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <Loading />,
  ssr: false,
});
const InfoSection = dynamic(() => import('../components/InfoSection'), {
  loading: () => <Loading />,
  ssr: false,
});
const InfoSection1 = dynamic(() => import('../components/InfoSection1'), {
  loading: () => <Loading />,
  ssr: false,
});
const InfoSection2 = dynamic(() => import('../components/InfoSection2'), {
  loading: () => <Loading />,
  ssr: false,
});
const Testi = dynamic(() => import('@/components/Testi'), {
  loading: () => <Loading />,
  ssr: false,
});

const Home: React.FC = () => {
  return (
    <div className='relative bg-white min-h-screen flex flex-col font-lexend'>
      <Navbar />
      <HeroSection />
      <MockupSection />

      {/* Render dynamically imported components directly */}
      <InfoSection />
      <InfoSection1 />
      <InfoSection2 />
      <Testi />

      <Footer />
    </div>
  );
};

export default Home;
