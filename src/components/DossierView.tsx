import React, { useState } from 'react';
import { NavigationTab } from '../types';

interface DossierViewProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const DossierView: React.FC<DossierViewProps> = ({ onNavigate }) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    execSummary: true,
    efficacy: true,
  });

  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const toggleSection = (key: string) => {
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-10 py-6 flex flex-col gap-6">
      {/* Dossier Header */}
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-6 shadow-ambient flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-primary text-on-primary text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
              Confidential
            </span>
            <span className="text-xs font-bold uppercase text-on-surface-variant tracking-wider">
              For P&amp;T Committee Use
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-primary">
            Product C PTC Formulary Dossier
          </h1>
          <p className="text-xs text-on-surface-variant mt-1">
            Comprehensive Clinical, Safety &amp; Health Economic Dossier (2026 Edition)
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded bg-primary text-on-primary font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary-container transition-colors min-h-[48px]"
          >
            <span className="material-symbols-outlined text-lg">download</span>
            {downloadSuccess ? 'Dossier Downloaded!' : 'Download Complete PTC Dossier (PDF)'}
          </button>
          <button
            onClick={() => onNavigate('discussion')}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded border-[1.5px] border-secondary text-secondary font-bold text-xs uppercase tracking-wider hover:bg-surface-container-highest transition-colors min-h-[48px]"
          >
            <span className="material-symbols-outlined text-lg">forum</span>
            Request Discussion
          </button>
        </div>
      </div>

      {/* Main Accordion Sections */}
      <div className="space-y-4">
        {/* Section 1: Executive Summary */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
          <button
            onClick={() => toggleSection('execSummary')}
            className="w-full px-6 py-4 bg-surface-container-low flex justify-between items-center text-left hover:bg-surface-container transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">summarize</span>
              <h2 className="text-base font-bold text-primary">1. Executive Summary &amp; Indication</h2>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">
              {openSections['execSummary'] ? 'expand_less' : 'expand_more'}
            </span>
          </button>
          {openSections['execSummary'] && (
            <div className="p-6 space-y-4 text-xs text-on-surface leading-relaxed border-t border-outline-variant">
              <p>
                Product C is an established therapeutic agent indicated for the treatment of primary hypercholesterolaemia or mixed dyslipidaemia in adult patients where statins or second-line therapies are insufficient.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                <div className="p-3 bg-surface rounded border border-outline-variant">
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase block mb-1">Target Population</span>
                  <span className="font-semibold text-primary">High-Risk ASCVD Patients</span>
                </div>
                <div className="p-3 bg-surface rounded border border-outline-variant">
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase block mb-1">Dosing &amp; Admin</span>
                  <span className="font-semibold text-primary">Once-daily oral administration</span>
                </div>
                <div className="p-3 bg-surface rounded border border-outline-variant">
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase block mb-1">Pricing Model</span>
                  <span className="font-semibold text-secondary">$10.00 / box (Revised WAC)</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Section 2: Clinical Efficacy */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
          <button
            onClick={() => toggleSection('efficacy')}
            className="w-full px-6 py-4 bg-surface-container-low flex justify-between items-center text-left hover:bg-surface-container transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">biotech</span>
              <h2 className="text-base font-bold text-primary">2. Clinical Efficacy &amp; Cardiovascular Outcomes</h2>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">
              {openSections['efficacy'] ? 'expand_less' : 'expand_more'}
            </span>
          </button>
          {openSections['efficacy'] && (
            <div className="p-6 space-y-4 text-xs text-on-surface leading-relaxed border-t border-outline-variant">
              <p>
                In Phase III randomized clinical trials involving over 18,000 patients, Product C demonstrated statistically significant reductions in key lipid biomarkers and long-term major adverse cardiovascular events (MACE).
              </p>
              <div className="bg-surface-container p-4 rounded-lg border border-outline-variant my-2">
                <h4 className="font-bold text-primary mb-2">Key Efficacy Highlights:</h4>
                <ul className="list-disc list-inside space-y-1 text-on-surface-variant">
                  <li><strong>50% mean reduction in LDL-C</strong> from baseline at 24 weeks (p &lt; 0.001)</li>
                  <li><strong>45% relative risk reduction in MACE</strong> over a 3.5-year median follow-up period</li>
                  <li>Consistent efficacy across sub-analyses including diabetic and renal impairment populations</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Section 3: Safety & Tolerability */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
          <button
            onClick={() => toggleSection('safety')}
            className="w-full px-6 py-4 bg-surface-container-low flex justify-between items-center text-left hover:bg-surface-container transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">shield</span>
              <h2 className="text-base font-bold text-primary">3. Safety Profile &amp; Tolerability</h2>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">
              {openSections['safety'] ? 'expand_less' : 'expand_more'}
            </span>
          </button>
          {openSections['safety'] && (
            <div className="p-6 space-y-4 text-xs text-on-surface leading-relaxed border-t border-outline-variant">
              <p>
                The adverse event profile of Product C was comparable to placebo. Monitoring hepatic enzymes is recommended at baseline and at 12 months.
              </p>
              <div className="grid grid-cols-2 gap-4 my-2">
                <div className="p-3 bg-surface rounded border border-outline-variant">
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase block">ALT Elevation (&gt;3x ULN)</span>
                  <span className="text-sm font-bold text-error">0.1%</span>
                </div>
                <div className="p-3 bg-surface rounded border border-outline-variant">
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase block">CK Elevation (&gt;5x ULN)</span>
                  <span className="text-sm font-bold text-error">0.2%</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Section 4: Budget Impact & Economic Analysis */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
          <button
            onClick={() => toggleSection('economic')}
            className="w-full px-6 py-4 bg-surface-container-low flex justify-between items-center text-left hover:bg-surface-container transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">account_balance_wallet</span>
              <h2 className="text-base font-bold text-primary">4. Health Economics &amp; Budget Impact Model</h2>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">
              {openSections['economic'] ? 'expand_less' : 'expand_more'}
            </span>
          </button>
          {openSections['economic'] && (
            <div className="p-6 space-y-4 text-xs text-on-surface leading-relaxed border-t border-outline-variant">
              <p>
                With the updated WAC price of $10.00/box, Product C presents a net cost-neutral to cost-saving trajectory for typical tertiary hospitals over a 3-year formulary horizon.
              </p>
              <button
                onClick={() => onNavigate('calculator')}
                className="bg-secondary text-on-primary px-4 py-2 rounded text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">calculate</span>
                Run Interactive Budget Calculator
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
