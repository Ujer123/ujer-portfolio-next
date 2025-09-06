import Image from "next/image";
import { GlareCard } from "./ui/glare-card";

interface Project {
  title: string;
  img: string;
  desc: string;
  tech: string[];
}

export default function GlareCardDemo(): JSX.Element {
  const projects: Project[] = [
    {
      title: "Daniyal Perfume",
      img: "/projects/Daniyal_E-com.png",
      desc: "Developed an Full-featured online store with payment integration, admin dashboard, and real-time order tracking. Built for scalability and performance.",
      tech: ["Next.js", "Clerk", "TailwindCSS"],
    },
    {
      title: "Task Manager",
      img: "/projects/Task_Angular.png",
      desc: "Collaborative task manager with real-time updates, drag-and-drop interface, and team collaboration features.",
      tech: ["Angular", "Express.js", "MongoDB"],
    },
    {
      title: "Gcore Clone",
      img: "/projects/Next_Animation.png",
      desc: "Developed Gcore Animation Website using NextJs, Javascript, TailwindCSS and Framer-motion. It was a fully animated website with a logo video at the start.",
      tech: ["Next.js", "Framer-motion", "TailwindCSS"],
    }
  ];

  return (
    <div className="container px-4 py-10 relative justify-items-center">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-purple">
        Projects
      </h2>
      <p className="text-center text-gray-400 font-bold">Some of my recent work</p>
      <div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"
          />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full mt-12">
        {projects.map((project: Project, idx: number) => (
          <GlareCard
            key={`project-${idx}`}
            className="flex flex-col items-start justify-start py-6 sm:py-8 px-4 sm:px-6"
          >
            {/* Image sits at top, bounded */}
            <Image
              src={project.img}
              alt={project.title}
              width={800}
              height={300}
              className="w-full h-40 sm:h-52 object-cover rounded-md mb-4"
              priority={idx === 0}
            />

            {/* Text Content */}
            <h3 className="font-bold text-white text-base sm:text-lg">
              {project.title}
            </h3>
            <p className="font-normal text-sm sm:text-base text-neutral-200 mt-3">
              {project.desc}
            </p>
            
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech: string, techIdx: number) => (
                <span
                  key={`${project.title}-tech-${techIdx}`}
                  className="px-3 py-1 text-xs sm:text-sm rounded-full border text-accent bg-gradient-to-br from-gray-800 to-black"
                >
                  {tech}
                </span>
              ))}
            </div>
          </GlareCard>
        ))}
      </div>
    </div>
  );
}