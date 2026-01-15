
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Reader from './components/Reader';
import PrintLayout from './components/PrintLayout';
import { EBOOK_CONTENT } from './content';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>('cover');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="app-container flex bg-slate-950 min-h-screen selection:bg-cyan-500/30">
      {/* 
          HIDDEN PRINT COMPONENT 
          Rendered outside the main UI layout to avoid flexbox clipping during PDF generation.
      */}
      <PrintLayout />

      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 p-4 z-50 flex justify-between items-center no-print">
        <h1 className="serif text-white font-bold">Practical AI</h1>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-slate-400"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-slate-950 overflow-y-auto p-4 pt-20 no-print">
          <Sidebar currentSection={currentSection} onSectionChange={(id) => { setCurrentSection(id); setIsMobileMenuOpen(false); }} />
        </div>
      )}

      {/* Desktop Sidebar */}
      <Sidebar currentSection={currentSection} onSectionChange={setCurrentSection} />

      {/* Main Content */}
      <div className="flex-1 lg:ml-0 overflow-y-auto no-print">
        <div className="lg:hidden h-16 no-print"></div> {/* Spacer for fixed mobile header */}
        <Reader currentSection={currentSection} />
        
        {/* Progress Footer (Mobile) */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-slate-950/80 backdrop-blur-md border-t border-slate-800 p-4 no-print flex justify-between text-xs text-slate-500 uppercase font-black tracking-widest">
           <span>Practical AI Reader</span>
           <span className="text-cyan-500">Day {currentSection.includes('day') ? currentSection.replace('day', '') : '--'}</span>
        </div>
      </div>
    </div>
  );
};

export default App;
