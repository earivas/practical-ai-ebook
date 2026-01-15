
import React from 'react';

export const EBOOK_CONTENT = {
  title: "Practical AI",
  subtitle: "30 Days to Reclaim Time, Mental Clarity, and Professional Control",
  tagline: "The executive system of micro-actions to use AI without technicalities or loss of focus",
  
  cover: {
    title: "PRACTICAL AI",
    subtitle: "FOR EXECUTIVES",
    edition: "2024 DIGITAL EDITION",
    author: "MASTER STRATEGY MANUAL",
    highlights: ["30-DAY CHALLENGE", "60 PROMPT VAULT", "R.C.P.A. METHOD"]
  },

  introduction: {
    title: "Introduction",
    heading: "You don't need more tools. You need more clarity.",
    body: [
      "If you are a professional, leader, consultant, or decision-maker, this probably happens to you:",
      "You work a lot. You make decisions every day. You feel that the day is not enough... even if you 'do everything right'.",
      "The promise of artificial intelligence seemed clear: save time, simplify work, and improve results.",
      "The reality, for many, has been different: too many tools, generic answers, more noise instead of clarity, and curiosity without real impact.",
      "This book exists to correct that."
    ],
    promise: {
      title: "The Real Promise of this eBook",
      text: "Practical AI is not a book about technology. It is a mental operating system to use AI as an executive assistant, not as a toy.",
      goals: [
        "Save between 5 and 10 hours per week of repetitive mental work.",
        "Make decisions with greater clarity and less fatigue.",
        "Communicate better (emails, meetings, proposals, difficult messages).",
        "Analyze complex information without getting stuck.",
        "Build your personal library of professional prompts."
      ]
    },
    ruleOfGold: "Do not move forward by more than one day without having executed the corresponding mission."
  },

  chapters: [
    {
      id: "ch1",
      title: "The Silent Trap of Modern Work",
      content: (
        <div className="space-y-6">
          <p className="text-xl text-slate-400">We have never had so much information. We have never been so saturated.</p>
          <p>The problem is no longer "not knowing what to do." The problem is thinking too much to decide too little.</p>
          
          <div className="bg-slate-900 border-l-4 border-cyan-500 p-6 rounded-r-lg">
            <h3 className="text-cyan-400 font-bold mb-2 text-lg">⚠️ The Real Enemy: Cognitive Load</h3>
            <p>Most professionals are not physically tired. They are <strong>mentally exhausted</strong>.</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-300">
              <li>• Emails</li>
              <li>• Meetings</li>
              <li>• Messages</li>
              <li>• Reports</li>
              <li>• Constant small decisions</li>
            </ul>
          </div>
          
          <p className="text-slate-400 italic">This invisible wear and tear is called accumulated cognitive load.</p>
          <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-lg">
            <p><strong>The uncomfortable truth:</strong> 70% of your mental energy goes into tasks that could be delegated or better structured.</p>
          </div>
        </div>
      )
    },
    {
      id: "ch2",
      title: "What AI is (and what it is not)",
      content: (
        <div className="space-y-6">
          <p>Before using AI with power, it must be understood with realism.</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/5 border border-red-500/20 p-6 rounded-xl">
              <h3 className="text-red-400 font-bold mb-4 flex items-center gap-2">❌ What AI is NOT</h3>
              <ul className="space-y-3 text-sm">
                <li>• It is not an oracle.</li>
                <li>• It does not have human judgment.</li>
                <li>• It does not understand your business unless you explain it.</li>
                <li>• It does not replace experience or judgment.</li>
              </ul>
            </div>
            <div className="bg-green-500/5 border border-green-500/20 p-6 rounded-xl">
              <h3 className="text-green-400 font-bold mb-4 flex items-center gap-2">✅ What AI IS</h3>
              <ul className="space-y-3 text-sm">
                <li>• An advanced language processor.</li>
                <li>• A thought accelerator.</li>
                <li>• An information structurer.</li>
                <li>• A scenario simulator.</li>
              </ul>
            </div>
          </div>
          
          <blockquote className="border-l-4 border-cyan-500 pl-6 py-2 italic text-slate-300">
            "Think of it as a junior analyst who is extremely fast, but needs clear instructions."
          </blockquote>
          
          <div className="p-6 bg-slate-900 rounded-xl">
            <h3 className="text-cyan-400 font-bold mb-2">The Key Principle: Input Quality = Output Quality</h3>
            <p className="text-sm">The AI doesn't fail. The <strong>prompt</strong> fails. This book is about how to think and ask.</p>
          </div>
        </div>
      )
    },
    {
      id: "ch3",
      title: "The R.C.P.A. Method",
      content: (
        <div className="space-y-6">
          <p className="text-lg">The system that transforms mediocre responses into useful results. This is the heart of the book.</p>
          
          <div className="space-y-4">
            <div className="p-4 bg-slate-800 rounded-lg">
              <h4 className="text-amber-400 font-bold text-xl mb-1">R — Role</h4>
              <p className="text-sm text-slate-300">Define who the AI should be. "Act as a senior financial consultant..." or "Act as an HR manager with 15 years of experience..."</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h4 className="text-amber-400 font-bold text-xl mb-1">C — Context</h4>
              <p className="text-sm text-slate-300">Explain the real situation. Includes: Company type, industry, objective, and restrictions.</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h4 className="text-amber-400 font-bold text-xl mb-1">P — Problem</h4>
              <p className="text-sm text-slate-300">Define what you need to solve, not just what you want to know. "I need to decide between three options with different risks."</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h4 className="text-amber-400 font-bold text-xl mb-1">A — Action Expected</h4>
              <p className="text-sm text-slate-300">Indicate the form the response should take. Examples: Prioritized list, comparative table, step-by-step plan.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "ch4",
      title: "How to use this program in only 30 mins/day",
      content: (
        <div className="space-y-8">
          <p>One of the most common mistakes when learning something new is wanting to do everything at once.</p>
          
          <div className="relative p-8 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-bold">30</div>
             <h3 className="text-cyan-400 font-bold text-2xl mb-6">The 30-Minute Rule</h3>
             <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 font-bold">5</div>
                  <div>
                    <p className="font-bold">Minutes — Mental Preparation</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 font-bold">10</div>
                  <div>
                    <p className="font-bold">Minutes — Prompt Execution</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 font-bold">10</div>
                  <div>
                    <p className="font-bold">Minutes — Review and Adjustment</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 font-bold">5</div>
                  <div>
                    <p className="font-bold">Minutes — Immediate Application</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      )
    }
  ],

  missions: [
    {
      id: 1,
      title: "Convert Meetings into Clear Decisions",
      objective: ["Transform a long, confusing, or repetitive meeting into clear decisions and actions."],
      problem: ["Meetings fail because people talk much but decide little.", "Nobody documents correctly."],
      masterPrompt: {
        role: "Act as a senior executive assistant specialized in meeting management.",
        context: "I just finished a business meeting. Below are disorganized notes.",
        problem: "I need to convert this into clear and actionable decisions.",
        action: ["1. Summarize key points.", "2. Identify decisions.", "3. List tasks with responsible party.", "4. Point out pending issues."]
      },
      appliedExample: ["Use with: OneNote notes, Zoom transcriptions, WhatsApp messages."],
      checklist: ["Are there explicit decisions?", "Does each task have a responsible party?", "Is it ready to send?"],
      upgrade: "Ask for a version ready for an email follow-up."
    },
    {
      id: 2,
      title: "Write Clear and Professional Emails in Minutes",
      objective: ["Draft clear, direct emails with an appropriate professional tone."],
      problem: ["Emails are often too long or lack a clear call to action."],
      masterPrompt: {
        role: "Act as a senior executive expert in corporate communication.",
        context: "I need to send a professional email.",
        problem: "The message must be clear, brief, and action-oriented.",
        action: ["Draft an email with clear subject, direct message, and specific call to action."]
      },
      appliedExample: ["Requests, follow-ups, corrections."],
      checklist: ["Does the reader know what to do?", "Read in under 60 seconds?", "No misunderstandings?"],
      upgrade: "Request 3 versions: Formal, Neutral, Close."
    },
    {
      id: 3,
      title: "Prepare for an Important Meeting",
      objective: ["Arrive at a meeting with clear ideas and strategic questions."],
      problem: ["Most people enter meetings reacting or improvising."],
      masterPrompt: {
        role: "Act as a senior strategic consultant.",
        context: "I have an important meeting about [topic].",
        problem: "I need to arrive prepared with solid arguments.",
        action: ["1. Summarize context.", "2. List scenarios.", "3. Suggest strategic questions.", "4. Indicate risks."]
      },
      appliedExample: ["Client meetings, Negotiations, Committee reviews."],
      checklist: ["Feel secure?", "Have questions?", "Anticipate objections?"],
      upgrade: "Request a one-page sheet for the meeting."
    },
    {
      id: 4,
      title: "Extract the Essence of a Long Document",
      objective: ["Synthesize 20-50 pages into 5 minutes of high-value reading."],
      problem: ["Too many reports, too little time to find the 'so what'."],
      masterPrompt: {
        role: "Act as a senior analyst specialized in information synthesis.",
        context: "I have a long document [attach text].",
        problem: "I cannot miss the critical parts.",
        action: ["Extract executive summary, 5 key data points, 3 conclusions, 3 actions."]
      },
      appliedExample: ["Sector reports, Technical manuals, Long articles."],
      checklist: ["Explain in 2 mins?", "Know next steps?", "Objective tone?"],
      upgrade: "Ask 'What is NOT in the document that should be there?'"
    },
    {
      id: 5,
      title: "Design a High-Impact Project Plan",
      objective: ["Transform a loose idea into a structured plan with phases and milestones."],
      problem: ["Projects stall because the first step is unclear."],
      masterPrompt: {
        role: "Act as an expert Project Manager (PMP).",
        context: "I want to launch [project].",
        problem: "I need structure to start without overwhelm.",
        action: ["1. Define objective.", "2. Break into phases.", "3. List tasks.", "4. Risks.", "5. Timeline."]
      },
      appliedExample: ["Service launch, Internal reorganization."],
      checklist: ["First step actionable?", "Measurable milestones?", "Timeline makes sense?"],
      upgrade: "Request a 'Pre-mortem' to imagine failure reasons."
    },
    {
      id: 6,
      title: "Master the Art of Professional Feedback",
      objective: ["Deliver feedback that builds, saving time on emotional management."],
      problem: ["Difficult conversations are avoided or executed poorly."],
      masterPrompt: {
        role: "Act as a senior executive coach.",
        context: "I need to give feedback to [person] about [topic].",
        problem: "I want to be firm but constructive.",
        action: ["1. Use SBI model.", "2. Avoid defensiveness.", "3. Propose questions.", "4. Draft follow-up."]
      },
      appliedExample: ["Performance reviews, Correcting mistakes."],
      checklist: ["Specific behavior?", "Clear impact?", "Path forward?"],
      upgrade: "Simulate the other person's reaction."
    },
    {
      id: 7,
      title: "Optimize Your Personal LinkedIn Presence",
      objective: ["Communicate professional value without spending hours writing."],
      problem: ["Great ideas, poor formatting for social impact."],
      masterPrompt: {
        role: "Act as a Personal Branding expert.",
        context: "I want to share an insight about [topic].",
        problem: "Needs to look professional and generate authority.",
        action: ["1. Powerful Hook.", "2. Bullet body.", "3. CTA.", "4. Hashtags."]
      },
      appliedExample: ["Sharing lessons, Commenting on news."],
      checklist: ["Magnetic first line?", "Easy mobile reading?", "Invites reflection?"],
      upgrade: "Ask AI to find the 'hidden story' in your raw notes."
    },
    {
      id: 8,
      title: "Delegate with Surgical Precision",
      objective: ["Explain tasks so well they don't come back with errors."],
      problem: ["Instructions are vague, leading to micromanagement."],
      masterPrompt: {
        role: "Act as an expert Chief of Staff.",
        context: "I need to delegate [task].",
        problem: "Ensure the result is exactly what I expect.",
        action: ["1. Definition of Done.", "2. Resources.", "3. Deadline.", "4. The 'Why'.", "5. Pitfalls."]
      },
      appliedExample: ["Report drafting, Research, Event coordination."],
      checklist: ["Output clear?", "Resources provided?", "Deadline set?"],
      upgrade: "Write the actual Slack/WhatsApp message."
    },
    {
      id: 9,
      title: "Synthesize Market Trends and Competitors",
      objective: ["Stay updated without spending the whole day reading news."],
      problem: ["Information overload masks strategic patterns."],
      masterPrompt: {
        role: "Act as a senior Market Intelligence analyst.",
        context: "I am interested in trends in [industry].",
        problem: "I need high-level summary for strategy.",
        action: ["1. 3 trends.", "2. Competitor moves.", "3. Opportunity/Threat.", "4. Questions for the team."]
      },
      appliedExample: ["Quarterly planning, Product development."],
      checklist: ["Trends specific?", "The 'so what' clear?", "Trigger new ideas?"],
      upgrade: "Paste news headlines for Pattern Analysis."
    },
    {
      id: 10,
      title: "Create a Personal Learning Roadmap",
      objective: ["Learn a new skill in record time focusing only on what matters."],
      problem: ["Lost in generic courses and infinite videos."],
      masterPrompt: {
        role: "Act as an L&D specialist.",
        context: "I want to learn [topic].",
        problem: "I have limited time, need to be practical.",
        action: ["1. Pareto 80/20 concepts.", "2. 4-week plan.", "3. Resources.", "4. Practice project."]
      },
      appliedExample: ["Blockchain, Public speaking, Financial modeling."],
      checklist: ["Realistic for time?", "Practice component?", "High quality resources?"],
      upgrade: "Explain complex concepts via analogies."
    },
    {
      id: 11,
      title: "Audit Your Time and Cognitive Load",
      objective: ["Identify where your mental energy is being wasted."],
      problem: ["We feel busy but aren't always productive."],
      masterPrompt: {
        role: "Act as a productivity consultant.",
        context: "I will provide my activity list.",
        problem: "I need to identify time-thieves.",
        action: ["1. Classify activities.", "2. Identify 3 delegation tasks.", "3. 2 automation tasks.", "4. Deep Work schedule."]
      },
      appliedExample: ["Calendar analysis, Recurring tasks."],
      checklist: ["Time-thieves clear?", "Delegation list ready?", "Schedule realistic?"],
      upgrade: "Ask for a 'Stop Doing' list."
    },
    {
      id: 12,
      title: "Design a High-Conversion Client Proposal",
      objective: ["Structure a proposal that speaks to client needs."],
      problem: ["Proposals focus too much on features, not value."],
      masterPrompt: {
        role: "Act as a Sales strategist.",
        context: "Preparing a proposal for [client].",
        problem: "Needs to be persuasive and professional.",
        action: ["1. Current vs Desired state.", "2. 3 pillars.", "3. ROI Pricing.", "4. Executive Summary.", "5. Social proof."]
      },
      appliedExample: ["Consulting bids, Project pitches."],
      checklist: ["Value clear?", "Easy to scan?", "Clear next step?"],
      upgrade: "Ask for an 'Objection Handler' list."
    },
    {
      id: 13,
      title: "Mediate Professional Conflicts with Calm",
      objective: ["Resolve frictions using logic and fairness."],
      problem: ["Emotions cloud judgment during conflicts."],
      masterPrompt: {
        role: "Act as a Conflict Resolution expert.",
        context: "Conflict between [A] and [B] about [Topic].",
        problem: "Maintain the relationship while solving.",
        action: ["1. Underlying interests.", "2. Win-Win scenarios.", "3. Mediation script.", "4. Follow-up."]
      },
      appliedExample: ["Deadlines missed, personality clashes."],
      checklist: ["Tone neutral?", "Interests addressed?", "Compromise reached?"],
      upgrade: "Identify potential 'unspoken' issues."
    },
    {
      id: 14,
      title: "Interpreting Data Without Being a Data Scientist",
      objective: ["Turn raw numbers into strategic narratives."],
      problem: ["Data exists but business impact is unclear."],
      masterPrompt: {
        role: "Act as a senior BI director.",
        context: "I have this dataset [paste data].",
        problem: "Present this as a story to a committee.",
        action: ["1. Anomalies.", "2. Business impact.", "3. Strategic decisions.", "4. Headline conclusions."]
      },
      appliedExample: ["Sales reports, Expense audits."],
      checklist: ["'So What' obvious?", "Conclusions supported?", "Simple for non-experts?"],
      upgrade: "Ask for a 'What If' analysis."
    },
    {
      id: 15,
      title: "Prepare for High-Stakes Negotiations",
      objective: ["Enter negotiations with BATNA and targets ready."],
      problem: ["Negotiating under pressure leads to giving too much away."],
      masterPrompt: {
        role: "Act as a world-class negotiator.",
        context: "Negotiating [topic] with [party].",
        problem: "Maximize value without burning bridges.",
        action: ["1. Must-haves vs Nice-to-haves.", "2. Anchor points.", "3. Calibrated questions.", "4. Walk-away point."]
      },
      appliedExample: ["Salary negotiation, Contract renewals."],
      checklist: ["BATNA clear?", "Open questions ready?", "Goal defined?"],
      upgrade: "Roleplay the counter-party."
    },
    {
      id: 16,
      title: "Define Your Professional Brand Voice",
      objective: ["Ensure all writing sounds consistent and authentic."],
      problem: ["Communication feels disjointed across platforms."],
      masterPrompt: {
        role: "Act as a Brand Strategist.",
        context: "Here are writing samples [paste].",
        problem: "Define a consistent Brand Voice.",
        action: ["1. 5 key traits.", "2. Tone by situation.", "3. Words to use/avoid.", "4. Style Guide summary."]
      },
      appliedExample: ["Personal style guide for all prompts."],
      checklist: ["Feels authentic?", "Consistent?", "Easy to follow?"],
      upgrade: "Rewrite a generic email using the guide."
    },
    {
      id: 17,
      title: "Executive Crisis Communication Plan",
      objective: ["Communicate with authority when things go wrong."],
      problem: ["Over-explaining or hiding destroys trust."],
      masterPrompt: {
        role: "Act as a PR expert.",
        context: "Problem: [describe crisis].",
        problem: "Inform stakeholders without panic.",
        action: ["1. Internal announcement.", "2. External statement.", "3. Q&A.", "4. Resolution steps."]
      },
      appliedExample: ["Outages, security breaches, delays."],
      checklist: ["Empathetic but firm?", "Solution path clear?", "Minimize speculation?"],
      upgrade: "Recovery strategy post-crisis."
    },
    {
      id: 18,
      title: "Surgical Meeting Agenda Design",
      objective: ["Ensure every meeting is productive and outcome-driven."],
      problem: ["Meetings without agendas are waste of time."],
      masterPrompt: {
        role: "Act as a COO.",
        context: "Meeting about [topic] with [participants].",
        problem: "Finish in 30 mins with total clarity.",
        action: ["1. Desired Outcome.", "2. 3 critical points.", "3. Pre-work.", "4. Invite text.", "5. Decision-maker."]
      },
      appliedExample: ["Weekly syncs, brainstorming."],
      checklist: ["Outcome binary?", "Pre-work clear?", "Right people invited?"],
      upgrade: "Add 'Meeting Rules' snippet."
    },
    {
      id: 19,
      title: "Competitive Benchmarking & Positioning",
      objective: ["Understand where you stand and how to differentiate."],
      problem: ["Competing on small features instead of a unique angle."],
      masterPrompt: {
        role: "Act as a Strategy consultant.",
        context: "Business is [desc] vs [competitors].",
        problem: "Need differentiation strategy.",
        action: ["1. 2x2 matrix.", "2. Unmet need.", "3. UVPs.", "4. Blue Ocean angle."]
      },
      appliedExample: ["Service launch, career positioning."],
      checklist: ["Differentiation real?", "Matrix logical?", "UVP clear?"],
      upgrade: "Competitor Counter-Strike plan."
    },
    {
      id: 20,
      title: "Strategic Goal Setting (OKRs & KPIs)",
      objective: ["Transform vague ambitions into measurable results."],
      problem: ["Goals are too vague to drive action."],
      masterPrompt: {
        role: "Act as a Performance expert.",
        context: "Achieve [ambition] for [period].",
        problem: "Structured framework needed.",
        action: ["1. Objective.", "2. 3 measurable KRs.", "3. Lead indicators.", "4. Review routine.", "5. Midpoint milestone."]
      },
      appliedExample: ["Annual planning, growth targets."],
      checklist: ["KRs measurable?", "Objective inspiring?", "Review cadence clear?"],
      upgrade: "Critical Path analysis."
    },
    {
      id: 21,
      title: "Automate Content Repurposing",
      objective: ["Turn one high-quality asset into a multi-channel distribution strategy."],
      problem: ["Creating content for different platforms takes too long."],
      masterPrompt: {
        role: "Act as a senior Content Strategist and Ghostwriter.",
        context: "I have this core content: [paste content].",
        problem: "I need to repurpose this for LinkedIn, a newsletter, and internal Slack.",
        action: ["1. 3 LinkedIn posts.", "2. Newsletter summary.", "3. 5 Twitter-style insights.", "4. Team TL;DR."]
      },
      appliedExample: ["Voice note to week of content."],
      checklist: ["Core message preserved?", "Tone adapted?", "Ready to publish?"],
      upgrade: "Ask for a 7-day content calendar."
    },
    {
      id: 22,
      title: "Designing Your Custom AI Agents",
      objective: ["Move from generic prompts to 'Custom GPTs' with specific business rules."],
      problem: ["Repeating context every time wastes energy and tokens."],
      masterPrompt: {
        role: "Act as an AI Solutions Architect.",
        context: "Permanent assistant for [function, e.g., 'Proposal Writing'].",
        problem: "Define 'System Instructions' once and for all.",
        action: ["1. Persona/Tone.", "2. Knowledge Base priorities.", "3. Hard Rules.", "4. Input/Output Format."]
      },
      appliedExample: ["Sales Tone Checker, Policy Bot."],
      checklist: ["Persona distinct?", "Rules unambiguous?", "Saves time?"],
      upgrade: "Ask AI to 'stress test' these instructions."
    },
    {
      id: 23,
      title: "Intellectual Sparring & Critical Thinking",
      objective: ["Challenge your own bias before making a move."],
      problem: ["Echo chambers lead to strategic blind spots."],
      masterPrompt: {
        role: "Act as a Socratic philosopher.",
        context: "I am convinced that [your plan].",
        problem: "Find flaws in my logic and present the opposite view.",
        action: ["1. 3 weakest points.", "2. Steel-man of opposition.", "3. Uncomfortable questions.", "4. Ignored risks."]
      },
      appliedExample: ["Testing a new business strategy."],
      checklist: ["Feel challenged?", "Assumptions exposed?", "Plan more robust?"],
      upgrade: "Second-order effects analysis."
    },
    {
      id: 24,
      title: "High-Performance Hiring & Talent Evaluation",
      objective: ["Analyze candidates beyond keywords for real culture fit."],
      problem: ["CVs are optimized for robots; interviews are biased."],
      masterPrompt: {
        role: "Act as a Talent Director with psych background.",
        context: "JD [paste] vs Candidate CV [paste].",
        problem: "Is this a top 1% fit?",
        action: ["1. Red flags.", "2. Behavioral questions.", "3. 90-day challenges.", "4. Skill gap score."]
      },
      appliedExample: ["Screening leadership applicants."],
      checklist: ["Questions deep?", "Bias minimized?", "Fit analysis logical?"],
      upgrade: "Draft an onboarding roadmap."
    },
    {
      id: 25,
      title: "Masterful Presentation & Storytelling",
      objective: ["Turn dry slides into a narrative that moves people."],
      problem: ["Data without story is forgotten."],
      masterPrompt: {
        role: "Act as a Storytelling coach.",
        context: "Presenting [topic] to [audience] to achieve [goal].",
        problem: "Structure that builds tension.",
        action: ["1. Hero vs Villain.", "2. 10-slide storyboard.", "3. Hook and Call to Adventure.", "4. Visual metaphors."]
      },
      appliedExample: ["Board meetings, town-halls."],
      checklist: ["Narrative arc clear?", "'Why' emphasized?", "Emotional resonance?"],
      upgrade: "Draft a 2-minute elevator pitch."
    },
    {
      id: 26,
      title: "Building an Executive Summary System",
      objective: ["Establish a routine for reviewing all inputs."],
      problem: ["Drowning in messages; intelligence remains scattered."],
      masterPrompt: {
        role: "Act as an Intelligence Officer.",
        context: "Inputs from today [paste].",
        problem: "Consolidated brief for tomorrow.",
        action: ["1. 3 Critical Events.", "2. 5 To-Dos.", "3. 2 Opportunities.", "4. Sentiment summary."]
      },
      appliedExample: ["End-of-day mental cache clearance."],
      checklist: ["Brief concise?", "Actions prioritized?", "Feel 'caught up'?"],
      upgrade: "Prioritize tomorrow's calendar."
    },
    {
      id: 27,
      title: "Strategic Foresight & Scenario Planning",
      objective: ["Prepare for multiple futures, not just the likely one."],
      problem: ["Linear thinking fails in disruptive markets."],
      masterPrompt: {
        role: "Act as a Futurist strategist.",
        context: "Industry is [ind], State is [state].",
        problem: "Plan for 3 possible scenarios over 2 years.",
        action: ["1. Golden Age vs Stagnation vs Disruption.", "2. 3 No-Regret moves.", "3. Early warning signs."]
      },
      appliedExample: ["Annual strategy retreats."],
      checklist: ["Scenarios distinct?", "No-Regret moves identified?", "Logic sound?"],
      upgrade: "Define 'Wild Cards' (unlikely but high impact)."
    },
    {
      id: 28,
      title: "Optimizing Operational Workflows",
      objective: ["Remove friction from daily business processes."],
      problem: ["Doing things 'as they were' even if slow."],
      masterPrompt: {
        role: "Act as a Lean Six Sigma specialist.",
        context: "Process [desc]: [steps].",
        problem: "Identify bottlenecks and remove waste.",
        action: ["1. Map flow.", "2. Value-Add vs Waste.", "3. Future state (-30% time).", "4. Automation suggestion."]
      },
      appliedExample: ["Invoicing, support, review flows."],
      checklist: ["Waste identified?", "Flow simpler?", "Actionable today?"],
      upgrade: "3-step implementation roadmap."
    },
    {
      id: 29,
      title: "Ethical AI & Risk Management",
      objective: ["Establish a policy to use AI safely."],
      problem: ["Shadow AI leads to data leaks and bias."],
      masterPrompt: {
        role: "Act as a Chief Ethics Officer.",
        context: "Using AI for [tasks].",
        problem: "5 'Golden Rules' for safety.",
        action: ["1. Privacy rules.", "2. Transparency policy.", "3. Human-in-the-loop.", "4. Red lines."]
      },
      appliedExample: ["Internal team guidelines."],
      checklist: ["Clear for non-techies?", "Protects company?", "Fair?"],
      upgrade: "AI Usage Audit template."
    },
    {
      id: 30,
      title: "The Forever System: Your AI Tech Stack",
      objective: ["Consolidate everything into a sustainable system."],
      problem: ["Initial excitement fades; habits keep results permanent."],
      masterPrompt: {
        role: "Act as a Systems Designer.",
        context: "Completed challenge. Big wins: [wins].",
        problem: "Maintenance routine to keep improving.",
        action: ["1. 15-min Daily Sync.", "2. 60-min Weekly Review.", "3. Library structure.", "4. Next skills."]
      },
      appliedExample: ["Finalizing the operating system."],
      checklist: ["Sustainable?", "Habits clear?", "In control?"],
      upgrade: "Curated future reading list."
    }
  ],

  promptVault: [
    // Category A - Strategy
    { id: 1, category: "A — Decisions & Strategy", title: "Complex Decision Matrix", role: "Act as a senior strategic advisor.", context: "I need to decide about [situation].", problem: "Multiple variables with different weights.", action: "1. Define 5 success criteria. 2. Weigh them. 3. Score options. 4. Recommend the highest value path." },
    { id: 2, category: "A — Decisions & Strategy", title: "Pre-Mortem Analysis", role: "Act as a risk manager.", context: "Launching [project].", problem: "Hidden failure points.", action: "1. Imagine it failed. 2. List 5 reasons why. 3. 2 mitigation steps for each." },
    { id: 3, category: "A — Decisions & Strategy", title: "First Principles Thinking", role: "Act as an innovation lead.", context: "Problem: [prob]. Standard sol: [sol].", problem: "Conventional paths are inefficient.", action: "1. Strip to core truths. 2. Reconstruct without analogies. 3. Radical alternative." },
    { id: 4, category: "A — Decisions & Strategy", title: "SWOT 2.0 (Dynamic)", role: "Act as a senior analyst.", context: "Audit [business].", problem: "Static lists don't trigger action.", action: "1. SWOT elements. 2. Strategic pairs (Strength + Opportunity). 3. 3-step plan." },
    { id: 5, category: "A — Decisions & Strategy", title: "Resource Allocation", role: "Act as a COO.", context: "Budget [X], 5 priorities [list].", problem: "Doing too much poorly.", action: "1. Rank by 60-day impact. 2. 70/20/10 split. 3. Pause 1 project." },
    { id: 6, category: "A — Decisions & Strategy", title: "Blue Ocean Filter", role: "Act as a growth expert.", context: "Market is [ind]. Competition is [list].", problem: "Competing on price, not value.", action: "1. Industry factors. 2. Eliminate/Reduce/Raise/Create. 3. UVP." },
    { id: 7, category: "A — Decisions & Strategy", title: "Scalability Check", role: "Act as a scale consultant.", context: "Process [X] works for 10 users.", problem: "Will it break at 1000?", action: "1. High friction points. 2. Resource cost per unit. 3. Structural changes for scale." },
    { id: 8, category: "A — Decisions & Strategy", title: "Second-Order Effects", role: "Act as a systems thinker.", context: "Considering [decision].", problem: "Immediate results look good; long-term is unclear.", action: "1. Primary effect. 2. Secondary consequences (Chain reaction). 3. Hidden risks." },
    { id: 9, category: "A — Decisions & Strategy", title: "Competitor Strategy Reverse-Engineer", role: "Act as market intel.", context: "Comp launched [X], hired [Y].", problem: "What is their hidden 2-year play?", action: "1. Connect dots. 2. Next 2 moves prediction. 3. Counter-strategy." },
    { id: 10, category: "A — Decisions & Strategy", title: "Stakeholder Matrix", role: "Act as corporate affairs.", context: "Change: [change].", problem: "Resistance from specific groups.", action: "1. Power vs Interest map. 2. Primary concerns. 3. Comm strategy per group." },

    // Category B - Analysis
    { id: 11, category: "B — Analysis & Data", title: "KPI Narrative", role: "Act as a BI director.", context: "Month data: [paste].", problem: "Stakeholders hate spreadsheets.", action: "1. The 'Story' of the month. 2. The 'One Big Why'. 3. 3 Executive headlines." },
    { id: 12, category: "B — Analysis & Data", title: "Churn Root Cause", role: "Act as CS lead.", context: "Churn up by X%.", problem: "Losing customers without knowing why.", action: "1. Analyze feedback. 2. Missing 'Aha!' moment. 3. Intervention plan." },
    { id: 13, category: "B — Analysis & Data", title: "ROI of Intangibles", role: "Act as finance lead.", context: "Proposed [Remote Policy].", problem: "Soft benefits are hard to value.", action: "1. 5 intangible metrics. 2. Proxy values. 3. TVI calculation." },
    { id: 14, category: "B — Analysis & Data", title: "Sales Pipeline Audit", role: "Act as RevOps manager.", context: "Low conversion Discovery -> Proposal.", problem: "Finding the leak.", action: "1. Stage drop-offs. 2. Friction analysis. 3. Fix suggestions." },
    { id: 15, category: "B — Analysis & Data", title: "Pattern Analysis (News)", role: "Act as research lead.", context: "10 industry articles [paste].", problem: "Too much noise to see trends.", action: "1. Recurring themes. 2. Disruptors. 3. Strategic recommendation." },
    { id: 16, category: "B — Analysis & Data", title: "Pareto Productivity Audit", role: "Act as efficiency expert.", context: "Tasks: [list].", problem: "Busy but not productive.", action: "1. 20% tasks for 80% results. 2. Waste tasks. 3. Stop-doing list." },
    { id: 17, category: "B — Analysis & Data", title: "Team Sentiment Audit", role: "Act as org psych.", context: "Anon feedback [paste].", problem: "Morale issues are hidden.", action: "1. Emotional themes. 2. Unspoken fears. 3. Action plan for leadership." },
    { id: 18, category: "B — Analysis & Data", title: "Tech Stack ROI", role: "Act as CTO.", context: "Paying for [X, Y, Z] SaaS.", problem: "Software bloat.", action: "1. Adoption vs Cost. 2. Overlaps. 3. Consolidate/Cancel list." },
    { id: 19, category: "B — Analysis & Data", title: "Market Maturity Scan", role: "Act as market analyst.", context: "Sector: [sector].", problem: "Entering a saturated market?", action: "1. Maturity indicators. 2. S-curve position. 3. Entry strategy." },
    { id: 20, category: "B — Analysis & Data", title: "Risk Dependency Map", role: "Act as Risk director.", context: "Risks in [Supply, Tech, Talent].", problem: "If one falls, do they all?", action: "1. Correlation map. 2. Primary domino. 3. Chain reaction stopper." },

    // Category C - Comm
    { id: 21, category: "C — Communication & Sales", title: "High-Stakes Investor Update", role: "Act as CEO advisor.", context: "Hit 80% targets, burn is high.", problem: "Need confidence while transparent.", action: "1. Bad News First. 2. The 'Why'. 3. Next 90 days. 4. Tone of command." },
    { id: 22, category: "C — Communication & Sales", title: "Price Increase Letter", role: "Act as AM lead.", context: "+15% increase.", problem: "Don't want to lose loyal clients.", action: "1. Relationship first. 2. Value-added explanation. 3. Grace period offer." },
    { id: 23, category: "C — Communication & Sales", title: "Radical Transparency Crisis", role: "Act as PR expert.", context: "4hr outage.", problem: "Damaged trust.", action: "1. Own mistake. 2. What happened. 3. Preventative steps. 4. Make-good offer." },
    { id: 24, category: "C — Communication & Sales", title: "Email Executive Presence", role: "Act as coach.", context: "Draft: [paste].", problem: "Sound weak or too long.", action: "1. Remove 'feel/think/maybe'. 2. CTA in first 2 lines. 3. Shorten 30%." },
    { id: 25, category: "C — Communication & Sales", title: "Cold Outreach (CEO level)", role: "Act as BD director.", context: "Partnering with [Comp] for [Proj].", problem: "Standing out from 1000 emails.", action: "1. Their recent wins. 2. Non-obvious win-win. 3. 100-word limit." },
    { id: 26, category: "C — Communication & Sales", title: "Opening Hook (Keynote)", role: "Act as professional speaker.", context: "Talk on [topic] to [aud].", problem: "First 60s is critical.", action: "1. Counter-intuitive fact. 2. The 'Stakes'. 3. Promised land." },
    { id: 27, category: "C — Communication & Sales", title: "Referral Request", role: "Act as sales consultant.", context: "Happy client [details].", problem: "Don't sound pushy.", action: "1. High-value moment. 2. Specific person ask. 3. Ready-to-use template." },
    { id: 28, category: "C — Communication & Sales", title: "North Star Speech", role: "Act as CEO.", context: "Period of fast growth.", problem: "Team feels disconnected.", action: "1. Origin story. 2. BHAG goal. 3. Role contribution. 4. Call to action." },
    { id: 29, category: "C — Communication & Sales", title: "Contract Bridge Language", role: "Act as negotiator.", context: "Vendor refusing [clause].", problem: "Need deal but can't budge.", action: "1. Their hidden fear. 2. 3 trade-offs. 3. Bridge language draft." },
    { id: 30, category: "C — Communication & Sales", title: "Inverted Pyramid Board Brief", role: "Act as exec advisor.", context: "Monthly Board update.", problem: "Board is busy; only care about risks.", action: "1. 3 critical metrics. 2. 2 biggest risks. 3. Action/Advice ask." },

    // Category D - Leadership
    { id: 31, category: "D — Leadership & Coaching", title: "Mentorship Session", role: "Act as exec mentor.", context: "Meeting with junior lead.", problem: "Guide, don't just give answers.", action: "1. GROW model. 2. 1 deep reflection question. 3. Action before next." },
    { id: 32, category: "D — Leadership & Coaching", title: "Performance Turnaround", role: "Act as HR director.", context: "Underperformer missing deadlines.", problem: "Firm but fair chance.", action: "1. Expectation vs Reality gap. 2. 'What's in the way?'. 3. 30-day plan." },
    { id: 33, category: "D — Leadership & Coaching", title: "Radical Candor Feedback", role: "Act as coach.", context: "Giving tough feedback to top performer.", problem: "Don't demotivate, but fix issue.", action: "1. Care personally. 2. Challenge directly. 3. Co-create fix." },
    { id: 34, category: "D — Leadership & Coaching", title: "Conflict Mediation", role: "Act as culture lead.", context: "A vs B about [X].", problem: "Productivity suffering.", action: "1. Facts-only. 2. Common interest. 3. Shared commitments." },
    { id: 35, category: "D — Leadership & Coaching", title: "Onboarding Experience", role: "Act as PeopleOps expert.", context: "Onboarding is [desc].", problem: "New hires feel lost.", action: "1. Moment of first value. 2. Day/Week/Month map. 3. Buddy system." },
    { id: 36, category: "D — Leadership & Coaching", title: "Succession Bench Audit", role: "Act as L&D expert.", context: "Key roles audit.", problem: "Risk if key lead leaves tomorrow.", action: "1. Identify critical roles. 2. 2 internal successors. 3. Skills to build now." },
    { id: 37, category: "D — Leadership & Coaching", title: "Values to Behavior", role: "Act as org consultant.", context: "Values: [list].", problem: "Values are just words.", action: "1. Representing behaviors. 2. Anti-behaviors. 3. Recognition system." },
    { id: 38, category: "D — Leadership & Coaching", title: "Stay Interview", role: "Act as retention expert.", context: "Meeting top performer.", problem: "Ensure they never want to leave.", action: "1. What keeps you?. 2. Reasons to leave?. 3. Dream project identification." },
    { id: 39, category: "D — Leadership & Coaching", title: "Remote Engagement", role: "Act as remote-first lead.", context: "Team is 100% remote.", problem: "Transactional vibe.", action: "1. Non-work sync. 2. Async policy. 3. Virtual watercooler." },
    { id: 40, category: "D — Leadership & Coaching", title: "Presence Audit", role: "Act as exec coach.", context: "Improve perception in Board.", problem: "Feeling 'managed' by others.", action: "1. Gravitas vs Comm vs App. 2. Presence killers identification. 3. 30-day protocol." },

    // Category E - Productivity
    { id: 41, category: "E — Personal Productivity", title: "Weekly Review", role: "Act as productivity architect.", context: "Friday closure.", problem: "Mondays feel reactive.", action: "1. Clear inputs. 2. Review wins/losses. 3. 3 Big Rocks for next week." },
    { id: 42, category: "E — Personal Productivity", title: "321 Email Triage", role: "Act as efficiency expert.", context: "100+ unread.", problem: "Email eating the day.", action: "1. 3s decide, 2min act. 2. Del/Del/Def/Do filter. 3. Auto-filters." },
    { id: 43, category: "E — Personal Productivity", title: "Deep Work Setup", role: "Act as performance scientist.", context: "90min for [task].", problem: "Distractions everywhere.", action: "1. Pre-session ritual. 2. Tiny first step. 3. Mid-session break plan." },
    { id: 44, category: "E — Personal Productivity", title: "Delegated Task Tracker", role: "Act as Chief of Staff.", context: "10 tasks, 4 owners.", problem: "Losing track of status.", action: "1. Status table. 2. Weekly sync protocol. 3. Red-flag trigger." },
    { id: 45, category: "E — Personal Productivity", title: "First Principles Problem Solve", role: "Act as cognitive strategist.", context: "Problem: [prob].", problem: "Thinking like everyone else.", action: "1. Occam's Razor vs Inversion. 2. Change of perspective. 3. Robust path." },
    { id: 46, category: "E — Personal Productivity", title: "Burnout Audit", role: "Act as wellness coach.", context: "60hr weeks, tired.", problem: "Need recovery without missing goals.", action: "1. Energy leaks audit. 2. Digital sunset. 3. 2 deletions." },
    { id: 47, category: "E — Personal Productivity", title: "Decision Journal", role: "Act as decision scientist.", context: "Just decided [X].", problem: "Will forget why in 6mo.", action: "1. Variables & Expectation. 2. Emotional state. 3. Review date." },
    { id: 48, category: "E — Personal Productivity", title: "Curriculum Generator", role: "Act as learning specialist.", context: "Need to know [topic] in 48hr.", problem: "No time for full course.", action: "1. 5 core models. 2. 3 curated assets. 3. 5 smart questions." },
    { id: 49, category: "E — Personal Productivity", title: "Personal CRM", role: "Act as network strategist.", context: "500 contacts.", problem: "Losing touch with key 20.", action: "1. Categorize key 20. 2. Low-friction touchpoints. 3. No-ask rule." },
    { id: 50, category: "E — Personal Productivity", title: "End-of-Day Closure", role: "Act as focus consultant.", context: "6 PM closure.", problem: "Head spinning with tasks.", action: "1. Brain dump. 2. Tomorrow's Top 1. 3. Physical shutdown." },

    // Category F - Innovation
    { id: 51, category: "F — Innovation & Future", title: "AI Skills Audit", role: "Act as tech strategist.", context: "[Role] in [Ind].", problem: "AI fear of obsolescence.", action: "1. Tasks to automate. 2. Human-only high value skills. 3. 6mo plan." },
    { id: 52, category: "F — Innovation & Future", title: "Innovation S-Curve", role: "Act as innovation consultant.", context: "Using [Tech].", problem: "Jump or optimize?.", action: "1. Maturity assess. 2. Disruptor identification. 3. Switching cost vs Staying risk." },
    { id: 54, category: "F — Innovation & Future", title: "RICE Product Ranking", role: "Act as product manager.", context: "10 ideas [list].", problem: "Subjective prioritization.", action: "1. Score Reach/Impact/Conf/Effort. 2. RICE rank. 3. Top 3." },
    { id: 55, category: "F — Innovation & Future", title: "Post-AI Rev Model", role: "Act as VC advisor.", context: "Rev from [X].", problem: "AI makes marginal cost zero.", action: "1. Commodity vs Scarcity. 2. New scarcity (Trust/Network). 3. Propose model." },
    { id: 56, category: "F — Innovation & Future", title: "Process Map & Automation", role: "Act as efficiency engineer.", context: "Task [X] takes 10hr/wk.", problem: "Error-prone and boring.", action: "1. Step map. 2. Decision vs Data points. 3. Tool suggestion." },
    { id: 57, category: "F — Innovation & Future", title: "Patent vs Secret", role: "Act as IP strategist.", context: "New Tech [X].", problem: "Legal protection strategy.", action: "1. Reverse engineering ease. 2. Market speed vs Patent time. 3. Strategy." },
    { id: 58, category: "F — Innovation & Future", title: "ESG Strategy", role: "Act as sustainability director.", context: "Investors asking for policy.", problem: "No greenwashing; real impact.", action: "1. 3 high impact areas. 2. Measurable goals. 3. Statement draft." },
    { id: 59, category: "F — Innovation & Future", title: "Stack Consolidation", role: "Act as CTO.", context: "20 apps, scattered data.", problem: "Risk and collab difficulty.", action: "1. Redundant apps. 2. SSOT architecture. 3. Sunset plan." },
    { id: 60, category: "F — Innovation & Future", title: "Remote/Nomad Policy", role: "Act as future-work lead.", context: "Staff want global work.", problem: "Tax/Legal/Culture risks.", action: "1. Core sync hours. 2. Security protocol. 3. Legal checklist." }
  ]
};
