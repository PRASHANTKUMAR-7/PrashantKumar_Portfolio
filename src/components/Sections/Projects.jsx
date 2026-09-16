import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Search, Filter } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { projects } from '../../data/portfolio';

const Projects = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState('all');
  const [showFeatured, setShowFeatured] = useState(false);

  // Get all unique technologies
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTech = selectedTech === 'all' || project.technologies.includes(selectedTech);
    const matchesFeatured = !showFeatured || project.featured;
    
    return matchesSearch && matchesTech && matchesFeatured;
  });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              
              {/* Technology Filter */}
              <select
                value={selectedTech}
                onChange={(e) => setSelectedTech(e.target.value)}
                className="px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Technologies</option>
                {allTechnologies.map(tech => (
                  <option key={tech} value={tech}>{tech}</option>
                ))}
              </select>
              
              {/* Featured Toggle */}
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showFeatured}
                  onChange={(e) => setShowFeatured(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <span className="text-gray-700 dark:text-gray-300">Featured only</span>
              </label>
            </div>
          </div>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr"
        >
          {filteredProjects.map((project, index) => {
            const isFeatured = project.featured;
            const isLarge = isFeatured && index % 3 === 0;
            const isMedium = isFeatured && index % 3 === 1;
            
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                animate={isIntersecting ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, rotateY: 5, rotateX: 5 }}
                className={`tilt-3d glassmorphism-light dark:glassmorphism-dark rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 will-change-transform ${
                  isLarge ? 'md:col-span-2 md:row-span-2' : isMedium ? 'md:col-span-2' : ''
                } ${isFeatured ? 'border-2 border-blue-500/30 dark:border-[#00f0ff]/30 hover:border-blue-500 dark:hover:border-[#00f0ff]' : ''}`}
              >
                {/* Project Image */}
                <div className={`relative overflow-hidden ${isLarge ? 'h-64' : 'h-48'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {project.featured && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="absolute top-4 left-4"
                    >
                      <span className="px-3 py-1 bg-blue-600 dark:bg-[#00f0ff] text-white text-sm font-semibold rounded-full glow-blue dark:glow-blue">
                        ⭐ Featured
                      </span>
                    </motion.div>
                  )}
                  
                  {/* Overlay with Links */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 space-x-4">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ scale: 1.1, y: 0 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ scale: 1.1, y: 0 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-800 hover:text-white transition-colors duration-200"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
                
                {/* Project Content */}
                <div className={`p-6 ${isLarge ? 'p-8' : ''}`}>
                  <h3 className={`font-bold text-gray-900 dark:text-white mb-2 ${isLarge ? 'text-2xl' : 'text-xl'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-gray-600 dark:text-gray-400 mb-4 ${isLarge ? 'line-clamp-5 text-base' : 'line-clamp-3'}`}>
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, isLarge ? 6 : 4).map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > (isLarge ? 6 : 4) && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm rounded-full">
                        +{project.technologies.length - (isLarge ? 6 : 4)}
                      </span>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className={`flex ${isLarge ? 'flex-col space-y-2' : 'space-x-3'}`}>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`${isLarge ? 'w-full' : 'flex-1'} px-4 py-2 bg-blue-600 dark:bg-[#00f0ff] hover:bg-blue-700 dark:hover:bg-[#00d4e6] text-white text-center rounded-lg font-semibold transition-colors duration-200 glow-blue dark:glow-blue`}
                      >
                        Live Demo
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`${isLarge ? 'w-full' : 'flex-1'} px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-[#00f0ff] hover:text-blue-600 dark:hover:text-[#00f0ff] text-center rounded-lg font-semibold transition-colors duration-200`}
                      >
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found matching your criteria.
            </p>
          </motion.div>
        )}

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200"
          >
            View All Projects on GitHub
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
