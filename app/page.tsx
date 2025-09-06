import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skill";
import DemoCard from '@/components/DemoCard'
import ContactForm from "@/components/ContactForm";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ExperienceSection from '@/components/ExperienceSection';

export default function Home() {
  return (
    <>
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100">
      <FloatingNav navItems={navItems}/>             
      <Hero/>
      <About/>
      <Skills/>
      <DemoCard/>
      <ExperienceSection/>
      <ContactForm/>
      <ScrollToTopButton />
    </main>
    </>
  );
}
