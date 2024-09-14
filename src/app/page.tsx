'use client';

import React, { useState, useEffect, memo } from 'react';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import Loading from '../components/loading';
import '@fontsource/lexend-deca';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import Navbar from '../components/Navbar';
import HeroSection from '@/components/HeroSection';
import MockupSection from '@/components/MockupSection';

const MemoizedNavbar = memo(Navbar);

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

  const { ref: infoSectionRef, inView: infoSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: infoSection1Ref, inView: infoSection1InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: infoSection2Ref, inView: infoSection2InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: testiRef, inView: testiInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleDarkMode = (checked: boolean) => {
    setIsDarkMode(checked);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    setIsDarkMode(savedMode === 'dark');
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div
      className={`relative min-h-screen flex flex-col font-lexend ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}>
      <MemoizedNavbar />
      <HeroSection />
      <MockupSection />

      <div ref={infoSectionRef}>{infoSectionInView && <InfoSection />}</div>

      <div ref={infoSection1Ref}>{infoSection1InView && <InfoSection1 />}</div>

      <div ref={infoSection2Ref}>{infoSection2InView && <InfoSection2 />}</div>

      <div ref={testiRef}>{testiInView && <Testi />}</div>

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
