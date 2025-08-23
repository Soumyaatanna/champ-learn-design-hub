
import React from 'react';
import { Button } from "@/components/ui/button";

const schools = [
  {
    name: "Delhi Public School",
    location: "New Delhi",
    students: "250+ students enrolled",
    image: "https://th.bing.com/th/id/OIP.2lkS4bJX89KequJuBDi8-AHaD5?cb=iwc2&rs=1&pid=ImgDetMain"
  },
  {
    name: "Ryan International School",
    location: "Mumbai",
    students: "180+ students enrolled",
    image: "https://th.bing.com/th/id/OIP.IzkO0lgxo6KKtSH0PxvyngHaHa?cb=iwc2&rs=1&pid=ImgDetMain"
  },
  {
    name: "St. Xavier's School",
    location: "Bangalore",
    students: "200+ students enrolled",
    image: "https://www.rchitects.ph/__resources/webdata/images/projects_gallery/22_16.jpg"
  },
  {
    name: "DAV Public School",
    location: "Chennai",
    students: "150+ students enrolled",
    image: "https://th.bing.com/th/id/OIP.fWVZDlrgJStxiCv08-qVQgHaFj?cb=iwc2&w=800&h=600&rs=1&pid=ImgDetMain"
  }
];

const SchoolCollaborations = React.memo(() => {
  const handlePartnerInquiry = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd6ZEd1ASrDU65ypNz_BwEkPNG8nK1NViIGkC2kd_XPzZStow/viewform?usp=sharing', '_blank');
  };

  return (
    <section className="section-padding bg-gradechamp-softpurple/10">
      <div className="content-wrapper">
        <div className="text-center mb-10">
          <h2 className="section-title">Our School Partners</h2>
          <p className="section-subtitle">
            GradeChamp partners with leading CBSE and State Board schools to enhance student learning outcomes across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schools.map((school, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100 hover:border-gradechamp-purple/20"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={school.image}
                  alt={`${school.name} campus`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/images/placeholder.svg";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-center mb-2">{school.name}</h3>
                <p className="text-gray-600 text-center mb-1">{school.location}</p>
                <p className="text-gradechamp-purple text-sm text-center font-medium">{school.students}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Are you a school administrator interested in partnering with GradeChamp to provide supplemental learning for your students?
          </p>
          <Button 
            onClick={handlePartnerInquiry}
            className="bg-white border-2 border-gradechamp-purple text-gradechamp-purple hover:bg-gradechamp-purple hover:text-white transition-colors shadow-md"
          >
            Inquire About School Partnerships
          </Button>
        </div>
      </div>
    </section>
  );
});

export default SchoolCollaborations;
