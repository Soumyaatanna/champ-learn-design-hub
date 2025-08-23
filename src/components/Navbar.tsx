
import React, { useState, useEffect, useCallback } from 'react';
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/clerk-react';
import UserMessages from './UserMessages';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';
import WhatsAppContact from './WhatsAppContact';

const Navbar = () => {
  const { isSignedIn, user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Optimize scroll handler with useCallback
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const handleBookClass = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd6ZEd1ASrDU65ypNz_BwEkPNG8nK1NViIGkC2kd_XPzZStow/viewform?usp=sharing', '_blank');
  };

  // Dummy: Only allow admin by email (replace with real admin check)
  const isAdmin = user?.primaryEmailAddress?.emailAddress === 'admin@example.com';

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="content-wrapper">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <img 
                src="/lovable-uploads/af53a0ef-4355-40ef-ab74-781f6fa9f1e3.png" 
                alt="GradeChamp Logo" 
                className="h-10 w-auto"
                loading="eager"
              />
              <span className="text-2xl font-bold gradient-text font-heading hidden sm:inline-block">GradeChamp</span>
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-1">
            <NavItem to="/about" label="About Us" />
            <NavItem to="/curriculum" label="Curriculum" />
            <NavItem to="/approach" label="Our Approach" />
            <NavItem to="/teams" label="Our Team" />
            <WhatsAppContact variant="outline" text="Contact Us" className="ml-2" />
            <Button onClick={handleBookClass} className="btn-primary ml-2">Book a Free Class</Button>
            {/* Admin Panel Link */}
            {isAdmin && (
              <Link to="/admin" className="ml-4 px-3 py-2 rounded bg-purple-100 text-purple-700 font-semibold hover:bg-purple-200 transition">Admin Panel</Link>
            )}
            {/* User Messages Icon */}
            {isSignedIn && <div className="ml-4"><UserMessages /></div>}
            {/* Clerk Auth Buttons */}
            {isSignedIn ? (
              <div className="ml-4"><UserButton afterSignOutUrl="/" /></div>
            ) : (
              <div className="flex gap-2 ml-4">
                <SignInButton mode="modal">
                  <Button variant="outline">Login</Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button variant="default">Register</Button>
                </SignUpButton>
              </div>
            )}
          </div>
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-sm shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <MobileNavItem to="/about" label="About Us" onClick={() => setIsMenuOpen(false)} />
            <MobileNavItem to="/curriculum" label="Curriculum" onClick={() => setIsMenuOpen(false)} />
            <MobileNavItem to="/approach" label="Our Approach" onClick={() => setIsMenuOpen(false)} />
            <MobileNavItem to="/teams" label="Our Team" onClick={() => setIsMenuOpen(false)} />
            <div className="pt-2 flex flex-col space-y-3">
              <Button onClick={handleBookClass} className="btn-primary w-full">Book a Free Class</Button>
              <WhatsAppContact variant="outline" text="Contact Us" fullWidth={true} />
              {/* Admin Panel Link */}
              {isAdmin && (
                <Link to="/admin" className="w-full px-3 py-2 rounded bg-purple-100 text-purple-700 font-semibold hover:bg-purple-200 transition text-center">Admin Panel</Link>
              )}
              {/* User Messages Icon */}
              {isSignedIn && <div className="w-full flex justify-start"><UserMessages /></div>}
              {/* Clerk Auth Buttons for mobile */}
              {isSignedIn ? (
                <div className="w-full flex justify-start"><UserButton afterSignOutUrl="/" /></div>
              ) : (
                <div className="flex gap-2 w-full">
                  <SignInButton mode="modal">
                    <Button variant="outline" className="w-full">Login</Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button variant="default" className="w-full">Register</Button>
                  </SignUpButton>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// Desktop navigation item
const NavItem = ({ to, label, hasDrop = false }) => {
  return (
    <Link 
      to={to} 
      className="relative px-3 py-2 text-gray-700 hover:text-gradechamp-purple transition-colors group"
    >
      <span className="flex items-center">
        {label}
        {hasDrop && <ChevronDown className="ml-1 h-4 w-4" />}
      </span>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradechamp-purple scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
    </Link>
  );
};

// Mobile navigation item
const MobileNavItem = ({ to, label, onClick }) => {
  return (
    <Link 
      to={to} 
      className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gradechamp-softpurple/20 hover:text-gradechamp-purple transition-colors"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default React.memo(Navbar);
