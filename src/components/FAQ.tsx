import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className="font-serif text-lg group-hover:text-accent transition-colors">{question}</span>
        <span className="text-gray-400 group-hover:text-accent transition-colors">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-secondary leading-relaxed font-light">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl mb-12">Häufig gestellte Fragen</h2>
        
        <div className="space-y-2">
          <FAQItem 
            question="Ist das nur ein ChatGPT Prompt?"
            answer="Nein. Wir nutzen spezialisierte AI-Agenten, die Zugriff auf Live-Marktdaten haben. Zusätzlich basieren unsere Templates auf bewährten Vertriebspsychologie-Modellen (Limbic® Types), die weit über das hinausgehen, was ein Standard-LLM leisten kann."
          />
          <FAQItem 
            question="Wie schnell erhalte ich meinen Report?"
            answer="Nachdem du den Fragebogen ausgefüllt hast (ca. 5 Minuten), generiert unser System deine Strategie in etwa 10-15 Minuten. Du erhältst sie direkt als PDF per E-Mail."
          />
          <FAQItem 
            question="Was, wenn die Strategie nicht auf meine Branche passt?"
            answer="Unser System ist auf B2B-Dienstleistungen spezialisiert. Solltest du dennoch das Gefühl haben, dass die Strategie nicht passt, greift unsere 30-Tage-Geld-zurück-Garantie."
          />
          <FAQItem 
            question="Brauche ich teure Software für die Umsetzung?"
            answer="Nein. Unsere Strategien sind tool-agnostisch. Du kannst sie mit einem kostenlosen CRM, Excel oder deinem bestehenden Setup umsetzen. Wir geben Empfehlungen, aber keine Verpflichtungen."
          />
        </div>
      </div>
    </section>
  );
}
