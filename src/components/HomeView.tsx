import React from 'react';
import { NavigationTab } from '../types';

interface HomeViewProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-10 py-6 flex flex-col gap-6">
      {/* Hero Section */}
      <section className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant relative overflow-hidden">
        {/* Decorative gradient accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary-fixed to-transparent opacity-20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row gap-6 justify-between items-start">
          <div className="flex-1 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-xl md:text-2xl font-bold text-on-surface-variant">
                Welcome, PTC Pharmacist.
              </h1>
              <span className="bg-primary text-on-primary text-[10px] uppercase font-bold px-2 py-1 rounded tracking-wider flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-[12px]">star</span>
                PTC Pharmacist — High Priority
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary max-w-2xl leading-tight">
              Connect clinical value with institutional formulary impact.
            </h2>
            <p className="text-base text-on-surface-variant max-w-3xl">
              Review Product C clinical evidence, explore budget-impact scenarios, and access formulary resources designed for PTC decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => onNavigate('calculator')}
                className="bg-primary text-on-primary hover:bg-primary-container transition-colors px-6 min-h-[48px] rounded-lg text-xs font-bold uppercase tracking-wider flex justify-center items-center gap-2 shadow-sm"
              >
                <span className="material-symbols-outlined text-sm">calculate</span>
                Calculate Hospital Budget Impact
              </button>
              <button
                onClick={() => onNavigate('evidence')}
                className="border-[1.5px] border-on-tertiary-container text-on-tertiary-container hover:bg-surface-container transition-colors px-6 min-h-[48px] rounded-lg text-xs font-bold uppercase tracking-wider flex justify-center items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">science</span>
                Review Formulary Evidence
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Cards (Bento Grid) */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Card 1 */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col shadow-sm">
            <div className="bg-surface-container px-3 py-2 flex items-center gap-2 border-b border-outline-variant">
              <span className="material-symbols-outlined text-on-surface-variant text-sm">payments</span>
              <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                Current Product C Price
              </h3>
            </div>
            <div className="p-4 flex flex-col justify-center flex-grow bg-surface">
              <div className="text-2xl md:text-3xl font-bold text-primary flex items-baseline gap-1">
                <span className="font-mono text-2xl tracking-tight">10</span>
                <span className="text-sm font-normal text-on-surface-variant">USD</span>
              </div>
              <p className="text-[11px] text-outline mt-1">per box</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col shadow-sm">
            <div className="bg-surface-container px-3 py-2 flex items-center gap-2 border-b border-outline-variant">
              <span className="material-symbols-outlined text-on-surface-variant text-sm">trending_down</span>
              <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                Price Reduction
              </h3>
            </div>
            <div className="p-4 flex flex-col justify-center flex-grow bg-surface">
              <div className="text-2xl md:text-3xl font-bold text-secondary flex items-baseline gap-1">
                <span className="font-mono text-2xl tracking-tight">50</span>
                <span className="text-sm font-normal text-secondary">%</span>
              </div>
              <p className="text-[11px] text-outline mt-1">from previous price</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col shadow-sm">
            <div className="bg-surface-container px-3 py-2 flex items-center gap-2 border-b border-outline-variant">
              <span className="material-symbols-outlined text-on-surface-variant text-sm">monitor_heart</span>
              <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                LDL-C Reduction
              </h3>
            </div>
            <div className="p-4 flex flex-col justify-center flex-grow bg-surface">
              <div className="text-2xl md:text-3xl font-bold text-primary flex items-baseline gap-1">
                <span className="font-mono text-2xl tracking-tight">50</span>
                <span className="text-sm font-normal text-on-surface-variant">%</span>
              </div>
              <p className="text-[11px] text-outline mt-1">clinical efficacy</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col shadow-sm">
            <div className="bg-surface-container px-3 py-2 flex items-center gap-2 border-b border-outline-variant">
              <span className="material-symbols-outlined text-on-surface-variant text-sm">vital_signs</span>
              <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                MACE Reduction
              </h3>
            </div>
            <div className="p-4 flex flex-col justify-center flex-grow bg-surface">
              <div className="text-2xl md:text-3xl font-bold text-primary flex items-baseline gap-1">
                <span className="font-mono text-2xl tracking-tight">45</span>
                <span className="text-sm font-normal text-on-surface-variant">%</span>
              </div>
              <p className="text-[11px] text-outline mt-1">cardiovascular outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Banner */}
      <div className="bg-surface-container-high rounded-md p-3 border border-outline-variant flex items-start gap-3">
        <span className="material-symbols-outlined text-outline mt-0.5">info</span>
        <p className="text-[11px] text-on-surface-variant leading-relaxed">
          Clinical and economic information shown for prototype demonstration. Refer to approved product information and validated institutional data before real-world use.
        </p>
      </div>

      {/* Complex Grid Sections */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Priority & Support */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Priority Action Card */}
          <div 
            onClick={() => onNavigate('calculator')}
            className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm flex flex-col hover:shadow-ambient transition-shadow cursor-pointer"
          >
            <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container rounded-t-xl">
              <h3 className="text-lg font-bold text-primary">Priority Action</h3>
              <span className="bg-secondary-container text-on-secondary-container text-xs font-bold uppercase px-2 py-1 rounded">
                4 MIN
              </span>
            </div>
            <div className="p-6 flex flex-col flex-grow items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-on-primary-container text-3xl">calculate</span>
              </div>
              <h4 className="text-xl font-bold text-primary">Budget-Impact Calculator</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Model institutional financial scenarios based on local population data and current formulary tiers.
              </p>
              <button className="mt-auto w-full bg-surface text-primary border border-outline-variant hover:bg-surface-container-highest transition-colors min-h-[48px] rounded-lg text-xs font-bold uppercase tracking-wider">
                START CALCULATION
              </button>
            </div>
          </div>

          {/* Support */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm flex flex-col">
            <div className="p-4 border-b border-outline-variant bg-surface-container rounded-t-xl">
              <h3 className="text-lg font-bold text-primary">Support</h3>
            </div>
            <div className="p-4 flex flex-col gap-2">
              <button 
                onClick={() => onNavigate('inquiry')}
                className="flex items-center gap-3 w-full text-left p-3 rounded hover:bg-surface-container-highest transition-colors group"
              >
                <span className="material-symbols-outlined text-on-tertiary-container group-hover:text-primary transition-colors">
                  contact_support
                </span>
                <span className="text-sm font-medium text-primary">Ask Medical Info</span>
              </button>
              <button 
                onClick={() => onNavigate('discussion')}
                className="flex items-center gap-3 w-full text-left p-3 rounded hover:bg-surface-container-highest transition-colors group"
              >
                <span className="material-symbols-outlined text-on-tertiary-container group-hover:text-primary transition-colors">
                  forum
                </span>
                <span className="text-sm font-medium text-primary">Request Discussion</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Dossier & Evidence */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Formulary Dossier Preview */}
          <div 
            onClick={() => onNavigate('dossier')}
            className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm flex flex-col overflow-hidden group cursor-pointer hover:shadow-ambient transition-all"
          >
            <div className="relative h-48 w-full bg-surface-container border-b border-outline-variant overflow-hidden">
              <div 
                className="bg-cover bg-center w-full h-full opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-700" 
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLGE7hRRjiv8HOxvo5QBUZtTktCLUwUqku8cAe2VI_v_uiA5p5jnWiVZfDob_krT9NQItG5d1WU-_5EC9JrYk6U4H1CEo40_32cuaVidWtuMQy2iMW0UnSWnpI8UNm_JuNYaNkySkbMauNrxC68H-PTaqUHD23zJ_YfyzuF7vME32n2a_hQjiBH_pQtdhVIZpx5VVET-PYJThHH1aKIao8kHZuyA9yqwz_VGLPQRp7zb-YufTU9hjH')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
              <div className="absolute bottom-4 left-6 flex items-center gap-2">
                <span className="bg-primary text-on-primary text-[10px] uppercase font-bold px-2 py-1 rounded tracking-wider">
                  PDF DOC
                </span>
                <h3 className="text-lg font-bold text-primary shadow-sm bg-white/80 backdrop-blur-sm px-2 rounded">
                  Formulary Dossier
                </h3>
              </div>
            </div>
            <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-surface-container-lowest">
              <p className="text-sm text-on-surface-variant max-w-lg leading-relaxed">
                Access the comprehensive clinical and economic dossier prepared for Pharmacy and Therapeutics Committee review.
              </p>
              <button 
                onClick={(e) => { e.stopPropagation(); onNavigate('dossier'); }}
                className="border border-outline-variant text-primary hover:bg-surface-container-highest transition-colors px-6 min-h-[48px] rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 whitespace-nowrap"
              >
                Preview Dossier <span className="material-symbols-outlined text-sm">open_in_new</span>
              </button>
            </div>
          </div>

          {/* Formulary Evidence Hub directory */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm flex flex-col flex-grow">
            <div className="p-4 border-b border-outline-variant bg-surface-container rounded-t-xl flex justify-between items-center">
              <h3 className="text-lg font-bold text-primary">Formulary Evidence Hub</h3>
              <button 
                onClick={() => onNavigate('evidence')}
                className="text-on-tertiary-container hover:text-primary transition-colors text-xs font-bold uppercase tracking-wider"
              >
                VIEW ALL DIRECTORY
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-outline-variant flex-grow">
              <div 
                onClick={() => onNavigate('evidence')}
                className="p-6 hover:bg-surface-container-low transition-colors cursor-pointer flex gap-4"
              >
                <div className="mt-1">
                  <span className="material-symbols-outlined text-secondary">biotech</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-primary mb-1">Clinical Value</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Pivotal trial data demonstrating efficacy endpoints and comparative effectiveness.
                  </p>
                </div>
              </div>

              <div 
                onClick={() => onNavigate('evidence')}
                className="p-6 hover:bg-surface-container-low transition-colors cursor-pointer flex gap-4"
              >
                <div className="mt-1">
                  <span className="material-symbols-outlined text-secondary">health_and_safety</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-primary mb-1">Safety Profile</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Comprehensive adverse event reporting and long-term tolerability data.
                  </p>
                </div>
              </div>

              <div 
                onClick={() => onNavigate('evidence')}
                className="p-6 hover:bg-surface-container-low transition-colors cursor-pointer flex gap-4 border-t border-outline-variant md:border-t-0"
              >
                <div className="mt-1">
                  <span className="material-symbols-outlined text-secondary">monetization_on</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-primary mb-1">Cost Analysis</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Acquisition costs, expected rebate structures, and net budget impact models.
                  </p>
                </div>
              </div>

              <div 
                onClick={() => onNavigate('rationale')}
                className="p-6 hover:bg-surface-container-low transition-colors cursor-pointer flex gap-4 border-t border-outline-variant md:border-t-0"
              >
                <div className="mt-1">
                  <span className="material-symbols-outlined text-secondary">assignment_turned_in</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-primary mb-1">Formulary Rationale</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Strategic alignment with current treatment guidelines and institutional protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
