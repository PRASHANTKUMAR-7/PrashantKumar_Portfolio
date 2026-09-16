import { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ScrollProgress from './components/Layout/ScrollProgress';
import BackToTop from './components/Layout/BackToTop';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';
import Education from './components/Sections/Education';
import Achievements from './components/Sections/Achievements';
import Contact from './components/Sections/Contact';
import LoadingScreen from './components/Common/LoadingScreen';
import { personalInfo } from './data/portfolio';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-700 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-300">
        {/* SEO + Open Graph */}
        <title>
          {personalInfo.name} — {personalInfo.title}
        </title>
        <meta name="description" content={personalInfo.summary} />
        <meta property="og:title" content={`${personalInfo.name} — ${personalInfo.title}`} />
        <meta property="og:description" content={personalInfo.summary} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        <ScrollProgress />
        <Header />

        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}

        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Achievements />
          <Contact />
        </main>

        <Footer />
        <BackToTop />
      </div>
    </HelmetProvider>
  );
}

export default App;