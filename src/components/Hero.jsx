import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../../images/hero-background.jpg';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Tambahkan event listener
    window.addEventListener('scroll', handleScroll);

    // Bersihkan event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      className="relative pt-20 py-8 overflow-hidden"
      style={{ 
        height: '100vh',
        position: 'relative'
      }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${scrollY * 0.25}px)`,
          transition: 'transform 0.1s ease-out',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 relative z-10 flex items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white" 
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Berinovasi untuk
            <span className="text-[#2196F3]"> Masa Depan yang Lebih Baik</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Sekelompok remaja berdedikasi yang berkomitmen untuk memajukan inovasi ilmiah
            dan membentuk masa depan melalui prestasi akademik.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="#members"
              className="inline-block bg-[#2196F3] text-white px-8 py-3 rounded-full
                        hover:bg-[#1976D2] transition-colors duration-200"
            >
              Temui Tim Kami
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}