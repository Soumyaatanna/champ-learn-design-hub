import React from 'react';
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const subjects = [
  {
    name: "Mathematics",
    icon: "📐",
    color: "bg-gradechamp-blue/10 border-gradechamp-blue",
    description: "Comprehensive mathematics education covering arithmetic, algebra, geometry, and more",
    outcomes: "From basic concepts to advanced problem-solving",
    classes: "Classes 4-10"
  },
  {
    name: "Science",
    icon: "🧪",
    color: "bg-gradechamp-green/20 border-green-500",
    description: "In-depth coverage of physics and biology with practical experiments",
    outcomes: "Building scientific thinking and analytical skills",
    classes: "Classes 4-10"
  },
  {
    name: "Chemistry",
    icon: "⚗️",
    color: "bg-gradechamp-peach/20 border-orange-500",
    description: "Exploring chemical concepts through theory and lab work",
    outcomes: "Understanding chemical principles and reactions",
    classes: "Classes 4-10"
  }
];

const SubjectsSection = () => {
  return (
    <section id="subjects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Subjects & Grade Levels</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive curriculum covers all major subjects with specialized mentors for each area,
            focusing on building both academic excellence and confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <Card 
              key={index}
              className={cn(
                "rounded-2xl p-4 border-2 transition-all hover:-translate-y-1 hover:shadow-md cursor-pointer",
                subject.color
              )}
            >
              <CardHeader className="p-4">
                <div className="flex items-center">
                  <span className="text-4xl mr-4">{subject.icon}</span>
                  <div>
                    <h3 className="font-bold text-xl">{subject.name}</h3>
                    <p className="text-sm text-gray-500">{subject.classes}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-gray-600 mb-3">{subject.description}</p>
                <div className="bg-gradechamp-blue/5 rounded-lg p-2 mt-2">
                  <p className="text-sm font-medium text-gradechamp-blue">
                    <span className="font-bold">Outcome:</span> {subject.outcomes}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;
