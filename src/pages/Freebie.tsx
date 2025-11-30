import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Download, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Freebie() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit to an API here
    navigate('/special-offer');
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full text-primary text-xs font-mono uppercase tracking-widest">
              <Calendar className="w-4 h-4" />
              <span>XMAS Special 2025</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl leading-[1.1]">
              Nie wieder <br/>
              <span className="italic text-secondary">ideenlos</span> im Dezember.
            </h1>
            
            <p className="text-lg text-secondary leading-relaxed max-w-md">
              Der komplette 24-Tage LinkedIn Content-Plan für B2B-Unternehmer. 
              Kopierfähige Vorlagen, Hooks und Strategien für jeden Tag bis Weihnachten.
            </p>

            <div className="space-y-4">
              {['24 fertige Post-Ideen (Awareness & Sales)', 'Die "Anti-Weihnachtskarten" Strategie', 'High-Converting Hooks für 2025'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="p-6 bg-white border border-gray-200 shadow-lg max-w-md space-y-4 mt-8">
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">Business Email</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@firma.de" 
                  className="w-full bg-gray-50 border border-gray-200 p-3 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <button type="submit" className="w-full bg-primary text-white py-4 text-sm uppercase tracking-widest hover:bg-black flex items-center justify-center gap-2 group">
                <span>Jetzt kostenlos sichern</span>
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
              <p className="text-[10px] text-center text-gray-400">100% Kostenlos. Abmeldung jederzeit möglich.</p>
            </form>
          </motion.div>

          {/* Right: Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl transform translate-x-20 translate-y-20"></div>
            
            <div className="relative bg-white p-12 border border-gray-200 shadow-2xl rotate-[-3deg]">
               <div className="absolute -top-4 -right-4 bg-accent text-white w-20 h-20 rounded-full flex items-center justify-center text-center p-2 font-serif italic text-sm rotate-12 shadow-lg z-10">
                 Gratis<br/>Download
               </div>

               <div className="grid grid-cols-4 gap-2 mb-8">
                 {[...Array(24)].map((_, i) => (
                   <div key={i} className={`aspect-square border ${i === 23 ? 'bg-primary text-white border-primary' : 'border-gray-100 text-gray-300'} flex items-center justify-center font-mono text-sm`}>
                     {i + 1}
                   </div>
                 ))}
               </div>
               
               <div className="text-center space-y-2">
                 <h3 className="font-serif text-2xl">The December Playbook</h3>
                 <div className="h-px w-12 bg-primary mx-auto"></div>
                 <p className="text-xs font-mono text-secondary uppercase">Growth Edition 2025</p>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
