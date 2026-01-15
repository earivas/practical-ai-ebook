
import React from 'react';

export interface Prompt {
  id: number;
  title: string;
  role: string;
  context: string;
  problem: string;
  action: string;
}

export interface Mission {
  id: number;
  title: string;
  objective: string[];
  problem: string[];
  masterPrompt: {
    role: string;
    context: string;
    problem: string;
    action: string[];
  };
  appliedExample: string[];
  checklist: string[];
  upgrade: string;
}

export interface Chapter {
  id: string;
  title: string;
  subtitle?: string;
  // Use React.ReactNode to fix the "Cannot find namespace 'JSX'" error and allow broader content types
  content: React.ReactNode;
}

export interface Section {
  title: string;
  items: { id: string; label: string }[];
}
