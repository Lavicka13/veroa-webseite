import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Freebie from './pages/Freebie';
import Upsell from './pages/Upsell';

function App() {
  return (
    <Router>
      <main className="min-h-screen selection:bg-primary selection:text-white">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/linkedin-plan" element={<Freebie />} />
          <Route path="/special-offer" element={<Upsell />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
