import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedSection({ children, className = '', style = {}, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1],
        delay: delay 
      }}
      className={`relative z-40 ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
}
