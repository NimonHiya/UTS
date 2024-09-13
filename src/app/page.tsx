'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Loading from '../components/loading';
import '@fontsource/lexend-deca';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

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
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Toggle dark mode and save preference to local storage
  const toggleDarkMode = (checked: boolean) => {
    setIsDarkMode(checked);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    setIsDarkMode(savedMode === 'dark');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div
      className={`relative min-h-screen flex flex-col font-lexend ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}>
      <Navbar />
      <HeroSection />
      <MockupSection />
      <InfoSection />
      <InfoSection1 />
      <InfoSection2 />
      <Testi />
      <Footer />
      <div className='fixed bottom-4 right-4 md:bottom-8 lg:right-10'>
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={30}
          sunColor='gray'
          moonColor='white'
        />
      </div>
    </div>
  );
};

export default Home;
