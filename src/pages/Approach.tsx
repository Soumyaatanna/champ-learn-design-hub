
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactButtons from '@/components/ContactButtons';
import { Check, Book, Users, FileText } from "lucide-react";

const Approach = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradechamp-blue/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Our Teaching Approach</h1>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700 mb-6">
                At GradeChamp, we believe in personalized education that builds confidence and fosters a love for learning
              </p>
            </div>
          </div>
        </div>
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">The GradeChamp Difference</h2>
                <p className="text-gray-700 mb-6">
                  What sets our tutoring approach apart is our commitment to personalized learning journeys that adapt to each student's unique needs, learning style, and pace.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Check className="text-gradechamp-green mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-bold">1:1 Personalized Attention</span> - Every student receives dedicated attention from expert tutors who adapt teaching methods to their specific needs.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-gradechamp-green mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-bold">Conceptual Understanding</span> - We focus on building strong foundations rather than rote memorization, fostering deeper learning.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-gradechamp-green mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-bold">Real-world Applications</span> - We connect academic concepts to everyday life, making learning relevant and engaging.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Check className="text-gradechamp-green mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-bold">Continuous Assessment</span> - Regular feedback and progress tracking ensure students stay on the path to success.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Personalized tutoring" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
       <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12">Our Teaching Methodology</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Learn",
          icon: <Book className="h-8 w-8 text-gradechamp-blue" />,
          bg: "bg-gradechamp-softpurple/20",
          description:
            "Students engage with concepts through interactive lessons that combine visual, auditory, and kinesthetic learning techniques.",
        },
        {
          title: "Practice",
          icon: <Users className="h-8 w-8 text-gradechamp-blue" />,
          bg: "bg-gradechamp-yellow/20",
          description:
            "Guided practice with immediate feedback helps reinforce concepts and build confidence through progressively challenging exercises.",
        },
        {
          title: "Master",
          icon: <FileText className="h-8 w-8 text-gradechamp-blue" />,
          bg: "bg-gradechamp-green/20",
          description:
            "Students demonstrate mastery through assessments, problem-solving challenges, and real-world applications of concepts.",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex justify-center mb-4">
            <div className={`${item.bg} p-3 rounded-full`}>
              {item.icon}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-4 text-center text-gradechamp-blue">{item.title}</h3>
          <p className="text-gray-700 text-center">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
       
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradechamp-blue/5 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-center mb-8">How a Typical Session Works</h2>
              <div className="space-y-6 max-w-3xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gradechamp-blue">1. Check-in and Goal Setting (5 minutes)</h3>
                  <p className="text-gray-700">
                    The tutor begins by reviewing the student's progress, discussing any challenges from previous assignments, and setting clear objectives for the session.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gradechamp-blue">2. Concept Introduction (15 minutes)</h3>
                  <p className="text-gray-700">
                    New concepts are introduced using visual aids, analogies, and real-world examples to establish strong connections and understanding.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gradechamp-blue">3. Guided Practice (20 minutes)</h3>
                  <p className="text-gray-700">
                    Students work through problems with the tutor's guidance, learning strategies and techniques for solving different types of questions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gradechamp-blue">4. Independent Practice (15 minutes)</h3>
                  <p className="text-gray-700">
                    Students apply their learning independently, with the tutor observing and providing assistance only when needed.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gradechamp-blue">5. Recap and Homework Assignment (5 minutes)</h3>
                  <p className="text-gray-700">
                    The session concludes with a summary of key learnings and thoughtfully assigned homework that reinforces concepts while building confidence.
                  </p>
                </div>
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

export default Approach;
