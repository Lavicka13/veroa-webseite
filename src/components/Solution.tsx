import { motion } from 'framer-motion';
import { Check, ZoomIn } from 'lucide-react';

const FeatureSlide = ({ title, type, children }: { title: string, type: string, children: React.ReactNode }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="group relative bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-[400px] flex flex-col"
  >
    <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
      <h3 className="font-serif text-lg">{title}</h3>
      <span className="font-mono text-[10px] uppercase border border-primary/20 px-2 py-1 rounded-full">{type}</span>
    </div>
    
    <div className="p-8 flex-1 overflow-hidden relative">
      {/* Mockup Content */}
      <div className="font-mono text-[10px] text-gray-300 absolute top-4 right-4">CONFIDENTIAL</div>
      {children}
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
        <div className="bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
          <ZoomIn className="w-4 h-4" />
          <span className="text-xs font-medium uppercase tracking-wide">Preview</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Solution() {
  return (
    <section className="py-24 px-6 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Ein Blick in den <br/>Maschinenraum.</h2>
            <p className="text-secondary max-w-lg">
              Kein Bla-Bla. Wir generieren 40+ Seiten knallharte Strategie, basierend auf deinen Inputs und echten Marktdaten.
            </p>
          </div>
          <div className="flex gap-4 text-sm font-mono text-secondary">
             <span className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> VALIDATED</span>
             <span className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> DATA-DRIVEN</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <FeatureSlide title="Buyer Persona 'Paul'" type="Psychogramm">
            <div className="space-y-3 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                 <div className="space-y-1">
                   <div className="h-2 w-24 bg-primary"></div>
                   <div className="h-1 w-16 bg-gray-300"></div>
                 </div>
               </div>
               <div className="h-px w-full bg-gray-200 my-4"></div>
               <p className="font-serif text-lg mb-2">Pain Points:</p>
               <div className="space-y-2 text-xs text-secondary font-mono">
                 <div className="flex gap-2"><span className="text-red-500">!</span> Hohe Agenturkosten</div>
                 <div className="flex gap-2"><span className="text-red-500">!</span> Intransparente Prozesse</div>
                 <div className="flex gap-2"><span className="text-red-500">!</span> Zeitmangel</div>
               </div>
            </div>
          </FeatureSlide>

          <FeatureSlide title="Outreach Sequenz" type="Execution">
            <div className="space-y-4 opacity-60 group-hover:opacity-100 transition-opacity duration-500 font-mono text-xs leading-relaxed">
               <div className="bg-gray-100 p-3 rounded-lg">
                 <span className="text-gray-400 block mb-1">Subject:</span>
                 <span className="text-primary font-bold">Skalierbarkeit für [Company Name]</span>
               </div>
               <div className="pl-3 border-l-2 border-gray-200">
                 <div className="h-1.5 w-full bg-gray-200 mb-2"></div>
                 <div className="h-1.5 w-3/4 bg-gray-200 mb-2"></div>
                 <div className="h-1.5 w-5/6 bg-gray-200"></div>
               </div>
               <div className="flex gap-2 mt-4">
                  <div className="px-2 py-1 bg-green-100 text-green-700 rounded text-[9px]">Follow-Up 1</div>
                  <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-[9px]">LinkedIn</div>
               </div>
            </div>
          </FeatureSlide>

          <FeatureSlide title="Wettbewerbs-Radar" type="Analytics">
             <div className="flex items-center justify-center h-full opacity-60 group-hover:opacity-100 transition-opacity duration-500">
               {/* Simple Radar Chart Visualization */}
               <div className="relative w-40 h-40">
                 <div className="absolute inset-0 border border-gray-200 rounded-full"></div>
                 <div className="absolute inset-4 border border-gray-200 rounded-full"></div>
                 <div className="absolute inset-8 border border-gray-200 rounded-full"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-0.5 h-full bg-gray-100"></div>
                    <div className="h-0.5 w-full bg-gray-100 absolute"></div>
                 </div>
                 {/* The Shape */}
                 <svg className="absolute inset-0 w-full h-full overflow-visible">
                   <polygon points="100,20 140,80 100,140 40,100 40,40" className="fill-accent/20 stroke-accent stroke-2" />
                 </svg>
               </div>
             </div>
          </FeatureSlide>

        </div>
      </div>
    </section>
  );
}
