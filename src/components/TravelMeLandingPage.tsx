import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import WhySection from './WhySection';
import ConciergeSection from './ConciergeSection';
import FeaturesSection from './FeaturesSection';
import IntelligenceSection from './IntelligenceSection';
import APISection from './APISection';
import CTASection from './CTASection';
import Footer from './Footer';
import '../styles/Global.css';

const TravelmeLandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Header />
      <HeroSection />
      <WhySection />
      <ConciergeSection />
      <FeaturesSection />
      <IntelligenceSection />
      <APISection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default TravelmeLandingPage;