import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AiVideoHub } from './components/AiVideoHub';
import { AiVideoPlayerModal } from './components/AiVideoPlayerModal';
import { AboutSection } from './components/AboutSection';
import { SolutionsSection } from './components/SolutionsSection';
import { BtoMethodologySection } from './components/BtoMethodologySection';
import { BtoNowSection } from './components/BtoNowSection';
import { CasesSection } from './components/CasesSection';
import { LeadershipSection } from './components/LeadershipSection';
import { PartnersSection } from './components/PartnersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ExecutiveModal } from './components/ExecutiveModal';

export default function App() {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState<string>('Diagnóstico Executivo BTO');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState<string>('intro-bto');

  const handleOpenSchedule = (topic?: string) => {
    if (topic) {
      setModalTopic(topic);
    }
    setScheduleModalOpen(true);
  };

  const handleOpenVideo = (videoId: string = 'intro-bto') => {
    setSelectedVideoId(videoId);
    setVideoModalOpen(true);
  };

  const handleExploreBto = () => {
    const el = document.getElementById('metodologia-bto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 flex flex-col font-sans selection:bg-[#fe3000] selection:text-white relative">
      {/* Top Header Navigation */}
      <Navbar 
        onOpenSchedule={() => handleOpenSchedule()} 
        onOpenVideo={() => handleOpenVideo('intro-bto')}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero with Video Trigger */}
        <Hero 
          onOpenSchedule={() => handleOpenSchedule()} 
          onOpenVideo={(id) => handleOpenVideo(id)}
        />

        {/* Section 1.5: AI Video Hub (User Request: Less text, AI video explainers) */}
        <AiVideoHub onOpenVideo={(id) => handleOpenVideo(id)} />

        {/* Section 2: Quem Somos */}
        <AboutSection onExploreBto={handleExploreBto} />

        {/* Section 3: Nossas Soluções */}
        <SolutionsSection 
          onOpenConsultation={(title) => handleOpenSchedule(`Solução: ${title}`)} 
        />

        {/* Section 4: Metodologia BTO */}
        <BtoMethodologySection />

        {/* Section 5: BTO.NOW Platform */}
        <BtoNowSection />

        {/* Section 6: Cases e Resultados */}
        <CasesSection />

        {/* Section 7: Nossa Liderança */}
        <LeadershipSection />

        {/* Section 8: Parceiros e Tecnologia */}
        <PartnersSection />

        {/* Section 9: Contato Oficial */}
        <ContactSection />
      </main>

      {/* Corporate Quiet Footer */}
      <Footer />

      {/* Interactive AI Video Player Modal with SpeechSynthesis & Subtitles */}
      <AiVideoPlayerModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        initialVideoId={selectedVideoId}
        onScheduleCall={() => handleOpenSchedule('Apresentação Executiva sobre ' + selectedVideoId)}
      />

      {/* Executive Consultation & Scheduling Modal */}
      <ExecutiveModal
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
        presetTopic={modalTopic}
      />
    </div>
  );
}
