import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: '100%', 
      transition: { 
        duration: 1, 
        ease: "easeInOut" 
      } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6 
      } 
    }
  };

  const handleNavigation = (hash) => {
    if (window.location.pathname !== '/') {
      navigate('/', { 
        state: { hash },
        replace: true 
      });
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth' 
        });
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto relative"
        >
          <h2 className="text-3xl font-bold mb-6">Misi Kami</h2>
          
          {/* Animated Line */}
          <motion.div 
            variants={lineVariants}
            className="absolute left-1/2 transform -translate-x-1/2 h-1 bg-primary"
            style={{ 
              width: 0, 
              top: '100%', 
              marginTop: '10px' 
            }}
          />
          
          <p className="text-gray-600 text-lg leading-relaxed">
          Kami adalah sekelompok mahasiswa yang berdedikasi untuk mendorong batas-batas
            inovasi ilmiah. Melalui pembelajaran dan penelitian kolaboratif, 
            kami bertujuan untuk berkontribusi pada kemajuan teknologi dan kemajuan masyarakat.
            Tim kami yang beragam membawa perspektif dan keterampilan unik, 
            yang disatukan oleh semangat bersama untuk memecahkan tantangan kompleks 
            dan mendorong perubahan bermakna.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Meet Our Team", 
              description: "Lihat Tentang Kami",
              hash: "#members"
            },
            { 
              title: "Harapan Kami di 2025", 
              description: "Rencana yang Kami Rencanakan di Tahun 2025 ini.",
              hash: "#hopes"
            },
            {
              title: "Our Academic Journey", 
              description: "Lihat Perjalanan Akademis kami.",
              hash: "#timeline"
            }
          ].map((item, index) => (
            <motion.div 
              key={item.title}
              variants={cardVariants}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleNavigation(item.hash)}
              className="border-2 border-primary text-center p-6 shadow-2xl bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}