'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const RxHamburgerMenu = dynamic(
  () => import('react-icons/rx').then((mod) => mod.RxHamburgerMenu),
  { ssr: false }
);

const Navbar: React.FC = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (!isMenuOpen) setIsScrolling(true);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setIsMenuOpen(false);
        setIsScrolling(window.scrollY > 0);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
        isScrolling || isMenuOpen
          ? 'bg-[#232340] shadow-lg py-3 px-2'
          : 'bg-transparent py-1'
      }`}>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center text-sm'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Image src='/Logo.svg' width={138} height={52} alt='Logo' />
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-8 items-center'>
            {['Products', 'Blog', 'Support', 'Login'].map((item) => (
              <a
                key={item}
                href='#'
                className='text-gray-100 hover:text-blue-300 underline'>
                {item}
              </a>
            ))}
            <div className='inline-flex items-center justify-center gap-2 p-2 px-4 bg-blue-500 bg-opacity-50 border-2 border-blue-700 rounded'>
              <span className='text-white text-lg font-medium'>Get Access</span>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div
            onClick={handleOpenMenu}
            className='md:hidden cursor-pointer text-2xl text-white'>
            <RxHamburgerMenu />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div
          className={`py-2 ${isMenuOpen ? 'bg-[#232340]' : 'bg-transparent'}`}>
          <div className='px-4 pt-4 pb-2 space-y-2'>
            {['Products', 'Blog', 'Support', 'Login'].map((item) => (
              <a
                key={item}
                href='#'
                className='block text-gray-100 hover:text-blue-300 underline'>
                {item}
              </a>
            ))}
            <div className='inline-flex items-center justify-center gap-2 p-2 px-4 bg-blue-500 bg-opacity-50 border-2 border-blue-700 rounded'>
              <span className='text-white text-lg font-medium'>Get Access</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
