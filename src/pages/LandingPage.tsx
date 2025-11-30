import React from 'react';
import Hero from '../components/Hero';
import Pain from '../components/Pain';
import Solution from '../components/Solution';
import Capabilities from '../components/Capabilities';
import SocialProof from '../components/SocialProof';
import Pricing from '../components/Pricing';
import GrandSlam from '../components/GrandSlam';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Pain />
      <Solution />
      <Capabilities />
      <SocialProof />
      <Pricing />
      <GrandSlam />
      <FAQ />
      <Footer />
    </>
  );
}
