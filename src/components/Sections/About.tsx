import React from 'react';
import { motion } from 'framer-motion';
import { Code, Coffee, Music, Camera, Gamepad2, Book } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { personalInfo } from '../../data/portfolio';

const About: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  const interests = [
    { icon: Code, name: 'Coding', color: 'text-blue-500' },
    { icon: Coffee, name: 'Coffee', color: 'text-amber-600' },
    { icon: Music, name: 'Music', color: 'text-purple-500' },
    { icon: Camera, name: 'Photography', color: 'text-green-500' },
    { icon: Gamepad2, name: 'Gaming', color: 'text-red-500' },
    { icon: Book, name: 'Reading', color: 'text-indigo-500' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience creating 
                digital solutions that make a difference. My journey in tech started with a 
                curiosity about how things work, and it has evolved into a career dedicated to 
                building innovative web applications.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I specialize in modern JavaScript frameworks, particularly React and Node.js, 
                and I'm always eager to learn new technologies. When I'm not coding, you'll 
                find me exploring the latest tech trends, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My goal is to create user-centric applications that not only solve problems 
                but also provide delightful experiences. I believe in writing clean, 
                maintainable code and following best practices to ensure scalability and performance.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                <div className="text-gray-600 dark:text-gray-400">Years</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">100+</div>
                <div className="text-gray-600 dark:text-gray-400">Commits</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                What I Love
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <interest.icon className={`w-8 h-8 ${interest.color} mb-2`} />
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {interest.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border-l-4 border-blue-600"
            >
              <blockquote className="text-gray-700 dark:text-gray-300 italic">
                "The best way to predict the future is to create it."
              </blockquote>
              <cite className="text-blue-600 dark:text-blue-400 font-semibold mt-2 block">
                - Peter Drucker
              </cite>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;