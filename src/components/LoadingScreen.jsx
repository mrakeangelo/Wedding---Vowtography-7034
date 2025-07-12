import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-cream dark:bg-onyx flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="font-serif text-6xl md:text-8xl text-onyx dark:text-cream mb-4">
            Vowtography
          </h1>
          <p className="text-taupe text-lg tracking-wide">
            A Photographer's Wedding Template
          </p>
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="h-1 bg-gradient-to-r from-rose to-taupe mx-auto max-w-xs"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;