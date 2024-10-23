import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <Services />
      <Testimonials />
      <FAQ />
    </main>
  );
}