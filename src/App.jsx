import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import FloatingSocial from './components/Layout/FloatingSocial';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';
import Blog from './components/Sections/Blog';
import Contact from './components/Sections/Contact';
import LoadingScreen from './components/Common/LoadingScreen';
import { personalInfo } from './data/portfolio';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* SEO Meta Tags */}
        <title>{personalInfo.name} - {personalInfo.title}</title>
        <meta name="description" content={personalInfo.bio} />
        <meta name="keywords" content="full stack developer, react, node.js, web development, portfolio" />
        <meta name="author" content={personalInfo.name} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${personalInfo.name} - ${personalInfo.title}`} />
        <meta property="og:description" content={personalInfo.bio} />
        <meta property="og:image" content={personalInfo.profileImage} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${personalInfo.name} - ${personalInfo.title}`} />
        <meta name="twitter:description" content={personalInfo.bio} />
        <meta name="twitter:image" content={personalInfo.profileImage} />

        <Header />
        <FloatingSocial />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Blog />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
