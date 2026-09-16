import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { useMagneticCursor } from '../../hooks/useMagneticCursor';
import { personalInfo } from '../../data/portfolio';
import Particles from '../Common/Particles';

const Hero = () => {
  const skills = ['Full Stack Developer', 'React Expert', 'Node.js Developer', 'UI/UX Enthusiast'];
  const typedText = useTypingEffect(skills, 100, 50, 2000);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const contactButtonRef = useMagneticCursor(0.2);
  const resumeButtonRef = useMagneticCursor(0.2);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = `${personalInfo.name.replace(' ', '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animated-gradient" />
      
      {/* Particles */}
      <Particles count={50} />
      
      {/* Enhanced Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 dark:bg-[#00f0ff]/20 rounded-full blur-3xl neon-blue"
        />
        <motion.div
          animate={{
            x: [0, -150, 100, 0],
            y: [0, 100, -50, 0],
            rotate: [360, 180, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-[#b026ff]/20 rounded-full blur-3xl neon-purple"
        />
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -80, 40, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 w-48 h-48 bg-pink-500/10 dark:bg-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-4 font-medium"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-[#00f0ff] dark:via-[#b026ff] dark:to-pink-500 bg-clip-text text-transparent neon-text-blue">
                {personalInfo.name.split(' ')[0]}
              </span>
              <span className="text-gray-900 dark:text-white"> {personalInfo.name.split(' ').slice(1).join(' ')}</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl lg:text-3xl mb-8 h-12 flex items-center justify-center lg:justify-start"
            >
              <span className="border-r-2 border-blue-600 dark:border-[#00f0ff] pr-2 animate-pulse font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-[#00f0ff] dark:to-[#b026ff] bg-clip-text text-transparent">
                {typedText}
              </span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                ref={contactButtonRef}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="magnetic px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-[#00f0ff] dark:hover:bg-[#00d4e6] text-white rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 glow-blue dark:glow-blue shadow-lg"
              >
                <Mail className="w-5 h-5" />
                <span>Get In Touch</span>
              </motion.button>
              
              <motion.button
                ref={resumeButtonRef}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
                className="magnetic px-8 py-3 border-2 border-blue-600 dark:border-[#00f0ff] text-blue-600 dark:text-[#00f0ff] hover:bg-blue-600 dark:hover:bg-[#00f0ff] hover:text-white dark:hover:text-gray-900 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 glassmorphism-light dark:glassmorphism-dark"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Profile Image with Enhanced Effects */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative tilt-3d"
            >
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-[#00f0ff] dark:via-[#b026ff] dark:to-pink-500 p-1"
                >
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900" />
                </motion.div>
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 dark:bg-[#00f0ff] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg glow-blue dark:glow-blue"
              >
                👋
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -10, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500 dark:bg-[#b026ff] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg glow-purple dark:glow-purple"
              >
                💻
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-[#00f0ff] transition-colors duration-200 p-2 rounded-full hover:bg-white/10 dark:hover:bg-gray-800/10"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
