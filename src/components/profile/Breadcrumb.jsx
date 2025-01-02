import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Breadcrumb() {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(Boolean);

  return (
    <motion.nav className="mb-8"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link to="/" className="text-primary hover:text-primary/80">Home</Link>
        </li>
        {paths.map((path, index) => (
          <React.Fragment key={path}>
            <li className="text-gray-500">/</li>
            <li className={index === paths.length - 1 ? 'text-gray-700' : ''}>
              {path.charAt(0).toLowerCase() + path.slice(1)}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </motion.nav>
  );
}