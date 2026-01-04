import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { AboutSection, WhySection, CoursesSection, AdvantagesSection } from './components/ContentSections';
import { ProcessSection, DocumentsSection, CTASection, ContactSection } from './components/ProcessSections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent/30 selection:text-brand-accent">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <WhySection />
        <CoursesSection />
        <AdvantagesSection />
        <ProcessSection />
        <DocumentsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;