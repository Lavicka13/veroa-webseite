export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-serif italic font-bold text-lg">Veroa</div>
        
        <div className="flex gap-8 text-sm text-secondary font-mono uppercase tracking-wider">
          <a href="#" className="hover:text-primary transition-colors">Impressum</a>
          <a href="#" className="hover:text-primary transition-colors">Datenschutz</a>
          <a href="#" className="hover:text-primary transition-colors">AGB</a>
        </div>

        <div className="text-xs text-gray-400 font-mono">
          © 2025 All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
