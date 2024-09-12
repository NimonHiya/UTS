import React, { Suspense, lazy } from 'react';
import '@fontsource/lexend-deca'; // Import the font

// Lazy load components
const Navbar = lazy(() => import('../components/Navbar'));
const HeroSection = lazy(() => import('@/components/HeroSection'));
const Footer = lazy(() => import('../components/Footer'));
const MockupSection = lazy(() => import('@/components/MockupSection'));
const InfoSection = lazy(() => import('../components/InfoSection'));
const InfoSection1 = lazy(() => import('../components/InfoSection1'));
const InfoSection2 = lazy(() => import('@/components/InfoSection2'));
const Testi = lazy(() => import('@/components/Testi'));

const Home: React.FC = () => {
  return (
    <div className='relative bg-white min-h-screen flex flex-col font-lexend'>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar /> {/* Navbar */}
        <HeroSection /> {/* Hero Section */}
        <MockupSection />
        <InfoSection />
        <InfoSection1 />
        <InfoSection2 />
        <Testi /> {/* Testimonials Section */}
        <Footer /> {/* Footer */}
      </Suspense>
    </div>
  );
};

export default Home;
