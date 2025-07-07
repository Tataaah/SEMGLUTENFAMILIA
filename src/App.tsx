import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import ApprovalSection from './components/ApprovalSection';
import DifficultySection from './components/DifficultySection';
import FAQSection from './components/FAQSection';
import TestimonialsSection from './components/TestimonialsSection';
import OffersSection from './components/OffersSection';
import GuaranteeSection from './components/GuaranteeSection';
import Footer from './components/Footer';
import SalesNotification from './components/SalesNotification';

function App() {
  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      <CountdownTimer />
      <SalesNotification />
      
      <div className="pt-16">
        <HeroSection />
        <BenefitsSection />
        <ApprovalSection />
        <DifficultySection />
        <FAQSection />
        <TestimonialsSection />
        <OffersSection />
        <GuaranteeSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;