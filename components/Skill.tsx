import Image from 'next/image';
// import { BsCodeSquare } from 'react-icons/bs';
import { cardSkills } from '@/data';

interface Skill {
  id: number;
  title: string;
  color?: string;
  img: string;
}

export default function Skills() {
  return (
    <section className="container max-w-6xl w-full px-4 py-10 relative">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2">
          {/* <BsCodeSquare className="text-xl text-purple" /> */}
          <h2 className="text-3xl font-bold text-purple">Technical Skills</h2>
        </div>
          <p className="text-gray-400">Technologies I work with daily</p>
          <div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"
          />
        </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 justify-items-center">
        {cardSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <div className="relative sm:h-40 sm:w-48 w-36 rounded-2xl flex flex-col items-center justify-center p-4 overflow-hidden border-2 transition-all hover:scale-[1.03]">

      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ backgroundColor: skill.color ? `${skill.color}10` : '' }}
      >
        <div 
          className="absolute w-20 h-[170%] -top-1/2 left-1/2 animate-spin-slow"
          style={{ 
            background: `linear-gradient(to bottom, ${skill.color || '#888'}, transparent)`
          }}
        />
        <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-xl" />
      </div>

      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ backgroundColor: skill.color ? `${skill.color}10` : '' }}
      >
        <div 
          className="absolute w-20 h-[170%] -top-1/2 left-1/2 animate-spin-slow"
          style={{ 
            background: `linear-gradient(to top, ${skill.color || '#888'}, transparent)`
          }}
        />
        <div className="absolute inset-1 bg-gray-900 rounded-xl" />
      </div>

      <Image 
        src={skill.img} 
        alt={skill.title}
        width={60}
        height={60}
        className="z-10 mb-3"
      />
      <h4 className="z-10 font-medium text-center text-white">{skill.title}</h4>
    </div>
  );
};