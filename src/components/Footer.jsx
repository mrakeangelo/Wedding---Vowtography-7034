import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiInstagram, FiMail, FiPhone, FiMapPin } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-onyx dark:bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Couple Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="font-serif text-2xl font-bold mb-4 text-cream">
              Emma & James
            </h3>
            <p className="text-gray-300 mb-4">
              Join us as we celebrate our love story in the beautiful hills of Tuscany.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-rose hover:text-taupe transition-colors duration-300"
              >
                <SafeIcon icon={FiInstagram} className="text-2xl" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="mailto:emma.james@wedding.com"
                className="text-rose hover:text-taupe transition-colors duration-300"
              >
                <SafeIcon icon={FiMail} className="text-2xl" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="font-semibold text-cream mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-rose transition-colors duration-300">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#story" className="text-gray-300 hover:text-rose transition-colors duration-300">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#info" className="text-gray-300 hover:text-rose transition-colors duration-300">
                  Wedding Info
                </a>
              </li>
              <li>
                <a href="#rsvp" className="text-gray-300 hover:text-rose transition-colors duration-300">
                  RSVP
                </a>
              </li>
              <li>
                <a href="#guestbook" className="text-gray-300 hover:text-rose transition-colors duration-300">
                  Guestbook
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Wedding Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="font-semibold text-cream mb-4">Wedding Details</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <SafeIcon icon={FiMapPin} className="text-rose" />
                <span className="text-gray-300 text-sm">Tuscany, Italy</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <SafeIcon icon={FiHeart} className="text-rose" />
                <span className="text-gray-300 text-sm">September 15, 2024</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <SafeIcon icon={FiPhone} className="text-rose" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="font-semibold text-cream mb-4">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest updates about our wedding
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-rose"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-rose hover:bg-taupe px-4 py-2 rounded-r-lg transition-colors duration-300"
              >
                <SafeIcon icon={FiMail} />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © {currentYear} Emma & James. All rights reserved.
            </motion.p>

            {/* Mrake Credit */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              <span className="text-rose">Vowtography</span> – A Photographer's Wedding Template by{' '}
              <span className="text-rose font-medium">Mrake Agency</span>
            </motion.p>
          </div>
        </div>

        {/* Final Touch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <SafeIcon icon={FiHeart} className="text-rose text-2xl mx-auto floating-element" />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;