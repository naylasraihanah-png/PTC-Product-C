import React from 'react';
import { NavigationTab } from '../types';

interface BottomNavProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 px-2 pb-safe bg-surface-container border-t border-outline-variant shadow-sm">
      <button
        onClick={() => setActiveTab('home')}
        className={`flex flex-col items-center justify-center p-2 w-16 transition-colors ${
          activeTab === 'home'
            ? 'bg-secondary-container text-on-secondary-container rounded-full px-3 py-1 scale-95'
            : 'text-on-surface-variant hover:text-primary'
        }`}
      >
        <span className="material-symbols-outlined text-lg">home</span>
        <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">Home</span>
      </button>

      <button
        onClick={() => setActiveTab('evidence')}
        className={`flex flex-col items-center justify-center p-2 w-16 transition-colors ${
          activeTab === 'evidence'
            ? 'bg-secondary-container text-on-secondary-container rounded-full px-3 py-1 scale-95'
            : 'text-on-surface-variant hover:text-primary'
        }`}
      >
        <span className="material-symbols-outlined text-lg">science</span>
        <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">Evidence</span>
      </button>

      <button
        onClick={() => setActiveTab('calculator')}
        className={`flex flex-col items-center justify-center p-2 w-16 transition-colors ${
          activeTab === 'calculator'
            ? 'bg-secondary-container text-on-secondary-container rounded-full px-3 py-1 scale-95'
            : 'text-on-surface-variant hover:text-primary'
        }`}
      >
        <span className="material-symbols-outlined text-lg">calculate</span>
        <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">Calc</span>
      </button>

      <button
        onClick={() => setActiveTab('dossier')}
        className={`flex flex-col items-center justify-center p-2 w-16 transition-colors ${
          activeTab === 'dossier' || activeTab === 'resources'
            ? 'bg-secondary-container text-on-secondary-container rounded-full px-3 py-1 scale-95'
            : 'text-on-surface-variant hover:text-primary'
        }`}
      >
        <span className="material-symbols-outlined text-lg">description</span>
        <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">Dossier</span>
      </button>

      <button
        onClick={() => setActiveTab('crm')}
        className={`flex flex-col items-center justify-center p-2 w-16 transition-colors ${
          activeTab === 'crm'
            ? 'bg-secondary-container text-on-secondary-container rounded-full px-3 py-1 scale-95'
            : 'text-on-surface-variant hover:text-primary'
        }`}
      >
        <span className="material-symbols-outlined text-lg">analytics</span>
        <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">CRM</span>
      </button>
    </nav>
  );
};
