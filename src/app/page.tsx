import dynamic from 'next/dynamic';
import '@fontsource/lexend-deca'; // Import the font

// Lazy load components with dynamic import
const Navbar = dynamic(() => import('../components/Navbar'), {
  loading: () => <div>Loading navbar...</div>,
  ssr: false,
});
const HeroSection = dynamic(() => import('@/components/HeroSection'), {
  loading: () => <div>Loading hero section...</div>,
  ssr: false,
});
const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <div>Loading footer...</div>,
  ssr: false,
});
const MockupSection = dynamic(() => import('@/components/MockupSection'), {
  loading: () => <div>Loading mockup section...</div>,
  ssr: false,
});
const InfoSection = dynamic(() => import('../components/InfoSection'), {
  loading: () => <div>Loading info section...</div>,
  ssr: false,
});
const InfoSection1 = dynamic(() => import('../components/InfoSection1'), {
  loading: () => <div>Loading info section 1...</div>,
  ssr: false,
});
const InfoSection2 = dynamic(() => import('@/components/InfoSection2'), {
  loading: () => <div>Loading info section 2...</div>,
  ssr: false,
});
const Testi = dynamic(() => import('@/components/Testi'), {
  loading: () => <div>Loading testimonials...</div>,
  ssr: false,
});

const Home: React.FC = () => {
  return (
    <div className='relative bg-white min-h-screen flex flex-col font-lexend'>
      <Navbar />
      <HeroSection />
      <MockupSection />
      <InfoSection />
      <InfoSection1 />
      <InfoSection2 />
      <Testi />
      <Footer />
    </div>
  );
};

export default Home;
