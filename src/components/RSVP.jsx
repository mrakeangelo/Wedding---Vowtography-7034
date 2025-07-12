import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiMail, FiPhone, FiUsers, FiHeart, FiSend } = FiIcons;

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    attendance: '',
    dietary: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('RSVP submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass-morphism rounded-lg p-12"
          >
            <SafeIcon icon={FiHeart} className="text-rose text-6xl mb-6 mx-auto floating-element" />
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              Thank You!
            </h2>
            <p className="text-white text-lg mb-8">
              We've received your RSVP and can't wait to celebrate with you!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSubmitted(false)}
              className="bg-rose hover:bg-taupe text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
            >
              Submit Another RSVP
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">
            RSVP
          </h2>
          <p className="text-white text-xl">
            Please let us know if you can join us for our special day
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-morphism rounded-lg p-8 space-y-6"
        >
          {/* Name Field */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Full Name *
            </label>
            <div className="relative">
              <SafeIcon icon={FiUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-rose focus:border-transparent"
                placeholder="Your full name"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Email Address *
            </label>
            <div className="relative">
              <SafeIcon icon={FiMail} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-rose focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Phone Number
            </label>
            <div className="relative">
              <SafeIcon icon={FiPhone} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-rose focus:border-transparent"
                placeholder="Your phone number"
              />
            </div>
          </div>

          {/* Guests Field */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Number of Guests *
            </label>
            <div className="relative">
              <SafeIcon icon={FiUsers} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-rose focus:border-transparent appearance-none"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5+ Guests</option>
              </select>
            </div>
          </div>

          {/* Attendance Field */}
          <div>
            <label className="block text-white text-sm font-medium mb-4">
              Will you be attending? *
            </label>
            <div className="flex space-x-4">
              <motion.label
                whileHover={{ scale: 1.05 }}
                className="flex-1 cursor-pointer"
              >
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <div className={`p-4 rounded-lg border-2 text-center transition-all duration-300 ${
                  formData.attendance === 'yes'
                    ? 'border-rose bg-rose text-white'
                    : 'border-white border-opacity-30 text-white hover:border-rose'
                }`}>
                  <SafeIcon icon={FiHeart} className="text-2xl mb-2 mx-auto" />
                  <span className="font-medium">Yes, I'll be there!</span>
                </div>
              </motion.label>

              <motion.label
                whileHover={{ scale: 1.05 }}
                className="flex-1 cursor-pointer"
              >
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  onChange={handleInputChange}
                  className="sr-only"
                />
                <div className={`p-4 rounded-lg border-2 text-center transition-all duration-300 ${
                  formData.attendance === 'no'
                    ? 'border-rose bg-rose text-white'
                    : 'border-white border-opacity-30 text-white hover:border-rose'
                }`}>
                  <span className="font-medium">Sorry, can't make it</span>
                </div>
              </motion.label>
            </div>
          </div>

          {/* Dietary Restrictions */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Dietary Restrictions
            </label>
            <input
              type="text"
              name="dietary"
              value={formData.dietary}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-rose focus:border-transparent"
              placeholder="Any dietary restrictions or allergies?"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Message for the Couple
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-rose focus:border-transparent resize-none"
              placeholder="Share your wishes for Emma & James..."
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-rose hover:bg-taupe text-white font-medium py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <SafeIcon icon={FiSend} />
            <span>Send RSVP</span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default RSVP;