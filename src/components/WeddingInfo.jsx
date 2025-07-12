import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiMapPin, FiClock, FiUsers, FiHeart } = FiIcons;

const WeddingInfo = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const weddingDate = new Date('2024-09-15T16:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const infoCards = [
    {
      icon: FiCalendar,
      title: 'Date',
      details: ['September 15, 2024', 'Saturday'],
      color: 'bg-rose'
    },
    {
      icon: FiClock,
      title: 'Time',
      details: ['4:00 PM', 'Ceremony', '6:00 PM', 'Reception'],
      color: 'bg-taupe'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      details: ['Villa Bellezza', 'Tuscany, Italy'],
      color: 'bg-nude'
    },
    {
      icon: FiUsers,
      title: 'Dress Code',
      details: ['Cocktail Attire', 'Garden Party'],
      color: 'bg-rose'
    }
  ];

  return (
    <section id="info" className="py-20 bg-cream dark:bg-onyx">
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
            Wedding Details
          </h2>
          <p className="text-taupe text-xl max-w-2xl mx-auto">
            Join us for a celebration of love in the heart of Tuscany
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-8 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <SafeIcon icon={FiHeart} className="text-rose text-4xl mb-4 mx-auto floating-element" />
              <h3 className="font-serif text-3xl font-bold text-onyx dark:text-cream mb-2">
                Countdown to Forever
              </h3>
              <p className="text-taupe">Until we say "I do"</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <motion.div
                  key={unit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-rose text-white rounded-lg p-4 mb-2">
                    <span className="font-serif text-3xl md:text-4xl font-bold">
                      {value}
                    </span>
                  </div>
                  <span className="text-onyx dark:text-cream capitalize font-medium">
                    {unit}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center"
            >
              <div className={`${card.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <SafeIcon icon={card.icon} className="text-white text-2xl" />
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-onyx dark:text-cream mb-4">
                {card.title}
              </h3>
              
              <div className="space-y-2">
                {card.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-taupe">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden"
        >
          <div className="p-8">
            <h3 className="font-serif text-3xl font-bold text-onyx dark:text-cream mb-4 text-center">
              Venue Location
            </h3>
            <p className="text-taupe text-center mb-8">
              Villa Bellezza, nestled in the rolling hills of Tuscany
            </p>
          </div>
          
          <div className="h-96 bg-gray-200 dark:bg-gray-700 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <SafeIcon icon={FiMapPin} className="text-6xl mb-4 mx-auto" />
                <p className="text-xl font-medium">Interactive Map</p>
                <p className="text-sm opacity-80">Click to view in Google Maps</p>
              </div>
            </div>
          </div>
          
          <div className="p-8 bg-gray-50 dark:bg-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-onyx dark:text-cream mb-2">Address</h4>
                <p className="text-taupe text-sm">Via delle Vigne 123<br />50022 Greve in Chianti, Italy</p>
              </div>
              <div>
                <h4 className="font-semibold text-onyx dark:text-cream mb-2">Parking</h4>
                <p className="text-taupe text-sm">Complimentary valet parking<br />available for all guests</p>
              </div>
              <div>
                <h4 className="font-semibold text-onyx dark:text-cream mb-2">Accommodation</h4>
                <p className="text-taupe text-sm">Recommended hotels<br />within 10 minutes</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingInfo;