import React, { useState } from 'react';
import { NavigationTab } from '../types';

interface EvidenceViewProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const EvidenceView: React.FC<EvidenceViewProps> = ({ onNavigate }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [bookmarkedSections, setBookmarkedSections] = useState<Record<string, boolean>>({});

  const toggleBookmark = (section: string) => {
    setBookmarkedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-10 py-6 flex flex-col gap-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-outline-variant pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-primary text-on-primary text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
              HCP Only
            </span>
            <span className="text-xs font-bold uppercase text-on-surface-variant tracking-wider">
              Review Phase
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-primary">
            Product C Formulary Evidence Hub
          </h1>
          <p className="text-sm text-on-surface-variant mt-2 max-w-2xl">
            Comprehensive clinical, safety, and economic data synthesis for institutional review.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 px-4 py-3 min-h-[48px] rounded border-[1.5px] border-secondary text-secondary font-bold text-xs uppercase tracking-wider hover:bg-surface-container-highest transition-colors"
          >
            <span className="material-symbols-outlined text-lg">download</span>
            {downloadSuccess ? 'Downloaded Summary' : 'Download Evidence Summary'}
          </button>
          <button
            onClick={() => onNavigate('calculator')}
            className="flex items-center justify-center gap-2 px-4 py-3 min-h-[48px] rounded bg-primary text-on-primary font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary-container transition-colors"
          >
            <span className="material-symbols-outlined text-lg">calculate</span>
            Open Budget-Impact Calculator
          </button>
        </div>
      </div>

      {/* Bento Grid Layout for Evidence */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Clinical Efficacy (Large Card) */}
        <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-sm flex flex-col">
          <div className="bg-surface px-6 py-4 border-b border-outline-variant flex justify-between items-center">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">monitoring</span>
              Clinical Efficacy
            </h3>
            <button 
              onClick={() => toggleBookmark('clinical')}
              className="text-on-surface-variant hover:text-primary transition-colors p-1" 
              title="Save Section"
            >
              <span className="material-symbols-outlined">
                {bookmarkedSections['clinical'] ? 'bookmark' : 'bookmark_border'}
              </span>
            </button>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <p className="text-base text-on-surface mb-6 leading-relaxed">
              Pivotal trial data demonstrates significant improvements across primary and secondary endpoints compared to standard of care.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant">
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                  LDL-C Reduction
                </div>
                <div className="text-3xl font-bold text-primary">50%</div>
                <div className="text-xs text-secondary mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">trending_down</span>
                  vs baseline
                </div>
              </div>
              <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant">
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                  MACE Reduction
                </div>
                <div className="text-3xl font-bold text-primary">45%</div>
                <div className="text-xs text-secondary mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">trending_down</span>
                  relative risk
                </div>
              </div>
              <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant">
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                  Mortality Reduction
                </div>
                <div className="text-3xl font-bold text-primary">20%</div>
                <div className="text-xs text-secondary mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">trending_down</span>
                  all-cause
                </div>
              </div>
            </div>
            <div className="mt-auto pt-4 border-t border-outline-variant flex justify-between items-center">
              <div className="text-xs text-on-surface-variant">
                <span className="font-bold text-on-surface">PTC Relevance:</span> High impact on high-risk cardiovascular population.
              </div>
              <button 
                onClick={() => onNavigate('dossier')}
                className="text-secondary font-bold text-xs uppercase tracking-wider hover:underline flex items-center gap-1"
              >
                View Detail
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Safety Profile (Medium Card) */}
        <div className="lg:col-span-4 bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-sm flex flex-col">
          <div className="bg-surface px-6 py-4 border-b border-outline-variant flex justify-between items-center">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-error">warning</span>
              Safety
            </h3>
            <button 
              onClick={() => toggleBookmark('safety')}
              className="text-on-surface-variant hover:text-primary transition-colors p-1"
            >
              <span className="material-symbols-outlined">
                {bookmarkedSections['safety'] ? 'bookmark' : 'bookmark_border'}
              </span>
            </button>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <p className="text-xs text-on-surface mb-6 leading-relaxed">
              Generally well-tolerated. Monitored signals require standard periodic laboratory assessments.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex justify-between items-center p-3 bg-surface-container-low rounded border border-outline-variant">
                <span className="text-xs font-semibold text-on-surface">ALT Elevation</span>
                <span className="font-mono text-sm text-error font-bold">0.1%</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-surface-container-low rounded border border-outline-variant">
                <span className="text-xs font-semibold text-on-surface">CK Elevation</span>
                <span className="font-mono text-sm text-error font-bold">0.2%</span>
              </li>
            </ul>
            <div className="mt-auto pt-4 border-t border-outline-variant flex justify-between items-center">
              <div className="text-[11px] text-on-surface-variant">
                <span className="font-bold text-on-surface">PTC:</span> Routine hepatic panel.
              </div>
              <button 
                onClick={() => onNavigate('dossier')}
                className="text-secondary font-bold text-xs uppercase tracking-wider hover:underline flex items-center gap-1"
              >
                View Detail
              </button>
            </div>
          </div>
        </div>

        {/* Acquisition Cost (Medium Card) */}
        <div className="lg:col-span-6 bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-sm flex flex-col">
          <div className="bg-surface px-6 py-4 border-b border-outline-variant flex justify-between items-center">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">payments</span>
              Acquisition Cost
            </h3>
            <button 
              onClick={() => toggleBookmark('cost')}
              className="text-on-surface-variant hover:text-primary transition-colors p-1"
            >
              <span className="material-symbols-outlined">
                {bookmarkedSections['cost'] ? 'bookmark' : 'bookmark_border'}
              </span>
            </button>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <p className="text-xs text-on-surface mb-4">
              Recent pricing adjustments have significantly improved the economic proposition for institutional adoption.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 p-4 bg-surface-container rounded-lg border border-outline-variant opacity-70 line-through decoration-error">
                <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                  Previous WAC
                </div>
                <div className="text-2xl font-bold text-on-surface-variant">20 <span className="text-xs">USD</span></div>
              </div>
              <span className="material-symbols-outlined text-secondary">arrow_right_alt</span>
              <div className="flex-1 p-4 data-gradient rounded-lg text-on-primary shadow-md">
                <div className="text-[10px] font-bold text-primary-fixed uppercase tracking-wider mb-1">
                  Current WAC
                </div>
                <div className="text-2xl font-bold">10 <span className="text-xs">USD</span></div>
              </div>
            </div>
            <div className="bg-surface-container-low px-3 py-2 rounded text-xs text-center text-primary font-bold mb-4 border border-outline-variant">
              50% Unit Cost Reduction
            </div>
            <div className="mt-auto pt-4 border-t border-outline-variant flex justify-between items-center">
              <div className="text-xs text-on-surface-variant">
                <span className="font-bold text-on-surface">PTC Relevance:</span> Highly favorable budget impact.
              </div>
              <button 
                onClick={() => onNavigate('calculator')}
                className="text-secondary font-bold text-xs uppercase tracking-wider hover:underline flex items-center gap-1"
              >
                Model Scenarios
              </button>
            </div>
          </div>
        </div>

        {/* Institutional Considerations (Medium Card) */}
        <div className="lg:col-span-6 bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-sm flex flex-col">
          <div className="bg-surface px-6 py-4 border-b border-outline-variant flex justify-between items-center">
            <h3 className="text-lg font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">account_balance</span>
              Institutional Considerations
            </h3>
            <button 
              onClick={() => toggleBookmark('considerations')}
              className="text-on-surface-variant hover:text-primary transition-colors p-1"
            >
              <span className="material-symbols-outlined">
                {bookmarkedSections['considerations'] ? 'bookmark' : 'bookmark_border'}
              </span>
            </button>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <p className="text-xs text-on-surface mb-4">
              Key systemic factors influencing formulary placement and operational deployment.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary mt-0.5 text-lg">verified</span>
                <div>
                  <div className="text-xs font-semibold text-on-surface">Evidence Quality</div>
                  <div className="text-[11px] text-on-surface-variant">Grade A (Multiple RCTs)</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary mt-0.5 text-lg">list_alt</span>
                <div>
                  <div className="text-xs font-semibold text-on-surface">Formulary Status</div>
                  <div className="text-[11px] text-on-surface-variant">Tier 2 Recommended (Unrestricted)</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary mt-0.5 text-lg">savings</span>
                <div>
                  <div className="text-xs font-semibold text-on-surface">Budget Impact</div>
                  <div className="text-[11px] text-on-surface-variant">Neutral to Cost-Saving (Year 1)</div>
                </div>
              </div>
            </div>
            <div className="mt-auto pt-4 border-t border-outline-variant flex justify-end items-center">
              <button 
                onClick={() => onNavigate('rationale')}
                className="text-secondary font-bold text-xs uppercase tracking-wider hover:underline flex items-center gap-1"
              >
                View Rationale
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Clinical and Institutional Comparison Section */}
      <section className="mt-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-primary mb-1">
            Clinical and Institutional Comparison
          </h2>
          <p className="text-xs text-on-surface-variant">
            Evaluate clinical efficacy, safety profiles, and economic impact across primary therapeutic options to support formulary inclusion decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Product C Original */}
          <div className="bg-surface-container-lowest border-2 border-primary rounded-xl overflow-hidden shadow-ambient flex flex-col">
            <div className="bg-surface p-4 border-b border-outline-variant flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-primary">Product C Original</h3>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mt-1">Reference Standard</p>
              </div>
              <span className="bg-primary text-on-primary text-[10px] font-bold uppercase px-2 py-1 rounded">TIER 1</span>
            </div>
            <div className="p-4 flex-grow flex flex-col gap-3 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-outline-variant/50">
                <span className="text-on-surface-variant">Clinical Evidence</span>
                <span className="text-secondary font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">check_circle</span> High
                </span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-outline-variant/50">
                <span className="text-on-surface-variant">LDL-C Reduction</span>
                <span className="font-mono text-primary font-bold">~50-60%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-outline-variant/50">
                <span className="text-on-surface-variant">CV Outcome</span>
                <span className="text-primary font-medium">Established</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-outline-variant/50">
                <span className="text-on-surface-variant">Safety Evidence</span>
                <span className="text-primary font-medium">Robust (10+ Yrs)</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-on-surface-variant">Price Positioning</span>
                <span className="text-primary font-bold">Competitive ($10/box)</span>
              </div>
            </div>
          </div>

          {/* Card 2: Product A Original */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm flex flex-col">
            <div className="bg-surface p-4 border-b border-outline-variant flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-primary">Product A Original</h3>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mt-1">Alternative Option</p>
              </div>
              <span className="bg-primary text-on-primary text-[10px] font-bold uppercase px-2 py-1 rounded">TIER 2</span>
            </div>
            <div className="p-4 flex-grow flex flex-col gap-3 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-outline-variant/50">
                <span className="text-on-surface-variant">Clinical Evidence</span>
                <span className="text-secondary font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">check_circle</span> High
                </span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-outline-variant/50">
                <span className="text-on-surface-variant">LDL-C Reduction</span>
                <span className="font-mono text-primary font-bold">~45-55%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-outline-variant/50">
                <span className="text-on-surface-variant">CV Outcome</span>
                <span className="text-primary font-medium">Established</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-outline-variant/50">
                <span className="text-on-surface-variant">Safety Evidence</span>
                <span className="text-primary font-medium">Robust</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-on-surface-variant">Price Positioning</span>
                <span className="text-primary font-bold">Moderate ($25.50/box)</span>
              </div>
            </div>
          </div>

          {/* Card 3: Generic S */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm flex flex-col">
            <div className="bg-surface-variant/30 p-4 border-b border-outline-variant flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-on-surface-variant">Generic S</h3>
                <p className="text-[10px] font-bold text-outline uppercase tracking-wider mt-1">Cost Minimization</p>
              </div>
              <span className="bg-outline text-on-primary text-[10px] font-bold uppercase px-2 py-1 rounded">TIER 1</span>
            </div>
            <div className="p-4 flex-grow flex flex-col gap-3 text-xs">
              <div className="bg-surface-container-high p-2.5 rounded text-[11px] text-on-surface-variant flex gap-2 items-start">
                <span className="material-symbols-outlined text-outline text-base mt-0.5">info</span>
                <span>No direct head-to-head clinical study data provided in case materials.</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-outline-variant/50">
                <span className="text-on-surface-variant">Clinical Evidence</span>
                <span className="text-outline italic">Unavailable</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-outline-variant/50">
                <span className="text-on-surface-variant">LDL-C Reduction</span>
                <span className="font-mono text-outline">N/A</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-outline-variant/50">
                <span className="text-on-surface-variant">CV Outcome</span>
                <span className="text-outline">N/A</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-on-surface-variant">Price Positioning</span>
                <span className="text-secondary font-bold">Low</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Area */}
        <div className="flex flex-col md:flex-row gap-4 mt-6 justify-end">
          <button 
            onClick={() => onNavigate('calculator')}
            className="min-h-[48px] px-6 py-2 rounded border-[1.5px] border-secondary text-secondary font-bold text-xs uppercase tracking-wider hover:bg-secondary/5 transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">calculate</span>
            Open Budget Calculator
          </button>
          <button 
            onClick={() => onNavigate('discussion')}
            className="min-h-[48px] px-6 py-2 rounded bg-primary text-on-primary font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <span className="material-symbols-outlined">add_circle</span>
            Include in Formulary Review
          </button>
        </div>
      </section>
    </main>
  );
};
