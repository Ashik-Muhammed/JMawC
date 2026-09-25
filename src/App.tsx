import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StudioSection from './components/StudioSection';
import AboutSection from './components/AboutSection';
import JournalSection from './components/JournalSection';
import ReachUsSection from './components/ReachUsSection';
import Footer from './components/Footer';
import TreatmentDetailModal from './components/TreatmentDetailModal';
import DoshaQuizModal from './components/DoshaQuizModal';
import ConsultationModal from './components/ConsultationModal';
import { Treatment } from './data/therapies';
import { Calendar, Sparkles } from 'lucide-react';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [isDoshaQuizOpen, setIsDoshaQuizOpen] = useState<boolean>(false);
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [preselectedTherapy, setPreselectedTherapy] = useState<string>('');

  const handleOpenBooking = (therapyName?: string) => {
    if (therapyName) {
      setPreselectedTherapy(therapyName);
    } else {
      setPreselectedTherapy('Pulse Diagnosis & General Vaidya Consultation');
    }
    setIsBookingOpen(true);
  };

  const handleSelectTreatmentModal = (treatment: Treatment) => {
    setSelectedTreatment(treatment);
  };

  const handleExploreTherapies = () => {
    const el = document.getElementById('studio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-white text-black selection:bg-[#0B823D]/10 selection:text-[#0B823D]">
      {/* Navigation bar (z-10 / z-50 for fixed) */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenDoshaQuiz={() => setIsDoshaQuizOpen(true)}
      />

      {/* Main Single-page Layout */}
      <main className="w-full">
        {/* Cinematic Hero Section with looping video background */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreTherapies={handleExploreTherapies}
        />

        {/* Studio Section (Classical Therapies) */}
        <StudioSection
          onSelectTreatment={handleSelectTreatmentModal}
          onBookTreatment={(treatmentName) => handleOpenBooking(treatmentName)}
        />

        {/* About Section (Lineage & Sanctuary) */}
        <AboutSection
          onOpenBooking={() => handleOpenBooking()}
          onOpenDoshaQuiz={() => setIsDoshaQuizOpen(true)}
        />

        {/* Journal Section (Ayurvedic Wisdom) */}
        <JournalSection />

        {/* Reach Us Section (Sanctuary Coordinates, FAQ & Inline Booking) */}
        <ReachUsSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <TreatmentDetailModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
        onBookNow={(name) => handleOpenBooking(name)}
      />

      <DoshaQuizModal
        isOpen={isDoshaQuizOpen}
        onClose={() => setIsDoshaQuizOpen(false)}
        onSelectTreatment={(therapy) => handleOpenBooking(therapy)}
      />

      <ConsultationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedTreatment={preselectedTherapy}
      />

      {/* Floating Action Button for Quick Booking on Mobile/Tablet */}
      <div className="fixed bottom-6 right-6 z-40 sm:hidden">
        <button
          onClick={() => handleOpenBooking()}
          className="flex items-center gap-2 rounded-full px-5 py-3 bg-black text-white text-xs font-semibold shadow-2xl hover:scale-105 active:scale-95 transition-transform"
        >
          <Calendar size={16} />
          <span>Book Session</span>
        </button>
      </div>
    </div>
  );
};

export default App;
