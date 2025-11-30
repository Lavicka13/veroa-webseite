import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20 px-6">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 border-b border-primary/20 pb-1">
            <span className="font-mono text-xs tracking-wider uppercase">Release v2.4</span>
            <span className="h-3 w-px bg-primary/20"></span>
            <span className="font-mono text-xs tracking-wider uppercase text-secondary">Nov 2025</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] font-medium">
            Strategische Klarheit.<br />
            <span className="italic text-secondary">Auf Abruf.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-secondary max-w-md leading-relaxed font-light">
            High-End Vertriebsberatung zum Preis eines Software-Abos. 
            Valide Daten, echte Strategie, geliefert in 15 Minuten.
          </p>
          
          <div className="pt-4">
            <button className="group bg-btn text-white px-8 py-4 text-sm tracking-widest uppercase hover:scale-[0.98] transition-transform duration-200 flex items-center gap-4">
              Analyse starten
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-4 text-xs text-secondary font-mono">
              * 30 Tage Geld-zurück-Garantie. Kein Risiko.
            </p>
          </div>
        </motion.div>

        {/* Visual Content - The "Physical" Report Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative h-[600px] w-full flex items-center justify-center perspective-1000"
        >
          {/* Background Blob/Shadow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-transparent rounded-full blur-3xl opacity-50 transform translate-x-20 translate-y-20"></div>
          
          {/* The Report Document */}
          <div className="relative w-[400px] h-[560px] bg-white shadow-2xl rotate-[-6deg] hover:rotate-0 transition-transform duration-700 ease-out border border-gray-100 flex flex-col overflow-hidden group">
            
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 mix-blend-multiply pointer-events-none"></div>
            
            {/* Header Line */}
            <div className="h-2 w-full bg-primary"></div>
            
            <div className="p-12 flex flex-col h-full justify-between relative z-10">
              <div>
                <div className="flex justify-between items-start mb-16">
                  <div className="w-12 h-12 border border-primary rounded-full flex items-center justify-center font-serif italic">V</div>
                  <div className="text-right font-mono text-[10px] text-gray-400">
                    CONFIDENTIAL<br/>
                    COPY 01/01
                  </div>
                </div>
                
                <h2 className="font-serif text-4xl mb-4 leading-tight">
                  Vertriebs<br/>Strategie<br/>Report
                </h2>
                <div className="h-px w-20 bg-primary my-6"></div>
                <p className="font-mono text-xs text-secondary uppercase tracking-widest">
                  Erstellt für:<br/>
                  Wachstumsorientierte Gründer
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-end gap-2">
                  <div className="h-32 w-8 bg-gray-100"></div>
                  <div className="h-24 w-8 bg-gray-200"></div>
                  <div className="h-40 w-8 bg-primary"></div>
                  <div className="h-28 w-8 bg-gray-100"></div>
                </div>
                <div className="font-mono text-[10px] text-gray-400 border-t pt-2 flex justify-between">
                  <span>Q1</span>
                  <span>Q2</span>
                  <span>Q3</span>
                  <span>Q4</span>
                </div>
              </div>
            </div>
            
            {/* Side Shadow for 3D effect */}
            <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-l from-black/10 to-transparent"></div>
          </div>

           {/* Second Sheet behind */}
           <div className="absolute w-[400px] h-[560px] bg-gray-50 shadow-xl rotate-[-3deg] -z-10 border border-gray-200 translate-x-4 translate-y-4"></div>

        </motion.div>
      </div>
    </section>
  );
}
