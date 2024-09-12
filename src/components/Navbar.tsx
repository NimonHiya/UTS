'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navItems = ['Products', 'Blog', 'Support', 'Login'];

  return (
    <nav
      className={`fixed w-full top-0 z-20 py-3 px-4 shadow-md transition-colors duration-300 ${
        isScrolled ? 'bg-[#232340]' : 'bg-transparent'
      }`}>
      <div className='container mx-auto flex justify-between items-center'>
        <Image src='/Logo.png' width={138} height={52} alt='Logo' priority />

        <div className='hidden md:flex space-x-6'>
          {navItems.map((item) => (
            <a
              key={item}
              href='#'
              className='text-gray-100 hover:text-blue-300'>
              {item}
            </a>
          ))}
          <button className='bg-blue-600 text-white py-2 px-4 rounded'>
            Get Access
          </button>
        </div>

        <button
          className='md:hidden text-white text-2xl'
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label='Toggle menu'>
          <RxHamburgerMenu />
        </button>
      </div>

      {isMenuOpen && (
        <div className='md:hidden bg-[#232340] py-4'>
          {navItems.map((item) => (
            <a key={item} href='#' className='block py-2 px-4 text-gray-100'>
              {item}
            </a>
          ))}
          <button className='block bg-blue-600 text-white py-2 px-4 w-full text-center mt-4 rounded'>
            Get Access
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
