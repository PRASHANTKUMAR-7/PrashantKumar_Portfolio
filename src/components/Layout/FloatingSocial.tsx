import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

const FloatingSocial: React.FC = () => {
  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="flex flex-col space-y-4">
        {Object.entries(personalInfo.social).map(([platform, url], index) => {
          const Icon = socialIcons[platform as keyof typeof socialIcons];
          if (!Icon || !url) return null;
          
          return (
            <motion.a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          );
        })}
        
        {/* Vertical Line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 60 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="w-px bg-gray-300 dark:bg-gray-600 mx-auto"
        />
      </div>
    </motion.div>
  );
};

export default FloatingSocial;