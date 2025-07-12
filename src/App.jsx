import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import LoveGallery from './components/LoveGallery';
import OurStory from './components/OurStory';
import WeddingInfo from './components/WeddingInfo';
import RSVP from './components/RSVP';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import AdminPanel from './components/AdminPanel';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark bg-onyx' : 'bg-cream'}`}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/admin" element={
              <AdminPanel 
                isAdmin={isAdmin} 
                setIsAdmin={setIsAdmin}
                isPrivate={isPrivate}
                setIsPrivate={setIsPrivate}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            } />
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                <Hero />
                <LoveGallery />
                <OurStory />
                <WeddingInfo />
                <RSVP />
                <Guestbook />
                <Footer />
                <FloatingCTA />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;