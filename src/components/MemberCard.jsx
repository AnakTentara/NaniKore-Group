import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function MemberCard({ member, index }) {
  const navigate = useNavigate();

  const memberSlug = member.name.toLowerCase().replace(/\s+/g, '-');

  const handleCardClick = () => {
    navigate(`/members/${memberSlug}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.5 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
        onClick={handleCardClick}
      >
          <motion.img
            src={member.image}
            alt={member.name}
            whileHover={{ scale: 1.03, y: -3 }}
            transition={{ duration: 0.6 }}
            className="w-full h-48 object-cover"
          />
        <div className="p-6">
          <h1 className="text-xl"><strong>{member.name}</strong></h1>
          <p className="text-[#4CAF50] font-medium mb-2">{member.aspiration}</p>
          <p className="text-gray-600 line-clamp-3">
            {member.statement}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}