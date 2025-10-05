'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from '@/components/ui/Icon';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > window.innerHeight * 0.8) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-50"
        >
          {/* Outer glow */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.6, 0.8, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 w-20 h-20 -left-3 -top-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-xl"
          />

          {/* Flash effect */}
          <motion.div
            className="absolute inset-0 w-16 h-16 -left-1 -top-1 rounded-full opacity-0"
            style={{
              background: 'conic-gradient(from 0deg, transparent, rgba(255,255,255,0.8), transparent)'
            }}
            whileHover={{
              opacity: [0, 1, 0],
              rotate: 360,
              scale: [0.8, 1.2, 1.4]
            }}
            transition={{ duration: 0.6 }}
          />

          {/* Main button */}
          <motion.button
            onClick={scrollToTop}
            className="relative w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 via-purple-600 to-pink-600 text-white shadow-lg flex items-center justify-center"
            whileHover={{ 
              scale: 1.1,
              y: [-2, -8, -4, -6, -2, 0]
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              y: { duration: 0.6, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }
            }}
            style={{
              boxShadow: '0 10px 25px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
            }}
          >
            {/* Inner gradient overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/20" />
            
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;