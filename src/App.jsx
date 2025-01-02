import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate
} from 'react-router-dom';
import { motion } from 'framer-motion';

import LoadingPage from './components/LoadingPage';
import Header from './components/Header';
import Hero from './components/Hero';
import MemberProfile from './pages/MemberProfile';
import MemberCard from './components/MemberCard';
import { members } from './data/members';
import Timeline from './components/Timeline';
import About from './components/About';
import Footer from './components/Footer';

import heroImage from '../images/hero-background.jpg';
import haikal from '../images/members/haikal-mabrur.jpeg';
import febri from '../images/members/febriady.jpg';
import rendra from '../images/members/rendra-agus-setiawan.jpg';
import roihan from '../images/members/roihan-indriansyah.jpg';
import yahya from '../images/members/yahya-irsyadi.jpg';

import { PreventInteractions } from './components/preventInteractions';

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.state?.hash || location.hash;

    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        const navbar = document.querySelector('header');
        const navbarHeight = navbar ? navbar.offsetHeight : 80;

        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  return null;
}

function CatchAllRoute() {
  return <Navigate to="/" replace />;
}

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

function HomePage() {
  return (
    <>
      <motion.section
        id="home"
        className="py-18"
        initial="hidden"
        whileInView="visible"
        viewport={{
          amount: 0.1
        }}
        variants={sectionVariants}
      >
        <Hero />
      </motion.section>

      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{
          amount: 0.1
        }}
        variants={sectionVariants}
      >
        <About />
      </motion.section>

      <motion.section id="members" className="py-24 bg-neutral relative 
    before:absolute before:bottom-0 before:left-0 before:w-full 
    before:h-32 before:bg-gradient-to-t before:from-white before:to-transparent"

        initial="hidden"
        whileInView="visible"
        viewport={{
          amount: 0.1
        }}
        variants={sectionVariants}

        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='75%25' height='50%25' id='svg' viewBox='0 0 1440 490' xmlns='http://www.w3.org/2000/svg' class='transition duration-300 ease-in-out delay-150'%3E%3Cpath d='M 0,500 C 0,500 0,250 0,250 C 126.42857142857142,234.10714285714286 252.85714285714283,218.21428571428572 349,211 C 445.1428571428572,203.78571428571428 511,205.25 598,211 C 685,216.75 793.1428571428571,226.78571428571428 890,236 C 986.8571428571429,245.21428571428572 1072.4285714285716,253.60714285714286 1170,251 C 1267.5714285714284,248.39285714285714 1377.1428571428571,234.78571428571428 1440,221 C 1440,221 1440,500 1440,500 Z' stroke='none' stroke-width='0' fill='%232196f340' %3E%3C/path%3E%3Cpath d='M 0,500 C 0,500 0,125 0,125 C 86.03571428571429,146.60714285714286 172.07142857142858,168.21428571428572 288,159 C 403.92857142857144,149.78571428571428 549.75,109.75 662,89 C 774.25,68.25 852.9285714285714,66.78571428571429 945,71 C 1037.0714285714287,75.21428571428571 1142.4285714285716,85.10714285714286 1247,91 C 1351.5714285714284,96.89285714285714 1455.3571428571429,98.78571428571429 1440,100 C 1440,100 1440,500 1440,500 Z' stroke='none' stroke-width='0' fill='%232196f320' %3E%3C/path%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}

      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <MemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="hopes" className="py-20 bg-white"

        initial="hidden"
        whileInView="visible"
        viewport={{
          amount: 0.1
        }}
        variants={sectionVariants}

      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Harapan Kami di 2025</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <motion.div
                whileTap={{ scale: 0.98 }}
                key={member.name}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="border-2 border-primary bg-gray-50 p-6 rounded-lg shadow-xl"
              >
                <h3 className="text-xl font-bold mb-4 text-primary">
                  {member.name}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {member.hopes && member.hopes.map((hope, index) => (
                    <li key={index} className="text-sm">
                      {hope}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="timeline" className="bg-neutral"

        initial="hidden"
        whileInView="visible"
        viewport={{
          amount: 0.1
        }}
        variants={sectionVariants}

        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='75%25' height='50%25' id='svg' viewBox='0 0 1440 490' xmlns='http://www.w3.org/2000/svg' class='transition duration-300 ease-in-out delay-150'%3E%3Cpath d='M 0,500 C 0,500 0,250 0,250 C 126.42857142857142,234.10714285714286 252.85714285714283,218.21428571428572 349,211 C 445.1428571428572,203.78571428571428 511,205.25 598,211 C 685,216.75 793.1428571428571,226.78571428571428 890,236 C 986.8571428571429,245.21428571428572 1072.4285714285716,253.60714285714286 1170,251 C 1267.5714285714284,248.39285714285714 1377.1428571428571,234.78571428571428 1440,221 C 1440,221 1440,500 1440,500 Z' stroke='none' stroke-width='0' fill='%232196f340' %3E%3C/path%3E%3Cpath d='M 0,500 C 0,500 0,125 0,125 C 86.03571428571429,146.60714285714286 172.07142857142858,168.21428571428572 288,159 C 403.92857142857144,149.78571428571428 549.75,109.75 662,89 C 774.25,68.25 852.9285714285714,66.78571428571429 945,71 C 1037.0714285714287,75.21428571428571 1142.4285714285716,85.10714285714286 1247,91 C 1351.5714285714284,96.89285714285714 1455.3571428571429,98.78571428571429 1440,100 C 1440,100 1440,500 1440,500 Z' stroke='none' stroke-width='0' fill='%232196f320' %3E%3C/path%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}

      >
        <Timeline />
      </motion.section>

    </>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        const criticalImages = [
          `${heroImage}`,
          `${haikal}`,
          `${febri}`,
          `${rendra}`,
          `${roihan}`,
          `${yahya}`,

          ...members.map(m => m.image)
        ];

        await Promise.all(
          criticalImages.map(src => 
            new Promise((resolve, reject) => {
              const img = new Image();
              img.src = src;
              img.onload = resolve;
              img.onerror = reject;
            })
          )
        );

        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsLoading(false);
      } catch (error) {
        console.error("Asset loading error:", error);
        setIsLoading(false);
      }
    };

    loadAssets();
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="overflow-x-hidden min-h-screen">
      <PreventInteractions />
      <Router>
        <ScrollManager />
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/members/:memberId" element={<MemberProfile />} />
            <Route path="*" element={<CatchAllRoute />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}