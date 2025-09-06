'use client'
import React,{useMemo} from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Code, Users, Trophy } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: "Bidolab Tech Pvt. Ltd.",
    position: "Senior Frontend Developer",
    duration: "July 2025 - Present",
    location: "Remote",
    type: "Full-time",
    description: "Led development of multiple frontend applications using React, Redux, and Tailwind CSS. Collaborated with cross-functional teams to deliver high-quality solutions and mentored junior developers.",
    achievements: [
      "Reduced application load time by 40% through code optimization",
      "Implemented automated testing reducing bugs by 60%",
      "Led a team of 2 developers on critical projects"
    ],
    technologies: ["React", "Next.js", "Redux", "Jest", "Javascript", "RazorPay"],
    color: "from-blue-500 to-purple-600",
    icon: <Trophy className="w-5 h-5" />
  },
  {
    id: 2,
    company: "Witty Web Solutions",
    position: "Frontend Developer",
    duration: "June 2024 - July 2025",
    location: "Mumbai",
    type: "Full-time",
    description: "Developed responsive web applications and RESTful APIs. Worked on database optimization and implemented modern development practices with focus on user experience.",
    achievements: [
      "Successfully delivered 15+ projects on time and within budget",
      "Increased client satisfaction score to 98% through quality delivery",
      "Built responsive designs supporting 5+ device types"
    ],
    technologies: ["JavaScript", "React", "Wordpress", "PHP", "Git"],
    color: "from-green-500 to-teal-600",
    icon: <Code className="w-5 h-5" />
  },
  {
    id: 3,
    company: "KAF INFOTECH",
    position: "Junior MERN Developer",
    duration: "June 2023 - May 2024",
    location: "Mumbai",
    type: "Internship",
    description: "Started my professional journey building dynamic web applications. Gained experience in modern web technologies and agile development methodologies while working in a fast-paced startup environment.",
    achievements: [
      "Built responsive landing pages for 10+ clients",
      "Contributed to 2 major product features",
      "Learned and applied modern development practices"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Express.js", "Git"],
    color: "from-orange-500 to-red-600",
    icon: <Users className="w-5 h-5" />
  }
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const ExperienceSection = () => {



  return (
    <section className="container max-w-7xl w-full sm:px-4 py-10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-purple">Experience</h2>
          <p className="text-gray-400">
            My professional journey through innovative companies and exciting projects
          </p>
          <div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"
          />
        </motion.div>

        {/* Experience Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative"
            >
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 h-full hover:border-gray-600/50 transition-all duration-300">
                
                {/* Top Gradient Bar */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r rounded-t-2xl ${exp.color}`} />
                
                {/* Company Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.color}`}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-gray-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                    {exp.type}
                  </span>
                </div>

                {/* Position & Duration */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-100 mb-2">{exp.position}</h4>
                  <p className="text-sm text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-gray-200 mb-3 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="text-xs px-3 py-1 bg-gray-800/60 text-gray-300 rounded-full border border-gray-700/50 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* External Link Button (appears on hover) */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 text-white" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-gray-400 mb-6">Want to know more about me?</p>
          <a href="/Ujer-Resume.pdf" className='cursor-pointer' download>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
            Download Resume
          </motion.button>
            </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;