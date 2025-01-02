import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: '2024',
    title: 'Memasuki MA Negeri 1 Muara Enim',
    description: 'Kelas 10'
  },
  {
    year: '2025',
    title: 'Tahun Kedua di MAN 1 Muara Enim',
    description: 'Kelas 11'
  },
  {
    year: '2026',
    title: 'Tahun Ketiga di MAN 1 Muara Enim',
    description: 'Kelas 12'
  },
  {
    year: '2027',
    title: 'Selesai Sekolah di MAN 1 Muara Enim',
    description: 'Persiapan ke Jenjang Berikutnya.'
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Academic Journey</h2>
        <div className="relative">
          {/* Vertical Line dengan Desain Lebih Menarik */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary/30 to-primary/80 h-full top-0">
            {/* Dot-dot pada Vertical Line */}
            {timelineEvents.map((_, index) => (
              <div 
                key={index} 
                className="absolute w-4 h-4 bg-white border-2 border-primary rounded-full -left-1.5"
                style={{ 
                  top: `${(index / (timelineEvents.length - 1)) * 100}%`,
                  transform: 'translateY(-50%)'
                }}
              />
            ))}
          </div>
          
          <div className="space-y-8 md:space-y-0">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className={`
                  relative flex flex-col md:flex-row 
                  ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}
                  md:items-center md:justify-between
                `}
              >
                {/* Dot untuk Mobile */}
                <div className="md:hidden absolute left-4 top-0 w-4 h-4 bg-primary rounded-full z-10"></div>
                
                <div className={`
                  w-full md:w-[45%] 
                  ${index % 2 === 1 ? 'md:text-right' : 'md:text-left'}
                  bg-white p-6 rounded-lg shadow-xl border border-primary/10 
                  hover:shadow-2xl transition-all duration-300
                `}>
                  <motion.h3 
                    className="text-xl font-bold text-[#2196F3] mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {event.year}
                  </motion.h3>
                  <motion.h4 
                    className="text-lg font-semibold mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {event.title}
                  </motion.h4>
                  <motion.p 
                    className="text-gray-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {event.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}