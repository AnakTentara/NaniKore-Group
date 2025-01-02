import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { members } from '../../data/members';
import { motion } from 'framer-motion';

export default function SideNavigation() {
  const location = useLocation();
  const sortedMembers = [...members].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-white border-primary border-2 rounded-lg shadow-2xl p-6">
        <h2 className="text-xl font-bold mb-6">Other Team Members</h2>
        <div className="space-y-4 bg-gray-100 py-2 px-4 rounded-lg">
          {sortedMembers.map((member) => (
            <Link
              key={member.name}
              to={`/members/${member.name.toLowerCase().replace(/\s+/g, '-')}`}
              className={`flex items-center space-x-3 p-2 rounded-md transition-colors ${location.pathname.includes(member.name.toLowerCase().replace(/\s+/g, '-'))
                  ? 'bg-primary/10'
                  : 'hover:bg-white'
                }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-sm font-medium text-gray-700">{member.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}