
import React from 'react';
import { EBOOK_CONTENT } from '../content';

interface ReaderProps {
  currentSection: string;
}

const Reader: React.FC<ReaderProps> = ({ currentSection }) => {
  const isCover = currentSection === 'cover';
  const isChapter = currentSection.startsWith('ch');
  const isMission = currentSection.startsWith('day');
  const isIntroduction = currentSection === 'intro';
  const isVault = currentSection === 'vault';

  const renderCover = () => {
    const { cover } = EBOOK_CONTENT;
    return (
      <div className="min-h-[80vh] flex flex-col justify-center items-center text-center p-4 animate-in fade-in duration-1000">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative px-8 py-12 bg-slate-950 rounded-lg border border-slate-800/50">
            <h2 className="text-cyan-500 font-black tracking-[0.4em] text-xs mb-4 uppercase">{cover.subtitle}</h2>
            <h1 className="serif text-6xl md:text-8xl text-white font-bold leading-none mb-8">
              {cover.title.split(' ')[0]} <br />
              <span className="text-cyan-500">{cover.title.split(' ')[1]}</span>
            </h1>
            <div className="w-24 h-1 bg-cyan-600 mx-auto mb-8"></div>
            <p className="text-slate-400 font-bold tracking-[0.2em] text-[10px] mb-12 uppercase">{cover.edition}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {cover.highlights.map((h, i) => (
                <div key={i} className="px-4 py-2 border border-slate-800 rounded text-[10px] font-black tracking-widest text-slate-300 bg-slate-900/50">
                  {h}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 animate-bounce">
          <p className="text-slate-600 text-[10px] uppercase tracking-widest font-black">Scroll or use sidebar to begin</p>
        </div>
      </div>
    );
  };

  const renderIntroduction = () => {
    const { introduction } = EBOOK_CONTENT;
    return (
      <div className="max-w-3xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <header className="space-y-4">
          <h2 className="text-cyan-400 font-bold uppercase tracking-widest text-sm">{introduction.title}</h2>
          <h1 className="serif text-5xl md:text-6xl text-white">{introduction.heading}</h1>
        </header>

        <section className="space-y-6 text-lg text-slate-300 leading-relaxed">
          {introduction.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>

        <section className="bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-6">
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="text-cyan-500">🎯</span> {introduction.promise.title}
          </h3>
          <p className="text-slate-400 italic text-lg">{introduction.promise.text}</p>
          <ul className="space-y-4">
            {introduction.promise.goals.map((goal, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="text-cyan-500 mt-1">✓</span>
                <span className="text-slate-200">{goal}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="bg-amber-500/10 border border-amber-500/20 p-6 rounded-xl flex items-center gap-4">
          <span className="text-3xl">👉</span>
          <p className="text-amber-200 font-medium"><strong>Golden Rule:</strong> {introduction.ruleOfGold}</p>
        </div>
      </div>
    );
  };

  const renderChapter = () => {
    const chapter = EBOOK_CONTENT.chapters.find(c => c.id === currentSection);
    if (!chapter) return null;
    return (
      <div className="max-w-3xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <header className="space-y-2">
          <h2 className="text-cyan-400 font-bold uppercase tracking-widest text-sm">Chapter {chapter.id.replace('ch', '')}</h2>
          <h1 className="serif text-5xl text-white">{chapter.title}</h1>
        </header>
        <div className="text-slate-300 leading-relaxed text-lg">
          {chapter.content}
        </div>
      </div>
    );
  };

  const renderMission = () => {
    const day = parseInt(currentSection.replace('day', ''));
    const mission = EBOOK_CONTENT.missions.find(m => m.id === day);
    if (!mission) return <div className="text-center py-20 text-slate-500">Mission Content Coming Soon (refer to PDF OCR)...</div>;

    return (
      <div className="max-w-3xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
        <header className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">Day {mission.id}</span>
          </div>
          <h1 className="serif text-4xl text-white">{mission.title}</h1>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-cyan-400 font-bold flex items-center gap-2">🎯 Objective</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {mission.objective.map((o, i) => <li key={i}>• {o}</li>)}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-red-400 font-bold flex items-center gap-2">🧠 The Real Problem</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {mission.problem.map((p, i) => <li key={i}>• {p}</li>)}
            </ul>
          </div>
        </div>

        <section className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-800 flex justify-between items-center">
            <h3 className="text-amber-400 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              🧩 Master Prompt (R.C.P.A.)
            </h3>
            <button 
              onClick={() => {
                const text = `Role: ${mission.masterPrompt.role}\nContext: ${mission.masterPrompt.context}\nProblem: ${mission.masterPrompt.problem}\nAction: ${mission.masterPrompt.action.join('\n')}`;
                navigator.clipboard.writeText(text);
                alert('Prompt copied to clipboard!');
              }}
              className="text-[10px] bg-cyan-500 text-slate-950 px-2 py-1 rounded font-bold hover:bg-cyan-400 transition-colors"
            >
              COPY PROMPT
            </button>
          </div>
          <div className="p-8 font-mono text-sm leading-relaxed space-y-4 text-slate-300">
            <p><span className="text-cyan-400">Role:</span> {mission.masterPrompt.role}</p>
            <p><span className="text-cyan-400">Context:</span> {mission.masterPrompt.context}</p>
            <p><span className="text-cyan-400">Problem:</span> {mission.masterPrompt.problem}</p>
            <div>
              <span className="text-cyan-400 block mb-2">Action:</span>
              <ul className="space-y-1">
                {mission.masterPrompt.action.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-white font-bold flex items-center gap-2">✅ Validation Checklist</h3>
          <div className="grid gap-3">
            {mission.checklist.map((item, i) => (
              <label key={i} className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-xl border border-slate-800 hover:border-cyan-500/30 cursor-pointer transition-all">
                <input type="checkbox" className="w-5 h-5 rounded border-slate-700 bg-slate-800 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-slate-900" />
                <span className="text-slate-300">{item}</span>
              </label>
            ))}
          </div>
        </section>

        <div className="bg-cyan-500/5 border border-cyan-500/20 p-6 rounded-xl flex items-center gap-4">
          <span className="text-3xl">🚀</span>
          <div>
            <h4 className="text-cyan-400 font-bold text-sm uppercase tracking-wider mb-1">Optional Upgrade</h4>
            <p className="text-slate-300 text-sm leading-relaxed">{mission.upgrade}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderVault = () => {
    return (
      <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-24">
        <header className="space-y-2">
          <h2 className="text-cyan-400 font-bold uppercase tracking-widest text-sm">Bonus</h2>
          <h1 className="serif text-5xl text-white">Executive Prompt Vault</h1>
          <p className="text-slate-400 text-lg">60 Professional Prompts to Decide, Communicate, and Lead with AI</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {EBOOK_CONTENT.promptVault.map((prompt) => (
            <div key={prompt.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6 hover:border-cyan-500/50 transition-all group flex flex-col shadow-xl">
              <div className="flex justify-between items-start">
                <span className="text-[10px] bg-slate-800 text-slate-400 px-3 py-1 rounded-md font-bold uppercase tracking-wider border border-slate-700">{prompt.category}</span>
                <button 
                  onClick={() => {
                    const text = `Role: ${prompt.role}\nContext: ${prompt.context}\nProblem: ${prompt.problem}\nAction: ${prompt.action}`;
                    navigator.clipboard.writeText(text);
                    alert('Copied to clipboard!');
                  }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] bg-cyan-500 text-slate-950 px-3 py-1 rounded font-bold uppercase"
                >
                  COPY
                </button>
              </div>
              
              <h3 className="text-2xl font-bold text-white border-b border-slate-800 pb-4">{prompt.title}</h3>
              
              <div className="text-sm space-y-4 text-slate-300 font-mono leading-relaxed flex-grow">
                <div>
                  <span className="text-cyan-400/80 font-bold block text-[10px] uppercase mb-1">Role</span>
                  <p>{prompt.role}</p>
                </div>
                <div>
                  <span className="text-cyan-400/80 font-bold block text-[10px] uppercase mb-1">Context</span>
                  <p className="italic text-slate-400">"{prompt.context}"</p>
                </div>
                <div>
                  <span className="text-cyan-400/80 font-bold block text-[10px] uppercase mb-1">Problem</span>
                  <p>{prompt.problem}</p>
                </div>
                <div>
                  <span className="text-cyan-400/80 font-bold block text-[10px] uppercase mb-1">Action Expected</span>
                  <p className="bg-slate-950/50 p-3 rounded border border-slate-800/50 text-slate-200">{prompt.action}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <main className="flex-1 p-8 md:p-16 lg:p-24 min-h-screen overflow-y-auto bg-slate-950">
      {isCover && renderCover()}
      {isIntroduction && renderIntroduction()}
      {isChapter && renderChapter()}
      {isMission && renderMission()}
      {isVault && renderVault()}
    </main>
  );
};

export default Reader;
