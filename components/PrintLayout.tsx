
import React from 'react';
import { EBOOK_CONTENT } from '../content';

const PrintLayout: React.FC = () => {
  return (
    <div className="print-only print-container text-slate-900 bg-white">
      {/* 1. Cover Page */}
      <div className="min-h-screen flex flex-col justify-center items-center text-center p-20 page-break">
        <h1 className="serif text-8xl font-bold text-slate-900 mb-6">{EBOOK_CONTENT.title}</h1>
        <div className="w-48 h-1.5 bg-cyan-600 mb-12"></div>
        <h2 className="text-4xl font-light text-slate-600 max-w-3xl mb-4 leading-tight">{EBOOK_CONTENT.subtitle}</h2>
        <p className="text-2xl text-cyan-700 font-bold uppercase tracking-[0.3em] mb-20">{EBOOK_CONTENT.tagline}</p>
        <div className="mt-auto pt-20 border-t border-slate-100 w-full text-slate-400 font-bold tracking-widest text-sm">
          EXECUTIVE DIGITAL EDITION • AI STRATEGY MANUAL
        </div>
      </div>

      {/* 2. Introduction */}
      <div className="page-break py-16 space-y-10">
        <div className="space-y-4">
          <h2 className="text-cyan-600 font-bold uppercase tracking-widest text-xs">{EBOOK_CONTENT.introduction.title}</h2>
          <h1 className="serif text-5xl text-slate-900 leading-tight">{EBOOK_CONTENT.introduction.heading}</h1>
        </div>
        <div className="space-y-6 text-xl text-slate-700 leading-relaxed border-l-2 border-slate-100 pl-10">
          {EBOOK_CONTENT.introduction.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="bg-slate-50 border border-slate-200 p-10 rounded-2xl space-y-6 avoid-break shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">🎯 {EBOOK_CONTENT.introduction.promise.title}</h3>
          <p className="italic text-slate-600 text-lg">{EBOOK_CONTENT.introduction.promise.text}</p>
          <ul className="grid grid-cols-1 gap-4 text-slate-700">
            {EBOOK_CONTENT.introduction.promise.goals.map((g, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-cyan-600 font-bold">✓</span> 
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 3. Chapters (Foundations) */}
      {EBOOK_CONTENT.chapters.map((chapter) => (
        <div key={chapter.id} className="page-break py-16 space-y-10">
          <div className="space-y-2">
            <h2 className="text-cyan-600 font-bold uppercase tracking-widest text-xs">Chapter {chapter.id.replace('ch', '')}</h2>
            <h1 className="serif text-5xl text-slate-900">{chapter.title}</h1>
          </div>
          <div className="text-slate-800 leading-relaxed text-xl prose max-w-none">
            {chapter.content}
          </div>
        </div>
      ))}

      {/* 4. The 30-Day Challenge (Full Curriculum) */}
      <div className="page-break pt-20">
        <div className="text-center mb-16 space-y-4">
          <h1 className="serif text-6xl text-slate-900">The 30-Day Challenge</h1>
          <p className="text-cyan-600 font-bold uppercase tracking-[0.2em] text-sm">Step-by-step Implementation</p>
        </div>

        {EBOOK_CONTENT.missions.map((mission) => (
          <div key={mission.id} className="py-12 border-b border-slate-100 avoid-break space-y-8">
            <div className="flex items-center gap-4">
              <span className="bg-cyan-100 text-cyan-800 px-4 py-1 rounded-full text-sm font-black uppercase">DAY {mission.id}</span>
              <h2 className="text-3xl font-bold text-slate-900">{mission.title}</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-4">
                <h4 className="font-bold text-cyan-700 uppercase tracking-wider text-xs border-b border-cyan-100 pb-2">Objective</h4>
                <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                  {mission.objective.map((o, i) => <li key={i}>{o}</li>)}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-red-700 uppercase tracking-wider text-xs border-b border-red-100 pb-2">Cognitive Load Factor</h4>
                <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                  {mission.problem.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 font-mono text-sm shadow-sm">
              <h4 className="font-black mb-6 text-slate-400 text-xs tracking-[0.2em]">R.C.P.A. MASTER PROMPT</h4>
              <div className="space-y-4 text-slate-800">
                <p><span className="text-cyan-700 font-bold">[ROLE]:</span> {mission.masterPrompt.role}</p>
                <p><span className="text-cyan-700 font-bold">[CONTEXT]:</span> {mission.masterPrompt.context}</p>
                <p><span className="text-cyan-700 font-bold">[PROBLEM]:</span> {mission.masterPrompt.problem}</p>
                <div className="flex gap-2">
                  <span className="text-cyan-700 font-bold shrink-0">[ACTION]:</span>
                  <ul className="space-y-1">
                    {mission.masterPrompt.action.map((a, i) => <li key={i}>{a}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 5. Executive Prompt Vault */}
      <div className="page-break pt-20">
        <div className="text-center mb-16 space-y-4">
          <h1 className="serif text-6xl text-slate-900">Executive Prompt Vault</h1>
          <p className="text-cyan-600 font-bold uppercase tracking-[0.2em] text-sm">60 High-Performance Templates</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {EBOOK_CONTENT.promptVault.map((prompt) => (
            <div key={prompt.id} className="avoid-break p-10 border border-slate-200 rounded-2xl bg-slate-50/50 space-y-6">
              <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                <h3 className="text-2xl font-bold text-slate-900">{prompt.title}</h3>
                <span className="text-[10px] bg-slate-200 px-3 py-1 rounded text-slate-700 font-black uppercase tracking-widest">{prompt.category}</span>
              </div>
              <div className="grid gap-4 text-sm font-mono text-slate-700 leading-relaxed">
                <p><strong className="text-cyan-700 uppercase text-[10px]">Role:</strong> {prompt.role}</p>
                <p><strong className="text-cyan-700 uppercase text-[10px]">Context:</strong> <span className="italic">"{prompt.context}"</span></p>
                <p><strong className="text-cyan-700 uppercase text-[10px]">Problem:</strong> {prompt.problem}</p>
                <div className="bg-white p-6 border border-slate-100 rounded-lg shadow-inner">
                  <strong className="text-cyan-700 uppercase text-[10px] block mb-2">Action:</strong>
                  {prompt.action}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 6. Legal / Final */}
      <div className="mt-32 text-center text-slate-300 text-[10px] italic py-10 border-t border-slate-100">
        Practical AI © 2024 • All Rights Reserved • Strictly for Private Executive Use
      </div>
    </div>
  );
};

export default PrintLayout;
