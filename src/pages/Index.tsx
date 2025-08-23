
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhySection from '@/components/WhySection';
import SubjectsSection from '@/components/SubjectsSection';
import TutorsSection from '@/components/TutorsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WorkShowcase from '@/components/WorkShowcase';
import SchoolCollaborations from '@/components/SchoolCollaborations';
import Footer from '@/components/Footer';
import ContactButtons from '@/components/ContactButtons';

const Index = React.memo(() => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhySection />
        <SubjectsSection />
        <TutorsSection />
        <TestimonialsSection />
        <WorkShowcase />
        <SchoolCollaborations />
        <ContactButtons />
      </main>
      <Footer />
    </div>
  );
});

export default Index;
