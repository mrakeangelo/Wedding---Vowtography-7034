import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiImage, FiSun, FiMoon, FiSettings } = FiIcons;

const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Gallery', href: '#gallery' },
    { name: 'Our Story', href: '#story' },
    { name: 'Wedding Info', href: '#info' },
    { name: 'RSVP', href: '#rsvp' },
    { name: 'Guestbook', href: '#guestbook' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-morphism shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <SafeIcon icon={FiImage} className="text-rose text-2xl" />
            <span className="font-serif text-xl font-semibold text-onyx dark:text-cream">
              Vowtography
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-onyx dark:text-cream hover:text-rose transition-colors duration-300 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-rose hover:bg-opacity-20 transition-colors duration-300"
            >
              <SafeIcon 
                icon={darkMode ? FiSun : FiMoon} 
                className="text-onyx dark:text-cream text-xl" 
              />
            </motion.button>

            <Link to="/admin">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full hover:bg-rose hover:bg-opacity-20 transition-colors duration-300"
              >
                <SafeIcon icon={FiSettings} className="text-onyx dark:text-cream text-xl" />
              </motion.button>
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-rose hover:bg-opacity-20 transition-colors duration-300"
            >
              <SafeIcon 
                icon={isMenuOpen ? FiX : FiMenu} 
                className="text-onyx dark:text-cream text-xl" 
              />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0, 
          opacity: isMenuOpen ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden glass-morphism"
      >
        <div className="px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ x: 10 }}
              onClick={() => setIsMenuOpen(false)}
              className="block text-onyx dark:text-cream hover:text-rose transition-colors duration-300 font-medium"
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;