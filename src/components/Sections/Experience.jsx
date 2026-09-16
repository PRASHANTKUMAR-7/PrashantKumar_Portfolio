import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap, ChevronRight } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { experiences, education } from '../../data/portfolio';

const Experience = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });
  const [activeTab, setActiveTab] = useState('experience');

  const formatDate = (dateString) => {
    if (dateString === 'Present') return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const TimelineItem = ({ item, index, isLast, type }) => {
    const Icon = type === 'experience' ? Briefcase : GraduationCap;
    
    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="relative flex items-start space-x-6 pb-12"
      >
        {/* Timeline Line */}
        {!isLast && (
          <div className="absolute left-6 top-12 w-px h-full bg-gray-300 dark:bg-gray-600" />
        )}
        
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg"
        >
          <Icon className="w-6 h-6" />
        </motion.div>
        
        {/* Content */}
        <motion.div
          whileHover={{ x: 5 }}
          className="flex-1 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {type === 'experience' ? item.title : item.degree}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold">
                {type === 'experience' ? item.company : item.institution}
              </p>
            </div>
            
            <div className="flex flex-col md:items-end mt-2 md:mt-0 space-y-1">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">
                  {formatDate(item.startDate)} - {formatDate(item.endDate)}
                </span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">{item.location}</span>
              </div>
            </div>
          </div>
          
          {item.gpa && (
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-semibold rounded-full">
                GPA: {item.gpa}
              </span>
            </div>
          )}
          
          {type === 'experience' && item.description && (
            <ul className="space-y-2 mb-4">
              {item.description.map((desc, i) => (
                <li key={i} className="flex items-start text-gray-600 dark:text-gray-400">
                  <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          )}
          
          {item.description && type === 'education' && (
            <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
          )}
          
          {item.technologies && (
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'experience'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Briefcase className="w-5 h-5 inline-block mr-2" />
              Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-5 h-5 inline-block mr-2" />
              Education
            </button>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'experience' && (
            <div>
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={exp.id}
                  item={exp}
                  index={index}
                  isLast={index === experiences.length - 1}
                  type="experience"
                />
              ))}
            </div>
          )}
          
          {activeTab === 'education' && (
            <div>
              {education.map((edu, index) => (
                <TimelineItem
                  key={edu.id}
                  item={edu}
                  index={index}
                  isLast={index === education.length - 1}
                  type="education"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
