/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChoose } from './components/WhyChoose';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ProjectGallery } from './components/ProjectGallery';
import { About } from './components/About';
import { ServiceArea } from './components/ServiceArea';
import { ContactQuote } from './components/ContactQuote';
import { Footer } from './components/Footer';
import { FloatingContactBar } from './components/FloatingContactBar';

export default function App() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('Garden Transformations');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForQuote(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuoteModal = (service?: string) => {
    if (service) {
      setSelectedServiceForQuote(service);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#101211] text-[#F5F7F4] flex flex-col selection:bg-[#24CB33] selection:text-black">
      {/* Sticky Top Navigation */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Why Choose Nuttall Landscapes */}
        <WhyChoose />

        {/* Interactive Before & After Transformation Slider */}
        <div className="px-4 sm:px-6 lg:px-8 bg-[#101211]">
          <BeforeAfterSlider onOpenQuoteModal={() => handleOpenQuoteModal()} />
        </div>

        {/* Our Projects / Photographic Gallery with Lightbox */}
        <ProjectGallery onOpenQuote={handleOpenQuoteModal} />

        {/* About Nuttall Landscapes */}
        <About onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Service Area / Greater Manchester Coverage */}
        <ServiceArea />

        {/* Contact & Free Quote Section */}
        <ContactQuote initialService={selectedServiceForQuote} />
      </main>

      {/* Sophisticated Dark Footer */}
      <Footer />

      {/* Floating Mobile Tap-to-Call / WhatsApp Bar */}
      <FloatingContactBar />
    </div>
  );
}
