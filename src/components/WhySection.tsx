
import React from 'react';
import { BookOpen, Users, Check, MessageCircle, School, Lightbulb, Brain, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-gradechamp-purple" />,
    title: "1-on-1 Personalized Learning",
    description: "Custom learning paths tailored to your child's unique needs, learning style, and pace.",
    traditional: "Group classes with 30+ students",
    edtech: "Pre-recorded videos for all students"
  },
  {
    icon: <Users className="h-8 w-8 text-gradechamp-purple" />,
    title: "Mentor Relationship",
    description: "Build a connection with a dedicated tutor who knows your child's strengths and challenges.",
    traditional: "Limited teacher interaction",
    edtech: "Different instructors per session"
  },
  {
    icon: <Check className="h-8 w-8 text-gradechamp-purple" />,
    title: "Real-Time Progress Tracking",
    description: "Detailed insights on improvement areas and achievements after every session.",
    traditional: "Progress updates only during PTMs",
    edtech: "Automated progress reports"
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-gradechamp-purple" />,
    title: "Adaptive Teaching Methods",
    description: "Teaching approaches that evolve based on how your child responds and engages with the material.",
    traditional: "One teaching style for all students",
    edtech: "Algorithm-based adaptation only"
  }
];

const teachingComparison = [
  {
    traditional: "Teacher-centered classroom",
    gradechamp: "Student-centered personalized learning",
    icon: <School className="h-8 w-8 text-gradechamp-purple" />
  },
  {
    traditional: "Fixed curriculum pace for all",
    gradechamp: "Adaptive learning speed based on individual progress",
    icon: <Calendar className="h-8 w-8 text-gradechamp-purple" />
  },
  {
    traditional: "Focus on rote memorization",
    gradechamp: "Focus on conceptual understanding and application",
    icon: <Brain className="h-8 w-8 text-gradechamp-purple" />
  },
  {
    traditional: "Limited time for doubt clarification",
    gradechamp: "Dedicated time for questions and conceptual clarity",
    icon: <Lightbulb className="h-8 w-8 text-gradechamp-purple" />
  }
];

const WhySection = React.memo(() => {
  return (
    <section id="why" className="section-padding bg-gradient-to-b from-white to-gradechamp-softpurple/20">
      <div className="content-wrapper">
        <div className="text-center mb-12">
          <h2 className="section-title">Why Parents Choose GradeChamp</h2>
          <p className="section-subtitle">
            We combine personalized attention, expert mentorship, and engaging teaching methods to build confidence and foster a love for learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white hover:bg-gradechamp-softpurple/5 transition-colors p-6 rounded-xl shadow-md border border-gray-100 hover:border-gradechamp-purple/20"
            >
              <div className="bg-gradechamp-softpurple w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-5">{feature.description}</p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <Badge variant="outline" className="bg-gradechamp-yellow/20 border-0 text-gray-700 mr-2 mt-1 flex-shrink-0">
                    Traditional
                  </Badge>
                  <span className="text-sm text-gray-500">{feature.traditional}</span>
                </div>
                <div className="flex items-start">
                  <Badge variant="outline" className="bg-gradechamp-softpink/20 border-0 text-gray-700 mr-2 mt-1 flex-shrink-0">
                    Ed-Tech
                  </Badge>
                  <span className="text-sm text-gray-500">{feature.edtech}</span>
                </div>
                <div className="flex items-start">
                  <Badge variant="outline" className="bg-gradechamp-purple/10 border-0 text-gradechamp-darkpurple mr-2 mt-1 flex-shrink-0">
                    GradeChamp
                  </Badge>
                  <span className="text-sm font-medium text-gradechamp-purple">✓ {feature.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="bg-gradechamp-purple/10 px-6 py-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Traditional Teaching vs. GradeChamp Approach</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our approach differs from conventional teaching methods, focusing on individual growth and understanding.
            </p>
          </div>
          
          <div className="divide-y divide-gray-200">
            <div className="grid grid-cols-11 bg-gradechamp-purple/5 font-bold text-center py-4">
              <div className="col-span-5 px-4">Traditional Teaching</div>
              <div className="col-span-1 flex justify-center items-center">
                <div className="w-px h-full bg-gray-300"></div>
              </div>
              <div className="col-span-5 px-4">GradeChamp Method</div>
            </div>
            
            {teachingComparison.map((item, index) => (
              <div key={index} className="grid grid-cols-11 text-center py-5 hover:bg-gray-50 transition-colors">
                <div className="col-span-5 px-4 flex items-center justify-center">
                  <p className="text-gray-700">{item.traditional}</p>
                </div>
                <div className="col-span-1 flex justify-center items-center">
                  {item.icon}
                </div>
                <div className="col-span-5 px-4 flex items-center justify-center">
                  <p className="text-gradechamp-purple font-medium">{item.gradechamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default WhySection;
