import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Check, ArrowRight, X } from 'lucide-react';

export default function Upsell() {
  return (
    <div className="min-h-screen bg-primary text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Noise/Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="max-w-4xl w-full relative z-10">
        
        {/* Progress Bar */}
        <div className="mb-12">
            <div className="flex justify-between text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">
                <span>Schritt 1: Content Plan</span>
                <span>Schritt 2: Website Audit</span>
            </div>
            <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-green-500"></div>
                <div className="h-full w-1/2 bg-accent animate-pulse"></div>
            </div>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white text-primary p-8 md:p-12 shadow-2xl border-t-4 border-accent"
        >
            <div className="flex items-center gap-4 text-accent mb-6 bg-accent/5 p-4 rounded">
                <AlertCircle className="w-6 h-6" />
                <span className="font-bold uppercase tracking-widest text-sm">Warte! Deine PDF ist unterwegs...</span>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h1 className="font-serif text-3xl md:text-4xl mb-6 leading-tight">
                        Du hast jetzt den Content.<br/>
                        <span className="text-secondary">Aber ist deine Website bereit für die Besucher?</span>
                    </h1>
                    
                    <p className="text-secondary mb-6 leading-relaxed">
                        Es bringt nichts, Traffic auf eine Seite zu schicken, die nicht konvertiert. 
                        Die meisten B2B-Websites verbrennen 90% ihres Traffics, weil die Botschaft nicht sitzt.
                    </p>

                    <div className="bg-gray-50 p-6 border border-gray-100 mb-8">
                        <h3 className="font-bold text-sm uppercase tracking-widest mb-4">Das 97€ No-Brainer Offer:</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm">
                                <Check className="w-4 h-4 text-accent mt-1" />
                                <span>Ich (bzw. unser KI-Audit System) analysiere deine Website persönlich.</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm">
                                <Check className="w-4 h-4 text-accent mt-1" />
                                <span>Du erhältst 3 konkrete Fehler, die dich gerade Umsatz kosten.</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm">
                                <Check className="w-4 h-4 text-accent mt-1" />
                                <span>Sofort umsetzbare "Quick Wins".</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col justify-center bg-gray-50 p-8 border border-dashed border-gray-300 text-center">
                    <div className="mb-6">
                        <div className="text-sm text-gray-400 line-through mb-1">Normalpreis: 299€</div>
                        <div className="text-5xl font-serif font-bold text-accent">97€</div>
                        <div className="text-xs font-mono uppercase text-red-500 mt-2 font-bold">Nur auf dieser Seite verfügbar</div>
                    </div>

                    <button className="w-full bg-primary text-white py-4 text-sm uppercase tracking-widest hover:bg-accent hover:scale-[1.02] transition-all duration-200 shadow-xl mb-4">
                        Audit jetzt sichern
                    </button>
                    
                    <button className="text-xs text-gray-400 hover:text-primary underline decoration-gray-300 underline-offset-4">
                        Nein danke, ich möchte Umsatz verlieren.
                    </button>
                </div>
            </div>
        </motion.div>

      </div>
    </div>
  );
}
