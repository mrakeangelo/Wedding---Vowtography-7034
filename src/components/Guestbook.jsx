import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiMail, FiHeart, FiSend, FiMessageCircle } = FiIcons;

const Guestbook = () => {
  const [newEntry, setNewEntry] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [entries, setEntries] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      message: 'Congratulations to the beautiful couple! Wishing you a lifetime of love and happiness. Can\'t wait to celebrate with you in Tuscany!',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      date: '2024-01-15'
    },
    {
      id: 2,
      name: 'Michael Chen',
      message: 'Emma and James, you two are perfect for each other! So excited to witness your special day. Love you both!',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      date: '2024-01-14'
    },
    {
      id: 3,
      name: 'Lisa Rodriguez',
      message: 'Your love story is absolutely beautiful! Thank you for sharing your journey with us. Can\'t wait for the big day!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      date: '2024-01-13'
    },
    {
      id: 4,
      name: 'David Thompson',
      message: 'Cheers to love, laughter, and happily ever after! You guys are amazing and I\'m so happy for you both.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      date: '2024-01-12'
    },
    {
      id: 5,
      name: 'Amanda Wilson',
      message: 'Emma, you look absolutely radiant! James, you\'re one lucky guy. Wishing you both endless joy and love.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      date: '2024-01-11'
    },
    {
      id: 6,
      name: 'Robert Davis',
      message: 'From college roommates to watching you find your soulmate - what a journey! So proud of you both.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      date: '2024-01-10'
    }
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newEntry.name && newEntry.message) {
      const entry = {
        id: entries.length + 1,
        name: newEntry.name,
        message: newEntry.message,
        avatar: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000000)}?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80`,
        date: new Date().toISOString().split('T')[0]
      };
      setEntries(prev => [entry, ...prev]);
      setNewEntry({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="guestbook" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-onyx dark:text-cream mb-4">
            Guestbook
          </h2>
          <p className="text-taupe text-xl max-w-2xl mx-auto">
            Share your thoughts, wishes, and memories with us
          </p>
        </motion.div>

        {/* Add New Entry Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-cream dark:bg-gray-800 rounded-lg p-8 mb-12 shadow-lg"
        >
          <h3 className="font-serif text-2xl font-bold text-onyx dark:text-cream mb-6 text-center">
            Leave a Message
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-onyx dark:text-cream text-sm font-medium mb-2">
                  Your Name *
                </label>
                <div className="relative">
                  <SafeIcon icon={FiUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={newEntry.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-onyx dark:text-cream focus:outline-none focus:ring-2 focus:ring-rose focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-onyx dark:text-cream text-sm font-medium mb-2">
                  Email (Optional)
                </label>
                <div className="relative">
                  <SafeIcon icon={FiMail} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={newEntry.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-onyx dark:text-cream focus:outline-none focus:ring-2 focus:ring-rose focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-onyx dark:text-cream text-sm font-medium mb-2">
                Your Message *
              </label>
              <textarea
                name="message"
                value={newEntry.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-onyx dark:text-cream focus:outline-none focus:ring-2 focus:ring-rose focus:border-transparent resize-none"
                placeholder="Share your wishes, memories, or thoughts for Emma & James..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-rose hover:bg-taupe text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <SafeIcon icon={FiSend} />
              <span>Add to Guestbook</span>
            </motion.button>
          </form>
        </motion.div>

        {/* Guestbook Entries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-cream dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <img
                  src={entry.avatar}
                  alt={entry.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-onyx dark:text-cream">
                      {entry.name}
                    </h4>
                    <span className="text-xs text-taupe">
                      {new Date(entry.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {entry.message}
                  </p>
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiMessageCircle} className="text-taupe text-sm" />
                  <span className="text-taupe text-xs">Message</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-rose hover:text-taupe transition-colors duration-300"
                >
                  <SafeIcon icon={FiHeart} className="text-lg" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guestbook;