
import React, { useCallback } from 'react';
import advance from '@/data/advanceStudy.png'
import doubts from '@/data/doubts.png'
import online from '@/data/onlineStudy.png'
import one from '@/data/front1.png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ArrowRight } from "lucide-react";

interface Slide {
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: one,
    title: "One-on-One Learning",
    description: "Personalized attention tailored to each student's unique learning needs"
  },
  {
    image: doubts,
    title: "Interactive Sessions",
    description: "Engaging learning experiences with real-time problem solving"
  },
  {
    image: advance,
    title: "Advanced Teaching Methods",
    description: "Using modern pedagogical approaches to enhance understanding"
  },
  {
    image: online,
    title: "Focused Environment",
    description: "Creating the perfect setting for academic growth and development"
  }
];

const WorkShowcase: React.FC = React.memo(() => {
  const handleBookClass = useCallback(() => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd6ZEd1ASrDU65ypNz_BwEkPNG8nK1NViIGkC2kd_XPzZStow/viewform?usp=sharing', '_blank');
  }, []);

  const handleWatchVideo = useCallback(() => {
    window.open('https://drive.google.com/file/d/1K5l8nziszocoxTu3vQH5nnGLNxk9eLg_/view?usp=sharing', '_blank');
  }, []);

  return (
    <section className="section-padding bg-gradient-to-b from-gradechamp-yellow/20 to-white">
      <div className="content-wrapper">
        <h2 className="section-title text-center">How GradeChamp Works</h2>
        <p className="section-subtitle text-center">
          See how we're transforming education through personalized learning and expert mentorship
        </p>
        
        <div className="relative px-4 md:px-12 mb-16">
          <Carousel className="w-full">
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4 md:pl-6">
                  <Card className="h-full border border-gray-100 hover:border-gradechamp-purple/20 transition-all overflow-hidden rounded-xl">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <div className="p-4 md:p-6 w-full">
                          <h3 className="text-xl font-bold text-white">{slide.title}</h3>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4 md:p-6">
                      <p className="text-gray-600">{slide.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-gradechamp-purple text-gradechamp-purple hover:bg-gradechamp-purple hover:text-white" />
            <CarouselNext className="border-gradechamp-purple text-gradechamp-purple hover:bg-gradechamp-purple hover:text-white" />
          </Carousel>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          <Button onClick={handleBookClass} className="btn-primary text-lg group relative overflow-hidden w-full md:w-auto">
            <span className="relative z-10 flex items-center">
              Book a Free Demo Class 
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          <Button 
            variant="outline" 
            onClick={handleWatchVideo} 
            className="border-2 border-gradechamp-purple rounded-full text-gradechamp-purple hover:bg-gradechamp-purple hover:text-white transition-colors shadow-sm text-lg flex items-center w-full md:w-auto justify-center"
          >
            <Play className="mr-2 h-4 w-4" />
            Watch How It Works
          </Button>
        </div>
      </div>
    </section>
  );
});

export default WorkShowcase;
