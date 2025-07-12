import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } = FiIcons;

const LoveGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState('justified'); // justified, masonry, grid

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caption: 'The moment he proposed under the cherry blossoms',
      category: 'proposal'
    },
    {
      url: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caption: 'Engagement session in the mountains',
      category: 'engagement'
    },
    {
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caption: 'Dancing in the golden hour',
      category: 'candid'
    },
    {
      url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caption: 'Intimate moments before the ceremony',
      category: 'preparation'
    },
    {
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caption: 'Walking down the aisle',
      category: 'ceremony'
    },
    {
      url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caption: 'First dance as husband and wife',
      category: 'reception'
    },
    {
      url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caption: 'Sunset portraits in the vineyard',
      category: 'portraits'
    },
    {
      url: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caption: 'Celebrating with family and friends',
      category: 'celebration'
    },
    {
      url: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caption: 'Quiet moments together',
      category: 'intimate'
    },
  ];

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (selectedImage === null) return;
    
    const newIndex = direction === 'next' 
      ? (selectedImage + 1) % galleryImages.length
      : (selectedImage - 1 + galleryImages.length) % galleryImages.length;
    
    setSelectedImage(newIndex);
  };

  return (
    <section id="gallery" className="py-20 bg-cream dark:bg-onyx">
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
            Love Gallery
          </h2>
          <p className="text-taupe text-xl max-w-2xl mx-auto">
            Captured moments that tell the story of our journey together
          </p>
        </motion.div>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
            {['justified', 'masonry', 'grid'].map((mode) => (
              <motion.button
                key={mode}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode(mode)}
                className={`px-4 py-2 rounded-full capitalize transition-all duration-300 ${
                  viewMode === mode
                    ? 'bg-rose text-white'
                    : 'text-onyx dark:text-cream hover:bg-rose hover:bg-opacity-20'
                }`}
              >
                {mode}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`
            ${viewMode === 'justified' ? 'justified-grid' : ''}
            ${viewMode === 'masonry' ? 'masonry-grid' : ''}
            ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : ''}
          `}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`
                group relative cursor-pointer overflow-hidden rounded-lg shadow-lg
                ${viewMode === 'justified' ? 'flex-grow m-2' : ''}
                ${viewMode === 'masonry' ? 'masonry-item' : ''}
                ${viewMode === 'grid' ? 'aspect-square' : ''}
              `}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white p-4">
                  <SafeIcon icon={FiMaximize2} className="text-3xl mb-2 mx-auto" />
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[selectedImage].url}
                  alt={galleryImages[selectedImage].caption}
                  className="w-full h-full object-contain rounded-lg"
                />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                  <p className="text-center text-lg">{galleryImages[selectedImage].caption}</p>
                </div>

                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-300"
                >
                  <SafeIcon icon={FiX} />
                </motion.button>

                {/* Navigation */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-300"
                >
                  <SafeIcon icon={FiChevronLeft} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-300"
                >
                  <SafeIcon icon={FiChevronRight} />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LoveGallery;