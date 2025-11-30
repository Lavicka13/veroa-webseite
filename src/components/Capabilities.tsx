import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Database, Target, Megaphone } from 'lucide-react';

// Data Structure from LEISTUNGSKATALOG.md
const categories = [
  {
    id: 'analyse',
    title: 'Analyse & Insights',
    icon: Database,
    description: 'Wir durchleuchten Markt und Wettbewerb in Echtzeit.',
    items: [
      {
        title: 'Live-Marktanalyse',
        value: '1.500€',
        description: 'Echtzeit-Recherche Ihres Marktes und faktenbasiertes Briefing.',
        deliverables: ['Aktuelle Marktzahlen & Trends 2025', 'Konkurrenz-Überblick (Preise/Namen)', 'Echte Kundenstimmen & Beschwerden', 'Risiko-Analyse & Marktlücken']
      },
      {
        title: 'Wettbewerbs-Radar',
        value: '2.000€',
        description: 'Tiefenanalyse der Konkurrenz und Argumentationshilfen.',
        deliverables: ['Profile der Top-3 Wettbewerber', 'Preis- & Feature-Vergleich', 'Positionierungs-Matrix', 'Schwachstellen-Analyse']
      },
      {
        title: 'Zielgruppen-Psychogramm',
        value: '2.000€',
        description: 'Detaillierte Profile Ihrer idealen Kunden (Limbic® Types).',
        deliverables: ['3 detaillierte Buyer Personas', 'Psychologische Motive & Ängste', 'Entscheidungsprozesse (Buying Center)', 'Mediennutzungsverhalten']
      },
      {
        title: 'Pain Point Deep-Dive',
        value: '1.500€',
        description: 'Identifikation der echten, teuren Probleme Ihrer Kunden.',
        deliverables: ['5-8 Kernprobleme (Priorisiert)', 'Emotionale Auswirkungen', 'Kosten des "Nicht-Handelns"', 'Lösungs-Matching']
      }
    ]
  },
  {
    id: 'strategie',
    title: 'Strategie & Positionierung',
    icon: Target,
    description: 'Das Fundament für skalierbares Wachstum.',
    items: [
      {
        title: 'Value Proposition Design',
        value: '2.500€',
        description: 'Unwiderstehliche Wertversprechen, die verkaufen.',
        deliverables: ['3 maßgeschneiderte Wertversprechen', 'Headlines & Sub-Headlines', 'ROI-Argumentation', 'USP-Differenzierung']
      },
      {
        title: 'Einwandbehandlungs-Matrix',
        value: '3.500€',
        description: 'Skripte für jedes "Nein" des Kunden.',
        deliverables: ['Skripte für "Zu teuer", "Keine Zeit", etc.', 'Psychologische Hintergründe', 'Gesprächsleitfäden', 'Präventiv-Maßnahmen']
      },
      {
        title: 'Pricing-Strategie',
        value: '3.000€',
        description: 'Psychologisch optimierte Preismodelle.',
        deliverables: ['3-Stufen-Preismodell (Good-Better-Best)', 'Preispsychologische Verankerung', 'Upselling-Pfade', 'Rabatt-Leitfaden']
      },
      {
        title: 'Social Proof Strategie',
        value: '1.500€',
        description: 'Strategischer Aufbau von Vertrauen.',
        deliverables: ['Testimonial-Fragebogen', 'Platzierungs-Strategie', 'Trust-Elemente & Siegel', 'Case Study Framework']
      }
    ]
  },
  {
    id: 'content',
    title: 'Kampagnen & Content',
    icon: Megaphone,
    description: 'Versandfertige Nachrichten, die Leads generieren.',
    items: [
      {
        title: 'Cold Outreach System',
        value: '3.000€',
        description: 'Komplette Sequenzen für E-Mail und LinkedIn.',
        deliverables: ['4-teilige E-Mail-Sequenz', 'LinkedIn Vernetzungs-Nachrichten', 'Follow-Up Strategie', 'Betreffzeilen mit hoher Open-Rate']
      },
      {
        title: 'Lead Magnet Konzept',
        value: '1.500€',
        description: 'Ein Asset, für das Kunden ihre E-Mail geben.',
        deliverables: ['Konzept für Checkliste/Guide', 'Titel & Gliederung', 'Landing Page Copy', 'Sofort-Nutzen-Definition']
      },
      {
        title: 'Content-Redaktionsplan',
        value: '3.500€',
        description: 'Was Sie wann posten müssen.',
        deliverables: ['Themenplan für Awareness & Trust', 'LinkedIn Post Vorlagen', 'Newsletter-Sequenzen', 'Format-Empfehlungen']
      }
    ]
  }
];

export default function Capabilities() {
  const [activeTab, setActiveTab] = useState('analyse');

  return (
    <section className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Eine komplette Vertriebsabteilung.<br/>
            <span className="italic text-secondary">In einem Report.</span>
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
            Unser System generiert nicht nur "Text". Es erstellt vollständige strategische Assets, 
            für die Sie bei Agenturen fünfstellige Summen zahlen würden.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-3 px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 border ${
                  activeTab === cat.id 
                    ? 'bg-primary text-white border-primary shadow-lg scale-105' 
                    : 'bg-white text-secondary border-gray-200 hover:border-primary'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className="min-h-[600px]">
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {categories.find(c => c.id === activeTab)?.items.map((item, idx) => (
                <div key={idx} className="group border border-gray-200 bg-gray-50/30 p-8 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-2xl">{item.title}</h3>
                    <div className="text-right">
                      <span className="block text-[10px] uppercase tracking-widest text-gray-400">Agentur-Wert</span>
                      <span className="font-mono text-sm text-secondary line-through decoration-red-400/50 decoration-2">{item.value}</span>
                    </div>
                  </div>
                  
                  <p className="text-secondary mb-8 font-light min-h-[3rem]">{item.description}</p>
                  
                  <div className="space-y-3">
                    <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2">Enthaltene Deliverables:</div>
                    {item.deliverables.map((del, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-secondary group-hover:text-primary transition-colors">
                        <Check className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
           <div className="inline-block bg-gray-100 px-6 py-3 rounded-full">
              <span className="text-secondary text-sm">Gesamtwert der generierten Assets: </span>
              <span className="font-serif text-lg font-bold text-primary ml-2">&gt; 25.000€</span>
           </div>
        </div>

      </div>
    </section>
  );
}