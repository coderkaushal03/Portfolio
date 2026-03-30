import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, CheckCircle, XCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Functional backend using FormSubmit.co
      const response = await fetch("https://formsubmit.co/ajax/coderkaushal03@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: "✨ New Message from Portfolio!",
          Name: formState.name,
          Email: formState.email,
          Message: formState.message
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', message: '' }); // Clear form fields
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 min-h-screen relative z-10 bg-[#050505]">
      {/* Container */}
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          <span className="text-neon-blue mr-4">04.</span> Get In Touch
        </motion.h2>

        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight mt-[-2rem]">
              Let's build something <br/> <span className="text-neon-purple drop-shadow-[0_0_15px_rgba(176,38,255,0.5)]">amazing</span> together.
            </h3>
            <p className="text-gray-400 font-light mb-10 leading-relaxed text-lg">
              I'm always open to discussing product design work or partnership opportunities. Feel free to drop me a line if you have a great project or just want to say hi!
            </p>

            <div className="flex flex-col gap-6 mb-12">
              <a href="mailto:coderkaushal03@gmail.com" className="flex items-center gap-6 text-gray-400 hover:text-white transition-colors group">
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-neon-blue group-hover:bg-neon-blue/10 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all">
                  <Mail size={22} className="group-hover:text-neon-blue transition-colors" />
                </div>
                <div className="flex flex-col text-sm">
                  <span className="text-gray-500 uppercase tracking-widest text-xs mb-1 font-bold">Direct Mail</span>
                  <span className="font-mono tracking-wider text-white">coderkaushal03@gmail.com</span>
                </div>
              </a>
            </div>
            
            {/* Social Icons Strip */}
            <div className="flex items-center gap-5">
              <span className="text-xs uppercase tracking-widest text-gray-600 font-bold mr-2">Follow Me</span>
              <a href="https://github.com/coderkaushal03" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 hover:bg-neon-purple/20 text-gray-400 hover:text-neon-purple transition-colors border border-transparent hover:border-neon-purple/50">
                 <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/kaushal-kumar-sharma-266316247" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 hover:bg-neon-blue/20 text-gray-400 hover:text-neon-blue transition-colors border border-transparent hover:border-neon-blue/50">
                 <Linkedin size={22} />
              </a>
            </div>

          </motion.div>

          {/* Advanced Functional Modern Form */}
          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 bg-[#0a0a0a] p-8 lg:p-12 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden"
          >
            {/* Top gradient accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-neon-purple" />
            
            <h4 className="text-2xl font-bold text-white mb-2">Send a Message</h4>

            {/* Floating Label Input - Name */}
            <div className="relative group mt-4">
              <input 
                type="text" 
                placeholder=" "
                required
                value={formState.name}
                className="peer w-full bg-transparent border-b-2 border-white/10 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:border-neon-blue transition-colors"
                onChange={e => setFormState({...formState, name: e.target.value})}
              />
              <label className="absolute left-0 top-3 text-gray-500 text-sm pointer-events-none transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-focus:text-neon-blue peer-valid:-top-4 peer-valid:text-xs">
                Your Full Name
              </label>
            </div>

            {/* Floating Label Input - Email */}
            <div className="relative group mt-2">
              <input 
                type="email" 
                placeholder=" "
                required
                value={formState.email}
                className="peer w-full bg-transparent border-b-2 border-white/10 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:border-neon-blue transition-colors"
                onChange={e => setFormState({...formState, email: e.target.value})}
              />
              <label className="absolute left-0 top-3 text-gray-500 text-sm pointer-events-none transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-xs peer-focus:text-neon-blue peer-valid:-top-4 peer-valid:text-xs">
                Email Address
              </label>
            </div>

            {/* Floating Label Textarea - Message */}
            <div className="relative group flex-grow mt-2">
              <textarea 
                placeholder=" "
                required
                rows={4}
                value={formState.message}
                className="peer w-full bg-transparent border-b-2 border-white/10 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:border-neon-blue transition-colors resize-none mt-2"
                onChange={e => setFormState({...formState, message: e.target.value})}
              />
              <label className="absolute left-0 top-5 text-gray-500 text-sm pointer-events-none transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:text-neon-blue peer-valid:-top-2 peer-valid:text-xs">
                What's on your mind?
              </label>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 mt-6 font-bold tracking-[0.2em] uppercase rounded-xl flex items-center justify-center gap-3 transition-all duration-300 ${
                isSubmitting 
                ? 'bg-white/5 text-gray-500 cursor-not-allowed border border-white/10' 
                : 'bg-neon-blue/10 text-neon-blue border border-neon-blue/40 hover:bg-neon-blue/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] cursor-pointer'
              }`}
            >
              {isSubmitting ? (
                 <><Loader2 size={18} className="animate-spin" /> Transmitting...</>
              ) : (
                 <><Send size={18} /> Send Application</>
              )}
            </button>

            {/* Dynamic Status Notifications */}
            {submitStatus === 'success' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 mt-2 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm flex items-start gap-3">
                 <CheckCircle size={20} className="shrink-0 mt-0.5" />
                 <div>
                   <p className="font-bold mb-1">Success!</p>
                   <p className="text-xs">Your message hit my inbox. I'll get back to you soon.</p>
                 </div>
              </motion.div>
            )}
            {submitStatus === 'error' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 mt-2 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500 text-sm flex items-start gap-3">
                 <XCircle size={20} className="shrink-0 mt-0.5" />
                 <div>
                   <p className="font-bold mb-1">Transmission Error</p>
                   <p className="text-xs">Could not send the message. Make sure you activated your inbox or please use direct mail.</p>
                 </div>
              </motion.div>
            )}

          </motion.form>

        </div>
      </div>
      
      {/* Centered Modern Footer */}
      <div className="absolute bottom-0 left-0 w-full text-center py-8 border-t border-white/5 bg-[#020202]/80 backdrop-blur-md">
        <p className="text-gray-500 text-xs font-mono tracking-[0.2em] uppercase flex items-center justify-center gap-2">
          <span>&lt;/&gt;</span> Designed & Built by <span className="text-neon-blue font-bold tracking-widest text-neon">Kaushal Kumar Sharma</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
