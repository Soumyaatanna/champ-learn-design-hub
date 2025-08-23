
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactButtons from '@/components/ContactButtons';

const Curriculum = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradechamp-blue/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Our Curriculum</h1>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700 mb-6">
                Comprehensive, engaging, and aligned with CBSE and State Board standards for grades 4-10
              </p>
            </div>
          </div>
        </div>
        
        <section id="mathematics" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradechamp-blue">Mathematics</h2>
                <p className="text-gray-700 mb-4">
                  Our mathematics curriculum builds strong foundational skills while developing critical thinking and problem-solving abilities.
                </p>
                <h3 className="text-xl font-bold mt-6 mb-3">Primary (Grades 4-5):</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Number systems and operations</li>
                  <li>Basic geometry and measurement</li>
                  <li>Introduction to fractions and decimals</li>
                  <li>Pattern recognition</li>
                </ul>
                <h3 className="text-xl font-bold mt-6 mb-3">Middle School (Grades 6-8):</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Algebra fundamentals</li>
                  <li>Geometry and mensuration</li>
                  <li>Data handling and statistics</li>
                  <li>Ratio, proportion, and percentages</li>
                </ul>
                <h3 className="text-xl font-bold mt-6 mb-3">High School (Grades 9-10):</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Advanced algebra</li>
                  <li>Coordinate geometry</li>
                  <li>Trigonometry</li>
                  <li>Statistics and probability</li>
                  <li>Quadratic equations</li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Mathematics learning" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section id="science" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Science learning" 
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6 text-gradechamp-blue">Science</h2>
                <p className="text-gray-700 mb-4">
                  Our science curriculum focuses on building scientific inquiry skills through hands-on experiments and conceptual understanding.
                </p>
                <h3 className="text-xl font-bold mt-6 mb-3">Primary (Grades 4-5):</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Living and non-living things</li>
                  <li>Human body systems</li>
                  <li>Environmental science</li>
                  <li>Matter and materials</li>
                </ul>
                <h3 className="text-xl font-bold mt-6 mb-3">Middle School (Grades 6-8):</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Cell structure and function</li>
                  <li>Force, motion, and energy</li>
                  <li>Earth and space sciences</li>
                  <li>Basic chemical reactions</li>
                </ul>
                <h3 className="text-xl font-bold mt-6 mb-3">High School (Grades 9-10):</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Physics: Laws of motion, work, energy</li>
                  <li>Biology: Life processes, heredity, evolution</li>
                  <li>Environmental science: Natural resources, ecosystems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section id="chemistry" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradechamp-blue">Chemistry</h2>
                <p className="text-gray-700 mb-4">
                  Our specialized chemistry curriculum makes complex concepts accessible through visualization, experimentation, and real-world applications.
                </p>
                <h3 className="text-xl font-bold mt-6 mb-3">Middle School (Grades 6-8):</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Matter and its properties</li>
                  <li>Elements, compounds, and mixtures</li>
                  <li>Atomic structure basics</li>
                  <li>Physical and chemical changes</li>
                </ul>
                <h3 className="text-xl font-bold mt-6 mb-3">High School (Grades 9-10):</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Atomic structure and chemical bonding</li>
                  <li>Periodic table and properties of elements</li>
                  <li>Chemical reactions and equations</li>
                  <li>Acids, bases, and salts</li>
                  <li>Organic chemistry fundamentals</li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Chemistry lab" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gradechamp-yellow/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Curriculum Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gradechamp-blue">Board-Aligned Content</h3>
                <p className="text-gray-700">
                  Our curriculum is carefully mapped to CBSE and State Board requirements, ensuring students are well-prepared for their examinations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gradechamp-blue">Interactive Learning</h3>
                <p className="text-gray-700">
                  We incorporate digital tools, virtual labs, and hands-on activities to make learning engaging and effective.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gradechamp-blue">Regular Assessments</h3>
                <p className="text-gray-700">
                  Formative and summative assessments help track progress, identify areas for improvement, and celebrate achievements.
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

export default Curriculum;
