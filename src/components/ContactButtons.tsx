
import React, { useCallback } from 'react';
import { Button } from "@/components/ui/button";
import WhatsAppContact from './WhatsAppContact';

const ContactButtons = React.memo(() => {
  const handleBookClass = useCallback(() => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd6ZEd1ASrDU65ypNz_BwEkPNG8nK1NViIGkC2kd_XPzZStow/viewform?usp=sharing', '_blank');
  }, []);

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gradechamp-yellow/20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Book a free consultation or contact us directly. Our academic advisors are here to help.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          <Button onClick={handleBookClass} className="btn-primary flex-1">
            Book a Free Class
          </Button>
          <WhatsAppContact 
            variant="outline" 
            className="flex-1" 
            text="Contact Us" 
            phoneNumber="918555974274"
          />
        </div>
      </div>
    </section>
  );
});

export default ContactButtons;
