import React, { useState } from 'react';
import { NavigationTab, UserProfile } from '../types';

interface HeaderProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  user: UserProfile;
  onOpenVerification: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  user,
  onOpenVerification,
}) => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface border-b border-outline-variant w-full sticky top-0 z-40 transition-colors shadow-sm">
        <div className="flex justify-between items-center w-full px-4 md:px-10 max-w-[1280px] mx-auto h-16">
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenVerification}
              title="Verification Status & Settings"
              className="flex items-center justify-center p-2 rounded-full hover:bg-surface-container-highest transition-colors text-primary"
            >
              <span className="material-symbols-outlined text-primary">security</span>
            </button>
            <div
              onClick={() => setActiveTab('home')}
              className="cursor-pointer flex items-center gap-2"
            >
              <span className="text-xl font-bold text-primary tracking-tight font-sans">
                C-LINK PTC
              </span>
              <span className="hidden sm:inline-block bg-primary text-on-primary text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
                {user.isVerified ? 'HCP VERIFIED' : 'DEMO MODE'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'home'
                  ? 'text-primary border-b-2 border-primary bg-surface-container-low'
                  : 'text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              <span className="material-symbols-outlined text-lg">home</span>
              Home
            </button>
            <button
              onClick={() => setActiveTab('evidence')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'evidence'
                  ? 'text-primary border-b-2 border-primary bg-surface-container-low'
                  : 'text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              <span className="material-symbols-outlined text-lg">science</span>
              Evidence
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'calculator'
                  ? 'text-primary border-b-2 border-primary bg-surface-container-low'
                  : 'text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              <span className="material-symbols-outlined text-lg">calculate</span>
              Calculator
            </button>
            <button
              onClick={() => setActiveTab('dossier')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'dossier'
                  ? 'text-primary border-b-2 border-primary bg-surface-container-low'
                  : 'text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              <span className="material-symbols-outlined text-lg">description</span>
              Dossier
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'resources'
                  ? 'text-primary border-b-2 border-primary bg-surface-container-low'
                  : 'text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              <span className="material-symbols-outlined text-lg">folder</span>
              Library
            </button>
            <button
              onClick={() => setActiveTab('crm')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors ${
                activeTab === 'crm'
                  ? 'text-primary border-b-2 border-primary bg-surface-container-low'
                  : 'text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              <span className="material-symbols-outlined text-lg">analytics</span>
              CRM Demo
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 rounded-full hover:bg-surface-container-highest transition-colors text-primary"
              title="Notifications"
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-secondary"></span>
            </button>
            
            <button
              onClick={onOpenVerification}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-outline-variant hover:bg-surface-container-highest text-xs font-medium text-on-surface"
            >
              <span className="material-symbols-outlined text-base text-secondary">account_circle</span>
              <span className="truncate max-w-[120px]">{user.fullName || 'Dr. PTC Pharmacist'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Notifications Dropdown Popup */}
      {showNotifications && (
        <div className="absolute right-4 md:right-10 top-16 z-50 w-80 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-ambient p-4 text-xs">
          <div className="flex items-center justify-between border-b border-outline-variant pb-2 mb-3">
            <span className="font-bold text-primary uppercase tracking-wider">Institutional Updates</span>
            <button 
              onClick={() => setShowNotifications(false)}
              className="text-on-surface-variant hover:text-primary"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>
          <div className="space-y-3 max-h-60 overflow-y-auto">
            <div className="p-2 rounded bg-surface-container-low border border-outline-variant">
              <span className="text-[10px] font-bold text-secondary uppercase block mb-0.5">Updated Pricing</span>
              <p className="text-on-surface font-medium">Product C WAC reduced to $10.00 / box for 2026 formulary cycle.</p>
            </div>
            <div className="p-2 rounded bg-surface-container-low border border-outline-variant">
              <span className="text-[10px] font-bold text-primary uppercase block mb-0.5">New Clinical Trial Data</span>
              <p className="text-on-surface font-medium">Phase III 24-week endpoint results added to Efficacy Hub.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
