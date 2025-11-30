import { ShieldCheck } from 'lucide-react';

export default function GrandSlam() {
  return (
    <section className="py-20 px-6 bg-[#F5F5F5] border-y border-gray-200">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <ShieldCheck className="w-12 h-12 text-primary mx-auto stroke-1" />
        
        <h2 className="font-serif text-3xl md:text-4xl">
          Das "Grand Slam" Versprechen.
        </h2>
        
        <p className="text-lg text-secondary leading-relaxed">
          Wir sind so überzeugt von unserer Strategie, dass wir das volle Risiko übernehmen.
          Teste den Report und die Skripte für <span className="font-bold text-primary">30 Tage</span>.
          Wenn du keine 5 neuen qualifizierten Leads generierst oder unzufrieden bist,
          erstatten wir dir <span className="underline decoration-accent decoration-2 underline-offset-4">100% deines Geldes</span>.
        </p>

        <div className="pt-4">
           <p className="font-handwriting text-2xl text-gray-400 rotate-[-2deg]">Kein Wenn und Aber.</p>
        </div>
      </div>
    </section>
  );
}
