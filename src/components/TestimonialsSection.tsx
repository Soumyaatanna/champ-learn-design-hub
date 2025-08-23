import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";
import girl from '@/data/girl1.png'
import girl1 from '@/data/girl2.png'
import boy from '@/data/indian_boy.png'
import boy1 from '@/data/indian_boy2.png'

const testimonials = [
  {
    name: "Sunita Sharma",
    role: "Parent of 7th Grader",
    image: girl,
    quote: "GradeChamp has transformed our evenings from homework battles to productive learning. My son now approaches math with confidence instead of dread.",
    rating: 5
  },
  {
    name: "Rajesh Kumar",
    role: "Parent of 5th Grader",
    image: boy,
    quote: "The personal connection my daughter has with her GradeChamp tutor has made all the difference. Her grades have improved, but more importantly, she's excited about learning again.",
    rating: 5
  },
  {
    name: "Ananya Singh",
    role: "8th Grade Student",
    image: girl1,
    quote: "I used to be too embarrassed to ask questions in class. With GradeChamp, I can ask anything without feeling judged, and now I'm one of the top students in science!",
    rating: 4
  },
  {
    name: "Vikram Malhotra",
    role: "Parent of 3th Grader",
    image: boy1,
    quote: "The personalized attention at GradeChamp has helped my son develop study habits that will serve him throughout his academic journey. Worth every penny.",
    rating: 5
  }
];

const stats = [
  { number: "95%", text: "Student satisfaction" },
  { number: "2000+", text: "Tutoring hours delivered" },
  { number: "87%", text: "Students improved by at least one grade" },
  { number: "4.8/5", text: "Average tutor rating" }
];

const TestimonialsSection = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-white to-gradechamp-yellow/20">
      <div className="content-wrapper">
        <div className="text-center mb-12">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">
            Hear from parents and students about how GradeChamp has transformed their learning experience.
          </p>
        </div>
        
        <div className="mb-16">
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1">
                  <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 relative">
                    <Quote className="absolute top-6 left-6 text-6xl text-gradechamp-softpurple opacity-50" />
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                      <div className="mx-auto md:mx-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-24 h-24 rounded-full object-cover border-4 border-gradechamp-softpurple/30"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          {renderStars(testimonial.rating)}
                        </div>
                        <p className="text-gray-600 mb-4 text-lg relative z-10 italic">"{testimonial.quote}"</p>
                        <div className="flex items-center">
                          <div>
                            <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                            <p className="text-sm text-gradechamp-darkpurple">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="border-gradechamp-purple text-gradechamp-purple hover:bg-gradechamp-purple hover:text-white" />
              <CarouselNext className="border-gradechamp-purple text-gradechamp-purple hover:bg-gradechamp-purple hover:text-white" />
            </div>
          </Carousel>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center border border-gray-100 hover:border-gradechamp-purple/20 transition-all">
              <h3 className="text-3xl font-bold gradient-text mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(TestimonialsSection);
