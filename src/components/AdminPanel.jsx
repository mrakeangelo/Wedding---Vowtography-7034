import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiLock, FiArrowLeft, FiToggleLeft, FiToggleRight, FiSave, FiEye, FiEyeOff } = FiIcons;

const AdminPanel = ({ isAdmin, setIsAdmin, isPrivate, setIsPrivate, darkMode, setDarkMode }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [isDraft, setIsDraft] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple authentication - in real app, use proper auth
    if (loginData.email === 'admin@vowtography.com' && loginData.password === 'admin123') {
      setIsAdmin(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-cream dark:bg-onyx flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-8"
        >
          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl font-bold text-onyx dark:text-cream mb-2">
              Admin Panel
            </h1>
            <p className="text-taupe">Sign in to manage your wedding website</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-onyx dark:text-cream text-sm font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <SafeIcon icon={FiUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-onyx dark:text-cream focus:outline-none focus:ring-2 focus:ring-rose focus:border-transparent"
                  placeholder="admin@vowtography.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-onyx dark:text-cream text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <SafeIcon icon={FiLock} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-onyx dark:text-cream focus:outline-none focus:ring-2 focus:ring-rose focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-rose hover:bg-taupe text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Sign In
            </motion.button>
          </form>

          <div className="mt-8 text-center">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 text-taupe hover:text-rose transition-colors duration-300"
              >
                <SafeIcon icon={FiArrowLeft} />
                <span>Back to Website</span>
              </motion.button>
            </Link>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Demo credentials:</p>
            <p>Email: admin@vowtography.com</p>
            <p>Password: admin123</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream dark:bg-onyx">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="font-serif text-4xl font-bold text-onyx dark:text-cream mb-2">
              Admin Panel
            </h1>
            <p className="text-taupe">Manage your wedding website settings</p>
          </div>
          
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-rose text-white px-4 py-2 rounded-lg hover:bg-taupe transition-colors duration-300"
            >
              <SafeIcon icon={FiArrowLeft} />
              <span>Back to Website</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Website Settings */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h2 className="font-serif text-2xl font-bold text-onyx dark:text-cream mb-6">
              Website Settings
            </h2>
            
            <div className="space-y-6">
              {/* Draft Mode */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-onyx dark:text-cream">Draft Mode</h3>
                  <p className="text-sm text-taupe">Save changes without publishing</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsDraft(!isDraft)}
                  className="text-2xl text-rose"
                >
                  <SafeIcon icon={isDraft ? FiToggleRight : FiToggleLeft} />
                </motion.button>
              </div>

              {/* Private Mode */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-onyx dark:text-cream">Private Website</h3>
                  <p className="text-sm text-taupe">Require password to view</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPrivate(!isPrivate)}
                  className="text-2xl text-rose"
                >
                  <SafeIcon icon={isPrivate ? FiToggleRight : FiToggleLeft} />
                </motion.button>
              </div>

              {/* Dark Mode */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-onyx dark:text-cream">Dark Mode</h3>
                  <p className="text-sm text-taupe">Toggle dark/light theme</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-2xl text-rose"
                >
                  <SafeIcon icon={darkMode ? FiToggleRight : FiToggleLeft} />
                </motion.button>
              </div>

              {/* Preview Mode */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-onyx dark:text-cream">Preview Mode</h3>
                  <p className="text-sm text-taupe">View as guest</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowPreview(!showPreview)}
                  className="text-2xl text-rose"
                >
                  <SafeIcon icon={showPreview ? FiEyeOff : FiEye} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Content Management */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h2 className="font-serif text-2xl font-bold text-onyx dark:text-cream mb-6">
              Content Management
            </h2>
            
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-left p-4 bg-cream dark:bg-gray-700 rounded-lg hover:bg-rose hover:bg-opacity-10 transition-colors duration-300"
              >
                <h3 className="font-medium text-onyx dark:text-cream">Edit Gallery</h3>
                <p className="text-sm text-taupe">Add or remove photos</p>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-left p-4 bg-cream dark:bg-gray-700 rounded-lg hover:bg-rose hover:bg-opacity-10 transition-colors duration-300"
              >
                <h3 className="font-medium text-onyx dark:text-cream">Edit Story</h3>
                <p className="text-sm text-taupe">Update your love story</p>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-left p-4 bg-cream dark:bg-gray-700 rounded-lg hover:bg-rose hover:bg-opacity-10 transition-colors duration-300"
              >
                <h3 className="font-medium text-onyx dark:text-cream">Wedding Details</h3>
                <p className="text-sm text-taupe">Update date, time, venue</p>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-left p-4 bg-cream dark:bg-gray-700 rounded-lg hover:bg-rose hover:bg-opacity-10 transition-colors duration-300"
              >
                <h3 className="font-medium text-onyx dark:text-cream">View RSVPs</h3>
                <p className="text-sm text-taupe">Manage guest responses</p>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 flex justify-center space-x-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-rose text-white px-6 py-3 rounded-lg hover:bg-taupe transition-colors duration-300"
          >
            <SafeIcon icon={FiSave} />
            <span>Save Changes</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAdmin(false)}
            className="inline-flex items-center space-x-2 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300"
          >
            <span>Sign Out</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPanel;