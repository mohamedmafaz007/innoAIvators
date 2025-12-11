import React, { useState } from 'react';

import {
  MailIcon, PhoneIcon, MapPinIcon, SendIcon
} from 'lucide-react';
import { motion } from 'framer-motion';
import Galaxy from '../components/Galaxy';
import { BorderBeam } from '../components/BorderBeam';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formState);
  };

  const contactInfo = [
    {
      icon: MailIcon,
      title: 'Email Us',
      value: 'hello@innoaivators.com',
      link: 'mailto:hello@innoaivators.com',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10'
    },
    {
      icon: PhoneIcon,
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10'
    },
    {
      icon: MapPinIcon,
      title: 'Visit Us',
      value: '123 Innovation St, Tech City',
      link: '#',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10'
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#050510] text-gray-200 font-sans selection:bg-purple-500/30 overflow-x-hidden">

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Galaxy
            starSpeed={0.2} density={1.0} glowIntensity={0.5}
            hueShift={260} // Deep Purple

          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050510] z-0" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-300 text-xs font-bold tracking-widest uppercase backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_#a855f7]" />
              24/7 Global Support
            </div>

            <h1 className="text-6xl md:text-8xl font-bold leading-tight text-white mb-6">
              Let's Build the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-glow">Impossible.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- FORM SECTION --- */}
      <section className="pb-32 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h2 className="text-3xl font-bold text-white">Get in touch</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Whether you have a groundbreaking idea or need to modernize your legacy infrastructure, our engineers are ready to deploy.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    whileHover={{ scale: 1.02 }}
                    className={`flex items-center gap-6 p-6 rounded-2xl border border-white/5 glass-panel hover:bg-white/5 transition-all group`}
                  >
                    <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">{item.title}</div>
                      <div className="text-xl text-white font-bold group-hover:text-purple-300 transition-colors">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative p-8 md:p-10 rounded-[2rem] bg-[#0A0A12] border border-white/10 shadow-2xl">
                <BorderBeam duration={10} size={100} colorFrom="#3b82f6" colorTo="#a855f7" />

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Subject</label>
                    <select
                      name="subject"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium appearance-none"
                    >
                      <option>General Inquiry</option>
                      <option>Start a Project</option>
                      <option>Partnership</option>
                      <option>Careers</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Message</label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-purple-500/25 transform hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    <SendIcon className="w-5 h-5" />
                    Send Transmission
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


    </div>
  );
}
