"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { 
  FaHome, 
  FaUser, 
  FaProjectDiagram, 
  FaBriefcase, 
  FaEnvelope, 
  FaBars, 
  FaTimes 
} from "react-icons/fa";

const navIcons: { [key: string]: React.ReactNode } = {
  "Home": <FaHome className="w-4 h-4" />,
  "About": <FaUser className="w-4 h-4" />,
  "Projects": <FaProjectDiagram className="w-4 h-4" />,
  "Experience": <FaBriefcase className="w-4 h-4" />,
  "Contact": <FaEnvelope className="w-4 h-4" />,
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const currentScrollY = current * (document.documentElement.scrollHeight - window.innerHeight);
      
      if (currentScrollY < 100) {
        setVisible(true);
      } 
    }
  });

  useEffect(() => {
    const handleClickOutside = () => {
      setIsMobileMenuOpen(false);
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => {
        const element = document.querySelector(item.link);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            name: item.name,
            top: rect.top,
            height: rect.height
          };
        }
        return null;
      }).filter(Boolean);

      const current = sections.find(section => 
        section && section.top <= 100 && section.top + section.height > 100
      );

      if (current) {
        setActiveSection(current.name);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <AnimatePresence mode="wait">
        <motion.nav
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn(
            "fixed top-4 inset-x-0 mx-auto z-50 w-fit",
            className
          )}
        >
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center">
            <div className="flex items-center space-x-1 rounded-full border border-white/10 bg-gray-900/80 backdrop-blur-md px-6 py-3 shadow-2xl">
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px" />
              {navItems.map((item, idx) => (
                <Link
                  key={`desktop-${idx}`}
                  href={item.link}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105",
                    activeSection === item.name
                      ? "text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  )}
                  onClick={handleLinkClick}
                >
                  {item.name}
                  {activeSection === item.name && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full -z-10"
                      transition={{ type: "spring", duration: 0.4 }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-center">
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="fixed top-4 right-4 p-3 rounded-full border border-white/10 bg-gray-900/80 backdrop-blur-md text-white shadow-2xl hover:bg-gray-800/80 transition-colors duration-300"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? "close" : "menu"}
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? (
                    <FaTimes className="w-5 h-5" />
                  ) : (
                    <FaBars className="w-5 h-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.nav>
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 right-4 left-4 bg-gray-900/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 space-y-2">
                {navItems.map((item, idx) => {
                  const icon = navIcons[item.name] || <div className="w-4 h-4" />;
                  return (
                    <Link
                      key={`mobile-${idx}`}
                      href={item.link}
                      onClick={handleLinkClick}
                      className={cn(
                        "flex items-center space-x-4 w-full p-4 rounded-xl transition-all duration-300 hover:scale-[1.02]",
                        activeSection === item.name
                          ? "text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                      )}
                    >
                      <span className="flex-shrink-0">{icon}</span>
                      <span className="font-medium text-lg">{item.name}</span>
                      {activeSection === item.name && (
                        <motion.div
                          className="ml-auto w-2 h-2 bg-white rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
              
              <div className="border-t border-white/10 p-4">
                <p className="text-center text-gray-400 text-sm">
                  Navigate through my portfolio
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center justify-around bg-gray-900/90 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-2xl"
        >
          {navItems.slice(0, 4).map((item, idx) => {
            const icon = navIcons[item.name] || <div className="w-5 h-5" />;
            const isActive = activeSection === item.name;
            
            return (
              <Link
                key={`bottom-${idx}`}
                href={item.link}
                className={cn(
                  "flex flex-col items-center space-y-1 p-2 rounded-xl transition-all duration-300",
                  isActive
                    ? "text-white bg-gradient-to-t from-purple-500 to-blue-500"
                    : "text-gray-400 hover:text-white"
                )}
                onClick={handleLinkClick}
              >
                <span className="text-lg">{icon}</span>
                <span className="text-xs font-medium">{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="bottomActiveSection"
                    className="absolute inset-0 bg-gradient-to-t from-purple-500 to-blue-500 rounded-xl -z-10"
                    transition={{ type: "spring", duration: 0.4 }}
                  />
                )}
              </Link>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};
