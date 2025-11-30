import { Star } from 'lucide-react';

const Testimonial = ({ quote, author, role, delay }: { quote: string, author: string, role: string, delay?: string }) => (
  <div className={`space-y-6 ${delay}`}>
    <div className="flex gap-1 text-primary">
      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
    </div>
    <p className="font-serif text-xl md:text-2xl leading-relaxed">
      "{quote}"
    </p>
    <div>
      <div className="font-bold font-mono text-sm uppercase tracking-wider">{author}</div>
      <div className="text-secondary text-sm">{role}</div>
    </div>
  </div>
);

export default function SocialProof() {
  return (
    <section className="py-24 px-6 border-b border-gray-100">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="font-serif text-3xl mb-4">Genutzt von Gründern, die keine Zeit zu verlieren haben.</h2>
        <div className="flex justify-center gap-8 md:gap-16 opacity-40 grayscale mt-8">
           {/* Placeholder Logos using text for now */}
           <span className="font-bold text-xl font-serif">Technologie.de</span>
           <span className="font-bold text-xl font-serif">STARTUP__</span>
           <span className="font-bold text-xl font-serif">GründerSzene</span>
           <span className="font-bold text-xl font-serif">FinanceNow</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <Testimonial 
          quote="Ich dachte ehrlich gesagt, für 99€ kriege ich ein besseres PDF. Stattdessen bekam ich eine Waffe. Wir haben die Outreach-Strategie 1:1 übernommen und in Woche 2 den ersten Deal geschlossen."
          author="Markus S."
          role="CEO, TechStart GmbH"
        />
        <Testimonial 
          quote="Endlich mal kein 'Mindset-Coaching', sondern handfeste Strategie. Die Persona-Analyse hat uns gezeigt, dass wir monatelang an der falschen Zielgruppe vorbei verkauft haben."
          author="Sarah L."
          role="Founder, EcoSolutions"
        />
      </div>
    </section>
  );
}
