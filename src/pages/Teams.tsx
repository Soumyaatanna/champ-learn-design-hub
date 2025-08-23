
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';
import { useLocation, useParams } from 'react-router-dom';

const Teams = () => {
  const location = useLocation();
  const { memberSection } = useParams();

  // Handle direct URL access, refresh, or params
  useEffect(() => {
    // Check for hash in URL first
    if (location.hash) {
      const id = location.hash.substring(1);
      scrollToElement(id);
    }
    // If no hash but we have a param, try to use that
    else if (memberSection) {
      // Try to convert param to a team member ID
      const possibleId = `team-member-${memberSection}`;
      scrollToElement(possibleId);
    }
  }, [location, memberSection]);

  const scrollToElement = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); // Slightly longer timeout to ensure page is fully loaded
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Teams;
