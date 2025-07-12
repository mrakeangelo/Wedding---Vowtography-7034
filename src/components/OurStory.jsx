import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiStar, FiGift } = FiIcons;

const OurStory = () => {
  const storyBlocks = [
    {
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'First Meeting',
      date: 'March 2019',
      caption: 'We met at a coffee shop in downtown Portland. Emma was reading Murakami, James was pretending to work on his laptop.',
      icon: FiHeart
    },
    {
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'First Date',
      date: 'April 2019',
      caption: 'A hiking trail that turned into an 8-hour adventure. We talked about everything and nothing, and knew something special was beginning.',
      icon: FiStar
    },
    {
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Moving In',
      date: 'September 2020',
      caption: 'Two apartments became one home. Complete with mismatched furniture and the perfect amount of chaos.',
      icon: FiGift
    },
    {
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'The Proposal',
      date: 'December 2023',
      caption: 'Under the cherry blossoms in our favorite park. She said yes before he could finish the question.',
      icon: FiHeart
    },
  ];

  return (
    <section id="story" className="py-20 bg-white dark:bg-gray-900">
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
            Our Story
          </h2>
          <p className="text-taupe text-xl max-w-2xl mx-auto">
            Every love story is beautiful, but ours is our favorite
          </p>
        </motion.div>

        {/* Story Timeline */}
        <div className="space-y-20">
          {storyBlocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}
            >
              {/* Image */}
              <div className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group overflow-hidden rounded-lg shadow-2xl"
                >
                  <img
                    src={block.image}
                    alt={block.title}
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-center lg:justify-start space-x-4">
                    <div className="p-3 bg-rose rounded-full">
                      <SafeIcon icon={block.icon} className="text-white text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl font-bold text-onyx dark:text-cream">
                        {block.title}
                      </h3>
                      <p className="text-taupe font-medium">{block.date}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                    {block.caption}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto bg-cream dark:bg-gray-800 rounded-lg p-12 shadow-lg">
            <blockquote className="font-serif text-2xl md:text-3xl font-medium text-onyx dark:text-cream mb-6">
              "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage."
            </blockquote>
            <cite className="text-taupe text-lg">— Lao Tzu</cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;