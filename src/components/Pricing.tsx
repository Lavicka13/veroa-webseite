import { Check, Info } from 'lucide-react';

const PricingItem = ({ 
  name, 
  price, 
  agencyPrice,
  saving,
  features, 
  isPro = false 
}: { 
  name: string, 
  price: string, 
  agencyPrice: string,
  saving: string,
  features: string[], 
  isPro?: boolean 
}) => (
  <div className={`relative p-8 ${isPro ? 'bg-primary text-white shadow-2xl scale-105 z-10' : 'bg-white text-primary border border-gray-200'}`}>
    {isPro && (
      <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
        Empfohlen
      </div>
    )}
    
    <div className="mb-8">
      <div className="flex justify-between items-start mb-2">
        <h3 className={`font-mono text-sm uppercase tracking-widest ${isPro ? 'text-gray-400' : 'text-gray-500'}`}>{name}</h3>
        <div className={`text-[10px] px-2 py-1 rounded-full font-bold ${isPro ? 'bg-white/10 text-accent' : 'bg-green-100 text-green-700'}`}>
          Spar {saving}
        </div>
      </div>

      <div className="mb-1">
        <span className={`text-xs font-mono block mb-1 ${isPro ? 'text-gray-400' : 'text-gray-400'}`}>
          Üblicher Agenturpreis: <span className="line-through decoration-red-400 decoration-1">{agencyPrice}</span>
        </span>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-serif">{price}</span>
          <span className={`text-sm ${isPro ? 'text-gray-400' : 'text-gray-500'}`}>/ einmalig</span>
        </div>
      </div>
    </div>

    <ul className="space-y-4 mb-8">
      {features.map((feat, i) => (
        <li key={i} className="flex items-start gap-3 text-sm">
          <Check className={`w-4 h-4 mt-0.5 ${isPro ? 'text-accent' : 'text-primary'}`} />
          <span className={isPro ? 'text-gray-200' : 'text-secondary'}>{feat}</span>
        </li>
      ))}
    </ul>

    <button className={`w-full py-3 text-sm uppercase tracking-widest transition-colors duration-200 ${
      isPro 
        ? 'bg-white text-primary hover:bg-gray-100' 
        : 'bg-primary text-white hover:bg-gray-800'
    }`}>
      Wählen
    </button>
  </div>
);

export default function Pricing() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl mb-4">Agentur-Leistung. Software-Preis.</h2>
          <p className="text-secondary">Sparen Sie sich den teuren Retainer. Zahlen Sie nur für das Ergebnis.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto items-center">
          <PricingItem 
            name="Basic Audit"
            price="299€"
            agencyPrice="~500€"
            saving="200€"
            features={[
              "Live-Marktanalyse (Wert: 500€)",
              "Basis Persona-Analyse",
              "Website Conversion Check",
              "20+ Seiten Report"
            ]}
          />
          
          <PricingItem 
            name="Pro Campaign"
            price="999€"
            agencyPrice="~1.500€"
            saving="500€"
            isPro={true}
            features={[
              "Alles aus Basic",
              "Cold Outreach Kampagne (Wert: 1.500€)",
              "LinkedIn Sequenzen",
              "Lead Magnet Konzept",
              "Content-Redaktionsplan",
              "Priorisierter Support"
            ]}
          />

          <PricingItem 
            name="Enterprise Strategy"
            price="2.499€"
            agencyPrice="~3.500€"
            saving="1.000€"
            features={[
              "Alles aus Pro",
              "Vollständige Vertriebsstrategie (Wert: 3.500€)",
              "Pricing & Behavioral Design",
              "Einwandbehandlungs-Matrix",
              "1:1 Strategie-Call (45 Min)",
              "Individuelle Anpassung"
            ]}
          />
        </div>
      </div>
    </section>
  );
}
