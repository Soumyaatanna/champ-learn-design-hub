import sreeImage from './sree.jpg';
import subhaniImage from './SUBHANI.jpg';
import yaswanthImage from './YASWANTH.jpg';
import abajithImage from './abajith.jpg';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Sree",
    role: "Lead Mathematics Tutor",
    image: sreeImage, // added image here
    description: "Experienced mathematics educator with 8+ years of teaching excellence."
  },
  {
    name: "Subhani",
    role: "Science Specialist",
    image: subhaniImage,
    description: "Expert in Physics and Chemistry with innovative teaching approaches."
  },
  {
    name: "Yaswanth",
    role: "Academic Coordinator",
    image: yaswanthImage,
    description: "Coordinates curriculum development and student progress tracking."
  },
  {
    name: "Abajith",
    role: "Technology Integration Specialist",
    image: abajithImage,
    description: "Ensures seamless integration of technology in online learning."
  }
];
