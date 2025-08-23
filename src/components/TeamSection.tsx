import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { teamMembers } from '@/data/teamData';

const TeamSection = () => {
  return (
    <section className="section-padding bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Meet Our Team</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Our experienced educators are dedicated to helping students achieve their academic goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
            className="shadow-2xl hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out rounded-2xl overflow-hidden"


              id={`team-member-${index}`}
            >
              <CardHeader className="p-0 h-48 overflow-hidden">
                <img
                  src={member.image}
                  alt={`Photo of ${member.name}`}
                  className="w-full h-full object-cover"
                  loading={index < 4 ? "eager" : "lazy"}
                />
              </CardHeader>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
