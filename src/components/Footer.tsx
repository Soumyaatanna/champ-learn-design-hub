import React from 'react';
import { Button } from "@/components/ui/button";
import { School, Mail, Phone, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import WhatsAppContact from './WhatsAppContact';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = {
    facebook: "https://facebook.com/gradechamp",
    instagram: "https://instagram.com/gradechamp",
    linkedin: "https://linkedin.com/company/gradechamp",
    twitter: "https://twitter.com/gradechamp"
  };

  // Function to handle scroll to section when using hash links
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/af53a0ef-4355-40ef-ab74-781f6fa9f1e3.png" 
                alt="GradeChamp Logo" 
                className="h-8 w-auto"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-gray-800">GradeChamp</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Expert online tutoring for CBSE and State Board students in grades 4-10, specializing in Mathematics, Science, and Chemistry.
            </p>
            <div className="flex space-x-4">
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gradechamp-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gradechamp-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gradechamp-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gradechamp-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-gray-800 font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/about" className="hover:text-gradechamp-blue transition-colors">About Us</Link></li>
              <li><Link to="/curriculum" className="hover:text-gradechamp-blue transition-colors">Curriculum</Link></li>
              <li><Link to="/approach" className="hover:text-gradechamp-blue transition-colors">Our Approach</Link></li>
              <li><Link to="/teams" className="hover:text-gradechamp-blue transition-colors">Our Tutors</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-800 font-bold mb-4">Subjects</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link 
                  to="/curriculum" 
                  className="hover:text-gradechamp-blue transition-colors"
                  onClick={() => setTimeout(() => scrollToSection('mathematics'), 100)}
                >
                  Mathematics
                </Link>
              </li>
              <li>
                <Link 
                  to="/curriculum" 
                  className="hover:text-gradechamp-blue transition-colors"
                  onClick={() => setTimeout(() => scrollToSection('science'), 100)}
                >
                  Science
                </Link>
              </li>
              <li>
                <Link 
                  to="/curriculum" 
                  className="hover:text-gradechamp-blue transition-colors"
                  onClick={() => setTimeout(() => scrollToSection('chemistry'), 100)}
                >
                  Chemistry
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-800 font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gradechamp-blue" />
                <a href="mailto:info@gradechamp.com">info@gradechamp.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gradechamp-blue" />
                <a href="tel:+91-800-123-4567">+91-800-123-4567</a>
              </li>
              <li className="flex items-center">
                <img 
                  src="/images/whatsapp-icon.svg" 
                  alt="WhatsApp" 
                  className="h-5 w-5 mr-2 text-gradechamp-blue"
                  onError={(e) => {
                    e.currentTarget.src = "/lovable-uploads/af53a0ef-4355-40ef-ab74-781f6fa9f1e3.png";
                  }}
                />
                <a href="https://wa.me/918555974274" target="_blank" rel="noopener noreferrer">+91 85559 74274</a>
              </li>
            </ul>
            
            <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <School className="h-5 w-5 text-gradechamp-blue mr-2" />
                <h5 className="text-gray-800 font-bold">For Schools</h5>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Partner with GradeChamp to bring personalized learning to your students.
              </p>
              <WhatsAppContact 
                variant="outline" 
                size="sm" 
                text="Contact Us"
                fullWidth={true}
              />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} GradeChamp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
