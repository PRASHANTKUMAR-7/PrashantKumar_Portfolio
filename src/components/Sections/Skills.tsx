import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { skills } from '../../data/portfolio';
import { Skill } from '../../types';

const Skills: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Skills', color: 'bg-blue-600' },
    { id: 'frontend', name: 'Frontend', color: 'bg-green-600' },
    { id: 'backend', name: 'Backend', color: 'bg-purple-600' },
    { id: 'tools', name: 'Tools', color: 'bg-orange-600' },
    { id: 'other', name: 'Other', color: 'bg-pink-600' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getSkillColor = (category: Skill['category']) => {
    const colors = {
      frontend: 'from-green-400 to-green-600',
      backend: 'from-purple-400 to-purple-600',
      tools: 'from-orange-400 to-orange-600',
      other: 'from-pink-400 to-pink-600',
    };
    return colors[category];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? `${category.color} text-white shadow-lg`
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isIntersecting ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className={`h-3 rounded-full bg-gradient-to-r ${getSkillColor(skill.category)}`}
                />
              </div>
              
              {/* Category Badge */}
              <div className="flex justify-end">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getSkillColor(skill.category)} text-white`}>
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {categories.slice(1).map((category, index) => {
              const categorySkills = skills.filter(skill => skill.category === category.id);
              const avgLevel = Math.round(
                categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length
              );
              
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${category.color} flex items-center justify-center text-white font-bold text-xl`}>
                    {avgLevel}%
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {category.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {categorySkills.length} skills
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;