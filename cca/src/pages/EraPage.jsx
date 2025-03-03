import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ContentSection from '../components/ContentSection';
import Footer from '../components/Footer';

const EraPage = () => {
  return (
    <div className="main-content">
      <Header />
      <HeroSection />
      <ContentSection
        title="Explore the Era"
        text="Discover the history and battles of the greatest empires."
        image="/images/image1.jpg"
      />
      <ContentSection
        title="Join the Battle"
        text="Become a part of the legacy and fight for glory."
        image="/images/image2.jpg"
        reverse
      />
      <Footer />
    </div>
  );
};

export default EraPage;