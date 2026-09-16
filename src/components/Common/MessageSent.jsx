import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Home, Mail } from 'lucide-react';

const MessageSent = () => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900 flex items-center justify-center px-6">
      <div className="text-center max-w-md mx-auto">
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 10,
            duration: 0.8 
          }}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="w-24 h-24 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
          </motion.div>
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Message Sent Successfully!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Thank you for reaching out! I've received your message and will get back to you as soon as possible.
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <p className="text-green-800 dark:text-green-200 text-sm">
              <Mail className="w-4 h-4 inline mr-2" />
              I typically respond within 24 hours during business days.
            </p>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="relative mb-8">
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-8 -left-8 w-12 h-12 bg-green-200 dark:bg-green-800 rounded-full opacity-60"
          />
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              rotate: [0, -10, 10, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute -top-4 -right-6 w-8 h-8 bg-blue-200 dark:bg-blue-800 rounded-full opacity-60"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.8, 0.6]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="absolute -bottom-4 left-4 w-6 h-6 bg-yellow-200 dark:bg-yellow-800 rounded-full opacity-60"
          />
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGoHome}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </motion.button>
        </motion.div>

        {/* Fun Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8"
        >
          <motion.div
            animate={{ 
              rotate: [0, 15, -15, 0],
              y: [0, -5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="text-4xl mb-2"
          >
            📧
          </motion.div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Your message is on its way!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MessageSent;
