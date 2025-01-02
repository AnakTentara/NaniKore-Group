import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import SideNavigation from './SideNavigation';
import Biodata from './Biodata'
import { motion } from 'framer-motion';
import backgroundImage from '../../../images/hero-background.jpg';

export default function ProfileLayout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Section foto hero */}
      <div>
        <div
          className="w-full h-[60vh] bg-cover bg-center relative flex items-center justify-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to bottom, black 1  0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
          }}
        >
          {/* Overlay gelap */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Judul di tengah */}
          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              <span className="text-primary">Member</span> Profile
            </h1>
          </div>
        </div>
      </div>

      <div
        className="min-h-screen relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <Breadcrumb />
          <div className="flex flex-col lg:flex-row gap-8">
            <main className="lg:w-[70%]">{children}</main>
            <aside className="lg:w-[30%]">
              <Biodata />
              <br />
              <SideNavigation />
            </aside>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 w-full h-1/2"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' id='svg' viewBox='0 0 1440 490' xmlns='http://www.w3.org/2000/svg' class='transition duration-300 ease-in-out delay-150'%3E%3Cpath d='M 0,500 C 0,500 0,250 0,250 C 126.42857142857142,234.10714285714286 252.85714285714283,218.21428571428572 349,211 C 445.1428571428572,203.78571428571428 511,205.25 598,211 C 685,216.75 793.1428571428571,226.78571428571428 890,236 C 986.8571428571429,245.21428571428572 1072.4285714285716,253.60714285714286 1170,251 C 1267.5714285714284,248.39285714285714 1377.1428571428571,234.78571428571428 1440,221 C 1440,221 1440,500 1440,500 Z' stroke='none' stroke-width='0' fill='%232196f340' %3E%3C/path%3E%3Cpath d='M 0,500 C 0,500 0,125 0,125 C 86.03571428571429,146.60714285714286 172.07142857142858,168.21428571428572 288,159 C 403.92857142857144,149.78571428571428 549.75,109.75 662,89 C 774.25,68.25 852.9285714285714,66.78571428571429 945,71 C 1037.0714285714287,75.21428571428571 1142.4285714285716,85.10714285714286 1247,91 C 1351.5714285714284,96.89285714285714 1455.3571428571429,98.78571428571429 1440,100 C 1440,100 1440,500 1440,500 Z' stroke='none' stroke-width='0' fill='%232196f320' %3E%3C/path%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
          }}
        />
      </div>
    </motion.div>
  );
}