
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactButtons from '@/components/ContactButtons';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradechamp-blue/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About GradeChamp</h1>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700 mb-6">
                Our mission is to provide personalized tutoring that builds confidence and fosters a love for learning.
              </p>
            </div>
          </div>
        </div>
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  GradeChamp was founded in 2018 by a group of passionate educators who believed that personalized learning could transform education outcomes for students across India.
                </p>
                <p className="text-gray-700 mb-4">
                  What started as a small initiative with just 5 tutors has grown into a comprehensive platform connecting hundreds of expert tutors with students in grades 4-10 across CBSE and State boards.
                </p>
                <p className="text-gray-700">
                  Our focus on Mathematics, Science, and Chemistry ensures that we deliver depth rather than breadth, with curriculum-aligned content that helps students excel in their academic journey.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Teachers collaborating" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gradechamp-blue">Personalized Attention</h3>
                <p className="text-gray-700">
                  We believe that every student is unique. Our 1:1 tutoring approach ensures that learning is tailored to individual needs and learning styles.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gradechamp-blue">Academic Excellence</h3>
                <p className="text-gray-700">
                  We maintain high standards in our teaching methodology, curriculum design, and tutor selection to ensure students receive the best possible education.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gradechamp-blue">Growth Mindset</h3>
                <p className="text-gray-700">
                  We foster a culture that embraces challenges, persists in the face of setbacks, and sees effort as the path to mastery and learning.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <ContactButtons />
      </main>
      <Footer />
    </div>
  );
};

export default About;
