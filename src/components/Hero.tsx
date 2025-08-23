
import React, { useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { GraduationCap, Play } from "lucide-react";
import front from '@/data/front.png';
import front1 from '@/data/front1.png';

const Hero = React.memo(() => {
  const handleBookClass = useCallback(() => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd6ZEd1ASrDU65ypNz_BwEkPNG8nK1NViIGkC2kd_XPzZStow/viewform?usp=sharing', '_blank');
  }, []);

  const handleVideoPlay = useCallback(() => {
    window.open('https://drive.google.com/file/d/1K5l8nziszocoxTu3vQH5nnGLNxk9eLg_/view?usp=sharing', '_blank');
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-gradechamp-softpurple/40 to-white py-16 md:py-24">
      <div className="content-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-white/60 backdrop-blur-sm py-1.5 px-4 rounded-full mb-6 border border-gradechamp-purple/20 shadow-sm">
              <GraduationCap className="text-gradechamp-purple mr-2 h-4 w-4" />
              <span className="text-sm font-medium">Personalized Learning for Grades 5-10</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Build <span className="gradient-text">Confidence</span> and <span className="gradient-text">Knowledge</span> with Expert 1-on-1 Tutoring
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              GradeChamp connects your child with expert tutors who make learning personal, engaging, and effective—focusing on building deep understanding, not just grades.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button onClick={handleBookClass} className="btn-primary text-lg relative overflow-hidden group">
                <span className="relative z-10">Book a Free Demo Class</span>
                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
              <Button 
                variant="outline" 
                onClick={handleVideoPlay}
                className="border-2 border-gradechamp-purple rounded-full text-gradechamp-purple hover:bg-gradechamp-purple hover:text-white transition-colors duration-300 shadow-sm text-lg flex items-center"
              >
                <Play className="mr-2 h-4 w-4" />
                See How It Works
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <div className="badge bg-gradechamp-softpurple text-gradechamp-darkpurple font-medium">
                5000+ Classes Delivered
              </div>
              <div className="badge bg-gradechamp-green text-gray-700 font-medium">
                Expert Tutors
              </div>
              <div className="badge bg-gradechamp-yellow text-gray-700 font-medium">
                95% Parent Satisfaction
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="relative animate-float">
              <div className="bg-white p-3 md:p-5 rounded-2xl shadow-xl rotate-3 z-20 relative">
                <img 
                  src = {front}
                  alt="Student in online class" 
                  className="rounded-xl object-cover w-full h-50"
                  loading="eager"
                />
              </div>
              
              <div className="absolute top-auto -bottom-12 -right-12 z-10 bg-white p-3 md:p-4 rounded-2xl shadow-lg -rotate-3 animate-float" style={{animationDelay: "0.5s"}}>
                <img 
                  src= {front1}
                  alt="GradeChamp online learning" 
                  className="rounded-xl object-cover w-80 h-40"
                  loading="eager"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradechamp-yellow rounded-full animate-pulse-light"></div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradechamp-softpurple rounded-full animate-pulse-light" style={{animationDelay: "1s"}}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
});

export default Hero;
