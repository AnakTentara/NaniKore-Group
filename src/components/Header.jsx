import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';
import icon from '../../images/icon.png';

const navigation = [
  { name: 'Beranda', href: '/', hash: '#home' },
  { name: 'Tentang', href: '/', hash: '#about' },
  { name: 'Anggota', href: '/', hash: '#members' },
  { name: 'Harapan', href: '/', hash: '#hopes' },
  { name: 'Timeline', href: '/', hash: '#timeline' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavigation = (event, href, hash) => {
    event.preventDefault();

    if (location.pathname !== '/') {
      navigate('/', { 
        state: { hash },
        replace: true 
      });
    } else {
      const element = document.querySelector(hash);
      if (element) {  
        const offset = 30;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }

    setIsOpen(false);
  };

  const menuVariants = {
    hidden: { 
      opacity: 0, 
      x: "100%", 
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1, 
      x: 0,
      transition: {
        delay: index * 0.1
      }
    })
  };

  const handleLogoClick = (event) => {
    event.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/', { 
        state: { hash: '#home' },
        replace: true 
      });
    } else {
      // If already on home page, scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="bg-white shadow-md py-2 fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <motion.div className="flex items-center" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} onClick={handleLogoClick}>
            <motion.img
              src={icon}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="w-11 rounded-full px-1"
            />
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="px-2 text-2xl font-bold text-[#2196F3]"
            >
              NaniKore Group
            </motion.h1>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.1 }}
                key={item.name}
                href={`${item.href}${item.hash}`}
                onClick={(event) => handleNavigation(event, item.href, item.hash)}
                className="text-gray-700 hover:text-[#2196F3] transition-colors duration-100 relative group"
                onHoverStart={() => setHoveredItem(item.name)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2196F3] group-hover:w-full transition-all duration-100"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: hoveredItem === item.name ? '100%' : 0 
                  }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? (
                <FiX className="h-6 w-6 text-gray-600" />
              ) : (
                <FiMenu className="h-6 w-6 text-gray-600" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="md:hidden fixed inset-0 bg-white z-40 overflow-hidden"
              style={{ 
                width: '100vw', 
                height: '100vh', 
                left: 0, 
                top: 0 
              }}
            >
              <div className="flex flex-col h-full">
                {/* Close Button */}
                <div className="flex justify-end p-4">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="p-2"
                  >
                    <FiX className="h-6 w-6 text-gray-600" />
                  </motion.button>
                </div>

                {/* Navigation Items */}
                <div className="flex-grow flex flex-col justify-center space-y-6 px-6">
                  {navigation.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={`${item.href}${item.hash}`}
                      onClick={(event) => handleNavigation(event, item.href, item.hash)}
                      variants={itemVariants}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      className="text-2xl text-center text-gray-700 hover:text-[#2196F3] transition-colors duration-200"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}