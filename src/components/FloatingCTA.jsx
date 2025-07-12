import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiImage, FiHeart, FiX } = FiIcons;

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show CTA after scrolling 50% of viewport height
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGalleryClick = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
    setIsExpanded(false);
  };

  const handleRSVPClick = () => {
    document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' });
    setIsExpanded(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mb-4 space-y-2"
              >
                <motion.button
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGalleryClick}
                  className="flex items-center space-x-3 bg-white dark:bg-gray-800 text-onyx dark:text-cream px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <SafeIcon icon={FiImage} className="text-rose" />
                  <span className="font-medium">View More Moments</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleRSVPClick}
                  className="flex items-center space-x-3 bg-rose text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <SafeIcon icon={FiHeart} />
                  <span className="font-medium">RSVP Now</span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-14 h-14 bg-rose text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center floating-element"
          >
            <motion.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <SafeIcon icon={isExpanded ? FiX : FiHeart} className="text-2xl" />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;