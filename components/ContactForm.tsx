'use client'
import React, { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  Send,
  Mail,
  Phone,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Sparkles
} from '@/components/ui/Icon'
import { FaWhatsapp } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  })

  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      message: formData.message
    };

    try {
      const emailjsModule = await import('@emailjs/browser');
      const emailjs = emailjsModule.default ?? emailjsModule;
      await emailjs.send(
        "service_7sbguua",
        "template_bkxjqh1",
        templateParams,
        "SOxAymPFbK2Ga3R17"
      );
      alert("Email sent successfully!");
      setFormData({ fullName: "", email: "", message: "" });
    } catch (error: unknown) {
  const err = error as { text?: string; message?: string };
  alert("Failed to send email: " + (err.text || err.message || "Unknown error"));
}

  };

  return (
    <div className="container w-full sm:px-4 py-10 relative" id="contact">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-purple">
        Contact Us
      </h2>
      <p className="text-center text-gray-400 font-bold">Ready to bring your ideas to life</p>
      <div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"
          />

      <div className="container max-w-7xl mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 mx-auto">
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Send className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Send a Message</h2>
                <p className="text-slate-400 text-sm">I&apos;ll get back to you within 24 hours</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter Your Name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter Your Email Address"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell me about your project or just say hello..."
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-medium flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
              >
                <Send className="w-5 h-5" />
                Send Message
                <Sparkles className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-80 space-y-6"
          >
            {/* Contact Info Section */}
            <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6">
  <div className="flex items-center gap-3 mb-6">
    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
      <Mail className="w-4 h-4 text-white" />
    </div>
    <h3 className="text-xl font-bold text-white">Contact Info</h3>
  </div>

  <div className="space-y-4">
    {/* Email */}
    <a 
      href="mailto:ujermohd0@gmail.com"
      className="flex items-center gap-4 p-3 bg-slate-700/30 rounded-xl border border-slate-600/30
                 hover:scale-105 hover:bg-blue-500/20 hover:border-blue-500/40
                 transition-all duration-300 cursor-pointer group"
    >
      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center
                      group-hover:scale-110 transition-transform duration-300">
        <Mail className="w-5 h-5 text-blue-400" />
      </div>
      <div>
        <p className="text-slate-300 text-sm">Email</p>
        <p className="text-white font-medium text-sm">ujermohd0@gmail.com</p>
      </div>
    </a>

    {/* Phone */}
    <a 
      href="tel:+919136767042"
      className="flex items-center gap-4 p-3 bg-slate-700/30 rounded-xl border border-slate-600/30
                 hover:scale-105 hover:bg-green-500/20 hover:border-green-500/40
                 transition-all duration-300 cursor-pointer group"
    >
      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center
                      group-hover:scale-110 transition-transform duration-300">
        <Phone className="w-5 h-5 text-green-400" />
      </div>
      <div>
        <p className="text-slate-300 text-sm">Phone</p>
        <p className="text-white font-medium text-sm">+91 9136767042</p>
      </div>
    </a>

    {/* WhatsApp Message */}
    <a 
      href="https://wa.me/919136767042"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-3 bg-slate-700/30 rounded-xl border border-slate-600/30
                 hover:scale-105 hover:bg-teal-500/20 hover:border-teal-500/40
                 transition-all duration-300 cursor-pointer group"
    >
      <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center
                      group-hover:scale-110 transition-transform duration-300">
        <FaWhatsapp className="w-5 h-5 text-teal-400" />
      </div>
      <div>
        <p className="text-slate-300 text-sm">Whatsapp</p>
        <p className="text-white font-medium text-sm">+91 9136767042</p>
      </div>
    </a>
  </div>
</div>

            {/* Follow Me Section */}
            <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Follow Me</h3>
              </div>

              <div className="flex gap-3">
                {[
                  { icon: Github, color: 'hover:bg-gray-600', url: 'https://github.com/Ujer123' },
                  { icon: Linkedin, color: 'hover:bg-blue-600', url: 'https://www.linkedin.com/in/mohd-ujer/' },
                  // { icon: Twitter, color: 'hover:bg-sky-500', url: 'https://github.com/yourprofile' },
                  { icon: Facebook, color: 'hover:bg-blue-700', url: 'https://www.facebook.com/ujer.shaikh.748385?mibextid=ZbWKwL' },
                  { icon: Instagram, color: 'hover:bg-pink-600', url: 'https://www.instagram.com/ujer_sh?igsh=bnp0b3BjcGRuM3A2' }
                ].map(({ icon: Icon, color, url }, index) => (
                  <motion.a
                    key={index}
                    href={url}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-slate-700/50 border border-slate-600/50 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 ${color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="flex items-center justify-center gap-2 text-slate-400">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-200"></div>
            </div>
            <span className="font-medium">Let&apos;s create something amazing</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactForm