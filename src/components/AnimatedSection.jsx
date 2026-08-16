import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedSection({ children, className = '', style = {}, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1], // Custom spring-like easing matching the original
        delay: delay 
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
