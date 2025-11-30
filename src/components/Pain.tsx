import { motion } from 'framer-motion';

const PainPoint = ({ title, subtitle, children, delay }: { title: string, subtitle: string, children: React.ReactNode, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className="flex flex-col gap-4 border-t border-primary/10 pt-8"
  >
    <span className="font-mono text-xs text-accent uppercase tracking-wider">{subtitle}</span>
    <h3 className="font-serif text-2xl">{title}</h3>
    <p className="text-secondary leading-relaxed font-light text-sm md:text-base">
      {children}
    </p>
  </motion.div>
);

export default function Pain() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 max-w-2xl"
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Der alte Weg ist <span className="line-through decoration-accent decoration-2 text-gray-400">kaputt</span> teuer.</h2>
          <p className="text-xl text-secondary font-light">
            Die meisten Unternehmen entscheiden sich zwischen teurer Beratung und planlosem Aktionismus. Beides kostet Geld.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          <PainPoint 
            delay={0.1}
            subtitle="Das Problem mit Agenturen"
            title="Der 5.000€ Retainer"
          >
            Sie verkaufen dir Junior-Berater zu Senior-Preisen. Du zahlst für PowerPoints, Meetings und 'Onboarding-Phasen', während dein Umsatz stagniert. Agenturen skalieren nicht – sie blähen sich auf.
          </PainPoint>

          <PainPoint 
            delay={0.2}
            subtitle="Das Problem mit DIY"
            title="Marketing-Roulette"
          >
            Ein bisschen LinkedIn hier, ein paar Cold Calls da. Ohne System ist Vertrieb reines Glücksspiel. Du verbrennst Zeit mit Taktiken, die vor 5 Jahren funktioniert haben, und hoffst auf den einen großen Deal.
          </PainPoint>

          <PainPoint 
            delay={0.3}
            subtitle="Das Problem mit KI"
            title="Prompt Engineering"
          >
            ChatGPT ist großartig, aber es ist kein Stratege. Es halluziniert, wiederholt Binsenweisheiten und kennt deine Marktdaten nicht. Ohne Struktur und echte Marktdaten bleibt es bei generischen Ratschlägen.
          </PainPoint>
        </div>
      </div>
    </section>
  );
}
