import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiChevronDown, FiHeart } = FiIcons;

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const heroImages = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: index === currentImage ? 1 : 0,
            scale: index === currentImage ? 1 : 1.1 
          }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 ken-burns"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <SafeIcon icon={FiHeart} className="text-rose text-4xl mb-6 mx-auto floating-element" />
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-4">
            Emma & James
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide">
            September 15, 2024 • Tuscany, Italy
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="space-y-4"
        >
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            "Two souls, one heart, endless love"
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-3 bg-rose hover:bg-taupe transition-colors duration-300 rounded-full text-white font-medium"
          >
            <span>View Our Story</span>
            <SafeIcon icon={FiChevronDown} />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-sm tracking-wide">Scroll to explore</span>
          <SafeIcon icon={FiChevronDown} className="text-2xl" />
        </motion.div>
      </motion.div>

      {/* Image Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage ? 'bg-rose' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;