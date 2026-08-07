import React, { useState } from 'react';
import { NavigationTab } from '../types';

interface RationaleViewProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const RationaleView: React.FC<RationaleViewProps> = ({ onNavigate }) => {
  const [checklist, setChecklist] = useState({
    evidence: false,
    safety: false,
    procurement: false,
  });

  const toggleCheck = (key: keyof typeof checklist) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-10 py-8">
      {/* Header Section */}
      <div className="mb-10 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          Formulary Relisting Rationale
        </h1>
        <p className="text-base text-on-surface-variant leading-relaxed">
          Review the clinical, economic, and institutional considerations that may support Product C formulary discussion.
        </p>
        <p className="mt-3 text-xs text-outline italic">
          Note: Information provided does not guarantee formulary relisting. Decisions are subject to institutional review.
        </p>
      </div>

      {/* Bento Grid: Rationale Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Pillar 1 */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm relative overflow-hidden group hover:border-on-tertiary-container transition-colors">
          <div className="absolute top-0 left-0 w-full h-1 bg-tertiary-container"></div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-surface-container-high p-2 rounded-lg text-on-tertiary-container">
              <span className="material-symbols-outlined fill">monitor_heart</span>
            </div>
            <h3 className="text-xs font-bold text-primary tracking-widest uppercase">
              Clinical Value
            </h3>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Strong LDL-C and CV outcome evidence supporting continued clinical utility.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm relative overflow-hidden group hover:border-on-tertiary-container transition-colors">
          <div className="absolute top-0 left-0 w-full h-1 bg-tertiary-container"></div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-surface-container-high p-2 rounded-lg text-on-tertiary-container">
              <span className="material-symbols-outlined fill">health_and_safety</span>
            </div>
            <h3 className="text-xs font-bold text-primary tracking-widest uppercase">
              Safety Evidence
            </h3>
          </div>
          <p className="text-xs text-on-surface-variant mb-3 leading-relaxed">
            Documented liver and muscle safety signals within acceptable parameters.
          </p>
          <div className="flex gap-2">
            <span className="bg-surface-container px-2 py-1 rounded font-mono text-xs text-primary font-semibold">
              ALT 0.1%
            </span>
            <span className="bg-surface-container px-2 py-1 rounded font-mono text-xs text-primary font-semibold">
              CK 0.2%
            </span>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm relative overflow-hidden group hover:border-on-tertiary-container transition-colors">
          <div className="absolute top-0 left-0 w-full h-1 bg-tertiary-container"></div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-surface-container-high p-2 rounded-lg text-on-tertiary-container">
              <span className="material-symbols-outlined fill">payments</span>
            </div>
            <h3 className="text-xs font-bold text-primary tracking-widest uppercase">
              Accessibility
            </h3>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Price reduced to facilitate broader institutional access.
          </p>
          <div className="mt-3 text-xl font-bold text-primary font-mono">
            10 USD
          </div>
        </div>

        {/* Pillar 4 */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm relative overflow-hidden group hover:border-on-tertiary-container transition-colors">
          <div className="absolute top-0 left-0 w-full h-1 bg-tertiary-container"></div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-surface-container-high p-2 rounded-lg text-on-tertiary-container">
              <span className="material-symbols-outlined fill">corporate_fare</span>
            </div>
            <h3 className="text-xs font-bold text-primary tracking-widest uppercase">
              Institutional Relevance
            </h3>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Original-brand evidence with competitive acquisition pricing structure.
          </p>
        </div>
      </div>

      {/* Asymmetric Layout: Checklist & Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Discussion Checklist */}
        <div className="lg:col-span-2 bg-surface-container-low rounded-xl border border-outline-variant p-6 md:p-8">
          <h2 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-on-tertiary-container">fact_check</span>
            PTC Discussion Checklist
          </h2>
          <ul className="space-y-4">
            <li 
              onClick={() => toggleCheck('evidence')}
              className="flex items-start gap-4 p-3 rounded-lg hover:bg-surface-container-lowest transition-colors cursor-pointer"
            >
              <div className={`mt-1 w-6 h-6 rounded-full border flex-shrink-0 flex items-center justify-center transition-colors ${
                checklist.evidence ? 'bg-secondary border-secondary text-white' : 'border-outline bg-surface-container-low'
              }`}>
                {checklist.evidence && <span className="material-symbols-outlined text-sm">check</span>}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-on-surface">Key Evidence Review</h4>
                <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                  Assess long-term outcome data in target patient populations against current formulary alternatives.
                </p>
              </div>
            </li>

            <li 
              onClick={() => toggleCheck('safety')}
              className="flex items-start gap-4 p-3 rounded-lg hover:bg-surface-container-lowest transition-colors cursor-pointer"
            >
              <div className={`mt-1 w-6 h-6 rounded-full border flex-shrink-0 flex items-center justify-center transition-colors ${
                checklist.safety ? 'bg-secondary border-secondary text-white' : 'border-outline bg-surface-container-low'
              }`}>
                {checklist.safety && <span className="material-symbols-outlined text-sm">check</span>}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-on-surface">Safety Protocol Alignment</h4>
                <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                  Confirm ALT/CK monitoring protocols align with existing institutional pathways.
                </p>
              </div>
            </li>

            <li 
              onClick={() => toggleCheck('procurement')}
              className="flex items-start gap-4 p-3 rounded-lg hover:bg-surface-container-lowest transition-colors cursor-pointer"
            >
              <div className={`mt-1 w-6 h-6 rounded-full border flex-shrink-0 flex items-center justify-center transition-colors ${
                checklist.procurement ? 'bg-secondary border-secondary text-white' : 'border-outline bg-surface-container-low'
              }`}>
                {checklist.procurement && <span className="material-symbols-outlined text-sm">check</span>}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-on-surface">Procurement Considerations</h4>
                <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                  Evaluate supply chain stability and contract terms associated with the revised pricing model.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Call to Actions & Contact */}
        <div className="flex flex-col gap-6">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-ambient">
            <h3 className="text-xs font-bold text-primary mb-4 tracking-widest uppercase">
              Next Steps
            </h3>
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => onNavigate('dossier')}
                className="w-full bg-primary text-on-primary py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-primary-container transition-colors flex items-center justify-center gap-2 min-h-[48px]"
              >
                <span className="material-symbols-outlined">description</span>
                Review PTC Dossier
              </button>
              <button 
                onClick={() => onNavigate('calculator')}
                className="w-full bg-surface text-primary border-[1.5px] border-on-tertiary-container py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2 min-h-[48px]"
              >
                <span className="material-symbols-outlined">calculate</span>
                Calculate Budget Impact
              </button>
            </div>
          </div>

          <div className="bg-tertiary-container rounded-xl p-6 text-on-tertiary shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-tertiary-fixed-dim">support_agent</span>
              <h3 className="text-sm font-bold">Medical Information</h3>
            </div>
            <p className="text-xs text-surface-variant mb-4 leading-relaxed">
              Request detailed clinical trial data or specific safety analyses for PTC preparation.
            </p>
            <button 
              onClick={() => onNavigate('inquiry')}
              className="text-tertiary-fixed font-bold text-xs tracking-widest uppercase hover:underline flex items-center gap-1"
            >
              CONTACT MEDICAL LIAISON
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
