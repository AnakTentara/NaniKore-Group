import React from 'react';
import { motion } from 'framer-motion';
import icon from '../../images/icon.png';

export default function LoadingPage() {
  return (
    <div 
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-white via-blue-50 to-blue-100 
      flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          transition: { 
            duration: 0.6,
            type: "spring",
            stiffness: 150
          }
        }}
        className="text-center p-8 rounded-2xl shadow-2xl bg-white/70 backdrop-blur-lg"
      >
        {/* Logo dengan Animasi Subtle */}
        <motion.img 
          src={icon}
          alt="NaniKore Group Logo"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            transition: {
              duration: 0.7,
              type: "spring"
            }
          }}
          className="w-40 h-40 rounded-full mx-auto mb-8 shadow-xl 
          border-4 border-primary/20 transform hover:scale-105 transition-transform"
        />

        {/* Loading Progress */}
        <div className="relative w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden mb-6">
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: ['0%', '50%', '100%'],
              transition: {
                duration: 2,
                times: [0, 0.5, 1],
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-blue-500 rounded-full"
          />
        </div>

        {/* Judul Dinamis */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.6,
              delay: 0.3
            }
          }}
          className="text-3xl font-bold text-gray-800 mb-4"
        >
          NaniKore Group
        </motion.h1>

        {/* Sub Teks Animasi */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { 
              duration: 0.6,
              delay: 0.6
            }
          }}
        >
          <p className="text-gray-600 mb-2">
            Memuat konten...
          </p>
          <p className="text-sm text-gray-500">
            Mohon tunggu sebentar
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}