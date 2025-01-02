import React from 'react';
import { motion } from 'framer-motion';
import icon from '../../images/icon.png';

export default function LoadingPage() {
  return (
    <div 
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          transition: { 
            duration: 0.5,
            type: "spring",
            stiffness: 200
          }
        }}
        className="text-center"
      >
        {/* Logo Berputar */}
        <motion.img 
          src={icon}
          alt="NaniKore Group Logo"
          animate={{ 
            transition: { 
              duration: 2, 
              repeat: Infinity, 
              ease: "linear" 
            }
          }}
          className="w-32 rounded-full h-32 mx-auto mb-6"
        />

        {/* Judul */}
        <h1 className="text-3xl font-bold text-primary mb-4">
          NaniKore Group
        </h1>

        {/* Loading Bar */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ 
            width: '100%',
            transition: { 
              duration: 2, 
              ease: "easeInOut" 
            }
          }}
          className="h-1 bg-primary mx-auto max-w-xs"
        />

        {/* Sub Text */}
        <p className="mt-4 text-gray-600">
          Memuat konten...
        </p>
      </motion.div>
    </div>
  );
}