import React from 'react';
import { BookUser, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import sreeImage from "./sree.jpg";
import subhaniImage from './SUBHANI.jpg';
import yaswanthImage from './YASWANTH.jpg';
import abajithImage from './abajith.jpg';

const tutors = [
  {
    name: "Sree",
    subjects: "Mathematics",
    image: sreeImage,
    bio: "With 8+ years of teaching experience, Radhika makes math approachable through real-world examples and personalized learning plans.",
    philosophy: "Learning happens when students feel safe to make mistakes.",
    rating: 4.9
  },
  {
    name: "Subani",
    subjects: "Science",
    image: subhaniImage,
    bio: "Subhani has helped over 200 students master science concepts through hands-on experiments and clear explanations.",
    philosophy: "Curiosity is the foundation of all scientific discovery.",
    rating: 4.8
  },
  {
    name: "Yaswanth",
    subjects: "English & Social Studies",
    image: yaswanthImage,
    bio: "Yaswanth helps students find their voice through engaging discussions and builds confidence in even the most reluctant learners.",
    philosophy: "Every student has a unique voice waiting to be discovered.",
    rating: 4.9
  },
  {
    name: "Abajith",
    subjects: "Chemistry & Physics",
    image: abajithImage,
    bio: "Abajith transforms complex concepts into simple, understandable lessons using visual aids and interactive demonstrations.",
    philosophy: "Understanding the 'why' is as important as knowing the 'how'.",
    rating: 4.7
  }
];

const TutorsSection = () => {
  const handleViewAllTutors = () => {
    // In a real implementation, this would navigate to a tutors page
    console.log("View all tutors clicked");
  };
  
  const handleBookTrial = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd6ZEd1ASrDU65ypNz_BwEkPNG8nK1NViIGkC2kd_XPzZStow/viewform?usp=sharing', '_blank');
  };

  return (
    <section id="tutors" className="section-padding bg-gradient-to-b from-gradechamp-softpurple/20 to-white">
      <div className="content-wrapper">
        <div className="text-center mb-12">
          <h2 className="section-title">Learn From Expert Mentors</h2>
          <p className="section-subtitle">
            Our tutors are not just subject experts but mentors who understand your child's unique learning needs and aspirations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {tutors.map((tutor, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-gradechamp-purple/30 transition-all hover:shadow-lg group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={tutor.image} 
                  alt={tutor.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex items-center text-white">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="font-medium">{tutor.rating}</span>
                      <span className="text-xs ml-1 text-gray-200">/5</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold mb-1">{tutor.name}</h3>
                <div className="inline-flex items-center bg-gradechamp-softpurple/30 text-gradechamp-darkpurple rounded-full px-3 py-1 text-sm mb-3">
                  <BookUser className="h-3 w-3 mr-1" />
                  {tutor.subjects}
                </div>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{tutor.bio}</p>
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-sm italic text-gradechamp-purple">"<span className="font-medium">{tutor.philosophy}</span>"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            All our tutors undergo rigorous selection, background checks, and training in both academic expertise and mentorship skills.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={handleViewAllTutors} variant="outline" className="border-2 border-gradechamp-purple text-gradechamp-purple hover:bg-gradechamp-purple hover:text-white transition-colors duration-300">
              View All Tutors
            </Button>
            <Button onClick={handleBookTrial} className="btn-primary">
              Book a Trial Session
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(TutorsSection);
