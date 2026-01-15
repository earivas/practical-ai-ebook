
import React from 'react';
import { EBOOK_CONTENT } from '../content';

interface SidebarProps {
  currentSection: string;
  onSectionChange: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentSection, onSectionChange }) => {
  return (
    <aside className="w-80 bg-slate-950 border-r border-slate-800 h-screen sticky top-0 flex flex-col no-print overflow-y-auto hidden lg:flex">
      <div className="p-8 border-b border-slate-800">
        <h1 className="serif text-2xl text-white font-bold leading-tight">Practical AI</h1>
        <p className="text-[10px] text-cyan-500 font-bold uppercase tracking-[0.2em] mt-2">Executive Manual</p>
      </div>

      <nav className="flex-1 p-6 space-y-8">
        <div>
          <h3 className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-4">Book Start</h3>
          <ul className="space-y-1">
            <NavItem 
              id="cover" 
              label="Book Cover" 
              active={currentSection === 'cover'} 
              onClick={onSectionChange} 
            />
            <NavItem 
              id="intro" 
              label="Introduction" 
              active={currentSection === 'intro'} 
              onClick={onSectionChange} 
            />
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-4">Foundations</h3>
          <ul className="space-y-1">
            {EBOOK_CONTENT.chapters.map(ch => (
              <NavItem 
                key={ch.id}
                id={ch.id} 
                label={ch.title} 
                active={currentSection === ch.id} 
                onClick={onSectionChange} 
              />
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-4">30-Day Challenge</h3>
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 30 }, (_, i) => {
              const day = i + 1;
              const id = `day${day}`;
              return (
                <button
                  key={id}
                  onClick={() => onSectionChange(id)}
                  className={`aspect-square rounded text-xs font-bold transition-all ${
                    currentSection === id 
                      ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.3)]' 
                      : 'bg-slate-900 text-slate-500 hover:bg-slate-800'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-4">Resources</h3>
          <ul className="space-y-1">
            <NavItem 
              id="vault" 
              label="Executive Prompt Vault" 
              active={currentSection === 'vault'} 
              onClick={onSectionChange} 
            />
            <li className="px-4 py-2 text-slate-600 text-sm italic">Templates (PDF Only)</li>
          </ul>
        </div>
      </nav>

      <div className="p-8 border-t border-slate-800">
        <button 
          onClick={() => window.print()}
          className="w-full bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 rounded-lg py-2 text-sm font-medium transition-colors flex items-center justify-center gap-2"
        >
          <span>Export to PDF</span>
        </button>
      </div>
    </aside>
  );
};

const NavItem: React.FC<{ id: string; label: string; active: boolean; onClick: (id: string) => void }> = ({ id, label, active, onClick }) => (
  <li>
    <button
      onClick={() => onClick(id)}
      className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
        active 
          ? 'bg-cyan-500/10 text-cyan-400 font-semibold' 
          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
      }`}
    >
      {label}
    </button>
  </li>
);

export default Sidebar;
