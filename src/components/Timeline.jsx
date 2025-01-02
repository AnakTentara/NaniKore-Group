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
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-primary h-full top-0"></div>
          
          <div className="space-y-8 md:space-y-0">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className={`
                  relative flex flex-col md:flex-row 
                  ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}
                  md:items-center md:justify-between
                `}
              >
                {/* Dot for Desktop */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-4 h-4 bg-primary rounded-full z-10"></div>
                
                <div className={`
                  w-full md:w-[45%] 
                  ${index % 2 === 1 ? 'md:text-right' : 'md:text-left'}
                  bg-white p-6 rounded-lg shadow-xl
                `}>
                  <h3 className="text-xl font-bold text-[#2196F3] mb-2">
                    {event.year}
                  </h3>
                  <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}