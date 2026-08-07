import React, { useState } from 'react';
import { NavigationTab } from '../types';

interface FaqViewProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const FaqView: React.FC<FaqViewProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is the rationale behind the updated Product C acquisition price?',
      a: 'The price adjustment to $10.00/box reflects a commitment to institutional affordability and expanding hospital access for high-risk dyslipidaemia patient cohorts across major health systems.',
    },
    {
      q: 'How does Product C compare to generic statin regimens in high-risk patients?',
      a: 'While generic statins remain foundational, Product C offers incremental 50% LDL-C reduction and a 45% reduction in MACE for patients who fail to achieve LDL targets on statin monotherapy alone.',
    },
    {
      q: 'What lab monitoring is required for patients initiated on Product C?',
      a: 'Routine ALT and CK monitoring is recommended prior to initiation and at 12 months. Clinical trial data demonstrates hepatic enzyme elevations in under 0.1% of treated subjects.',
    },
    {
      q: 'How can our institution customize the budget-impact calculations?',
      a: 'You can use the interactive Budget Impact Calculator on this platform or download the editable Excel calculation sheet from our Resource Library to input your exact institutional volume and pricing tiers.',
    },
    {
      q: 'Is Product C eligible for contracted Volume Discounts or GPO rebates?',
      a: 'Yes. Wholesaler acquisition cost (WAC) is set at $10.00/box, and additional GPO-tier volume incentives may apply based on health system procurement contracts.',
    },
  ];

  return (
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-10 py-6 flex flex-col gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* FAQs */}
        <div className="lg:col-span-8 space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            PTC Decision-Support FAQ
          </h1>
          <p className="text-xs text-on-surface-variant mb-6">
            Frequently asked questions regarding clinical trial evidence, safety parameters, and institutional procurement.
          </p>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 text-left font-bold text-sm text-primary flex justify-between items-center bg-surface-container-low hover:bg-surface-container transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="material-symbols-outlined text-on-surface-variant">
                    {openFaq === idx ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="p-4 text-xs text-on-surface-variant leading-relaxed border-t border-outline-variant bg-surface">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Decision Support Widget */}
        <div className="lg:col-span-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-ambient sticky top-20">
            <h3 className="font-bold text-base text-primary mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">verified</span>
              Decision Support Readiness
            </h3>
            <p className="text-xs text-on-surface-variant mb-4">
              Your institutional review packet is currently 92% complete.
            </p>

            <div className="w-full bg-surface-variant rounded-full h-2 mb-4">
              <div className="bg-secondary h-2 rounded-full w-[92%]"></div>
            </div>

            <ul className="space-y-2 text-xs text-on-surface mb-6">
              <li className="flex items-center gap-2 text-secondary font-medium">
                <span className="material-symbols-outlined text-base">check_circle</span>
                Clinical Efficacy Monograph
              </li>
              <li className="flex items-center gap-2 text-secondary font-medium">
                <span className="material-symbols-outlined text-base">check_circle</span>
                Safety &amp; Tolerability Review
              </li>
              <li className="flex items-center gap-2 text-secondary font-medium">
                <span className="material-symbols-outlined text-base">check_circle</span>
                Budget-Impact Scenario
              </li>
              <li className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-base text-outline">circle</span>
                Formulary Meeting Scheduled
              </li>
            </ul>

            <button
              onClick={() => onNavigate('discussion')}
              className="w-full bg-primary text-on-primary font-bold text-xs uppercase tracking-wider py-3 rounded-lg hover:bg-primary-container transition-colors min-h-[48px]"
            >
              Schedule Formulary Discussion
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
