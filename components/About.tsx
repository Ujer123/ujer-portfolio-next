import Image from 'next/image'
import React from 'react'
import About_1 from '@/public/about-1.jpg'
import { SECTION_IDS } from '@/config/site';
import Link from 'next/link';

const About = () => {
  return (
    <section id={SECTION_IDS.ABOUT} className="min-h-screen text-white flex justify-center items-center p-4">
        <div className="max-w-5xl w-full lg:pt-10 pt-0">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-purple">About Me</h2>
          <p className="text-gray-400">Get to know the developer behind the code</p>
          <div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">

          <div className="flex-shrink-0 rounded-2xl overflow-hidden lg:w-80 lg:h-80 h-auto w-full bg-gray-200">
            <Image
              src={About_1}
              alt="profile"
              width={300}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex-1 space-y-6">

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-[#111827] rounded-xl p-4 flex flex-col items-center w-full md:w-1/3">
                <span className="text-purple-400 text-xl mb-2">🏅</span>
                <h2 className="font-semibold">Experience</h2>
                <p className="text-sm text-gray-400">2+ Years Working</p>
              </div>
              <div className="bg-[#111827] rounded-xl p-4 flex flex-col items-center w-full md:w-1/3">
                <span className="text-purple-400 text-xl mb-2">👜</span>
                <h2 className="font-semibold">Completed</h2>
                <p className="text-sm text-gray-400">20+ Projects</p>
              </div>
              <div className="bg-[#111827] rounded-xl p-4 flex flex-col items-center w-full md:w-1/3">
                <span className="text-purple-400 text-xl mb-2">🎧</span>
                <h2 className="font-semibold">Success Rate</h2>
                <p className="text-sm text-gray-400">99%</p>
              </div>
            </div>

            <p className="text-gray-300 max-w-xl text-center md:text-left">
              I&apos;m a passionate MERN stack developer based in Mumbai, Maharashtra, with over 2 years of experience building modern web applications. I specialize in creating fast, scalable, and user-friendly digital solutions.
            </p>
            <p className="text-gray-300 max-w-xl text-center md:text-left">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I believe in writing clean, maintainable code that not only works but stands the test of time.
            </p>

            <div className="flex justify-center md:justify-start">
              <Link href={`#${SECTION_IDS.CONTACT}`} className="bg-purple text-black px-6 py-2 rounded-lg hover:bg-purple-600 transition">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
        </div>
      </section>
  )
}

export default About
