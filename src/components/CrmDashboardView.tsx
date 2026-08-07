import React, { useState } from 'react';
import { CrmActivityRow } from '../types';

export const CrmDashboardView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [intentFilter, setIntentFilter] = useState('ALL');

  const rows: CrmActivityRow[] = [
    {
      id: 'crm-1',
      hcpName: 'Dr. Sarah Jenkins',
      institution: 'Metropolitan Hospital System',
      formularyStatus: 'Reviewing',
      source: 'Budget Calculator',
      calcDossierStatus: 'Dossier Downloaded',
      engagementScore: 94,
      intentLevel: 'PRIORITY',
      nextAction: 'Schedule MSL Call',
    },
    {
      id: 'crm-2',
      hcpName: 'Dr. Robert Vance',
      institution: 'Saint Luke Cardiology Center',
      formularyStatus: 'Approved',
      source: 'Evidence Hub',
      calcDossierStatus: 'Completed Calc',
      engagementScore: 88,
      intentLevel: 'HIGH',
      nextAction: 'Send Contracting Sheet',
    },
    {
      id: 'crm-3',
      hcpName: 'Dr. Elena Rostova',
      institution: 'University Health System',
      formularyStatus: 'Under Review',
      source: 'Formulary Rationale',
      calcDossierStatus: 'Inquiry Pending',
      engagementScore: 76,
      intentLevel: 'HIGH',
      nextAction: 'Respond to Inquiry',
    },
    {
      id: 'crm-4',
      hcpName: 'Dr. Michael Chen',
      institution: 'City Medical Center',
      formularyStatus: 'Not Started',
      source: 'Direct Portal',
      calcDossierStatus: 'Browsed Library',
      engagementScore: 42,
      intentLevel: 'MODERATE',
      nextAction: 'Send Nudge Email',
    },
    {
      id: 'crm-5',
      hcpName: 'Dr. Amanda Thorne',
      institution: 'Memorial Heart Institute',
      formularyStatus: 'Reviewing',
      source: 'Discussion Form',
      calcDossierStatus: 'Meeting Requested',
      engagementScore: 98,
      intentLevel: 'PRIORITY',
      nextAction: 'Confirm Meeting Calendar',
    },
  ];

  const filteredRows = rows.filter(row => {
    const matchesSearch = row.hcpName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          row.institution.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIntent = intentFilter === 'ALL' || row.intentLevel === intentFilter;
    return matchesSearch && matchesIntent;
  });

  return (
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-10 py-6 flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-primary text-on-primary p-6 rounded-xl shadow-ambient">
        <div>
          <span className="bg-primary-container text-on-primary-container text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
            INTERNAL CRM OVERLAY
          </span>
          <h1 className="text-2xl font-bold mt-2">
            Institutional Access &amp; Omnichannel Dashboard
          </h1>
          <p className="text-xs text-on-primary-container mt-1">
            Real-time analytics on HCP engagement, calculator completion rates, and PTC review requests.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary-container">pulse</span>
          <span className="text-xs font-bold font-mono text-secondary-container uppercase">LIVE PIPELINE</span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm">
          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">Target Reached</span>
          <div className="text-2xl font-bold text-primary font-mono mt-1">1,248</div>
          <span className="text-[10px] text-secondary font-semibold">+14% this month</span>
        </div>
        <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm">
          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">OA Clicks</span>
          <div className="text-2xl font-bold text-primary font-mono mt-1">892</div>
          <span className="text-[10px] text-secondary font-semibold">71.4% CTR</span>
        </div>
        <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm">
          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">Calc Completions</span>
          <div className="text-2xl font-bold text-primary font-mono mt-1">412</div>
          <span className="text-[10px] text-secondary font-semibold">46.1% Conversion</span>
        </div>
        <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm">
          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">Dossier Downloads</span>
          <div className="text-2xl font-bold text-primary font-mono mt-1">318</div>
          <span className="text-[10px] text-secondary font-semibold">35.6% Conversion</span>
        </div>
        <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm col-span-2 md:col-span-1">
          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">Formulary Requests</span>
          <div className="text-2xl font-bold text-secondary font-mono mt-1">84</div>
          <span className="text-[10px] text-secondary font-semibold">Priority Leads</span>
        </div>
      </div>

      {/* Conversion Funnel & Roadmap */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Conversion Funnel */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
          <h3 className="font-bold text-base text-primary mb-4 flex items-center justify-between">
            HCP Journey Conversion Funnel
            <span className="material-symbols-outlined text-secondary text-lg">filter_alt</span>
          </h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-on-surface font-medium">Target Pharmacists Reached</span>
                <span className="font-mono font-bold">1,248 (100%)</span>
              </div>
              <div className="w-full bg-surface-variant rounded-full h-3">
                <div className="bg-primary h-3 rounded-full w-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-on-surface font-medium">Portal / Evidence Clicks</span>
                <span className="font-mono font-bold">892 (71.4%)</span>
              </div>
              <div className="w-full bg-surface-variant rounded-full h-3">
                <div className="bg-primary-container h-3 rounded-full w-[71.4%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-on-surface font-medium">Calculator Run Completed</span>
                <span className="font-mono font-bold">412 (33.0%)</span>
              </div>
              <div className="w-full bg-surface-variant rounded-full h-3">
                <div className="bg-secondary h-3 rounded-full w-[33%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-on-surface font-medium">Dossier Package Downloaded</span>
                <span className="font-mono font-bold">318 (25.4%)</span>
              </div>
              <div className="w-full bg-surface-variant rounded-full h-3">
                <div className="bg-secondary-container h-3 rounded-full w-[25.4%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-on-surface font-medium">Formulary Meeting Scheduled</span>
                <span className="font-mono font-bold">84 (6.7%)</span>
              </div>
              <div className="w-full bg-surface-variant rounded-full h-3">
                <div className="bg-tertiary-container h-3 rounded-full w-[12%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Roadmap */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
          <h3 className="font-bold text-base text-primary mb-4 flex items-center justify-between">
            2026 Formulary Relisting Roadmap
            <span className="material-symbols-outlined text-secondary text-lg">route</span>
          </h3>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container font-bold text-xs flex items-center justify-center flex-shrink-0">
                Q1
              </div>
              <div>
                <h4 className="text-xs font-bold text-primary">Evidence Dissemination &amp; WAC Rollout</h4>
                <p className="text-[11px] text-on-surface-variant">Publish $10/box pricing &amp; release interactive budget tools.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-surface-container-high text-primary font-bold text-xs flex items-center justify-center flex-shrink-0">
                Q2
              </div>
              <div>
                <h4 className="text-xs font-bold text-primary">P&amp;T Committee Engagement</h4>
                <p className="text-[11px] text-on-surface-variant">Conduct MSL meetings and deliver custom hospital dossiers.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-surface-container-high text-primary font-bold text-xs flex items-center justify-center flex-shrink-0">
                Q3
              </div>
              <div>
                <h4 className="text-xs font-bold text-primary">Formulary Voting &amp; Tier Placement</h4>
                <p className="text-[11px] text-on-surface-variant">Secure Tier 2 unrestricted hospital inclusion.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-surface-container-high text-primary font-bold text-xs flex items-center justify-center flex-shrink-0">
                Q4
              </div>
              <div>
                <h4 className="text-xs font-bold text-primary">Stocking &amp; Patient Protocol Rollout</h4>
                <p className="text-[11px] text-on-surface-variant">Establish hospital pharmacy stocking and order sets.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Table */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <h3 className="font-bold text-base text-primary">Institutional Activity Table</h3>
          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search HCP or Institution..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3 py-1.5 border border-outline-variant rounded text-xs bg-surface text-on-surface w-full md:w-60"
            />
            <select
              value={intentFilter}
              onChange={(e) => setIntentFilter(e.target.value)}
              className="px-3 py-1.5 border border-outline-variant rounded text-xs bg-surface text-on-surface"
            >
              <option value="ALL">All Intent Levels</option>
              <option value="PRIORITY">Priority</option>
              <option value="HIGH">High</option>
              <option value="MODERATE">Moderate</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-on-surface">
            <thead className="bg-surface-container-low text-on-surface-variant uppercase text-[10px] font-bold border-b border-outline-variant">
              <tr>
                <th className="p-3">HCP Name</th>
                <th className="p-3">Institution</th>
                <th className="p-3">Formulary Status</th>
                <th className="p-3">Source</th>
                <th className="p-3">Engagement</th>
                <th className="p-3">Intent</th>
                <th className="p-3">Next Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {filteredRows.map(row => (
                <tr key={row.id} className="hover:bg-surface transition-colors">
                  <td className="p-3 font-semibold text-primary">{row.hcpName}</td>
                  <td className="p-3 text-on-surface-variant">{row.institution}</td>
                  <td className="p-3">
                    <span className="bg-surface-container px-2 py-0.5 rounded text-[10px] font-bold">
                      {row.formularyStatus}
                    </span>
                  </td>
                  <td className="p-3 text-on-surface-variant">{row.source}</td>
                  <td className="p-3 font-mono font-bold text-secondary">{row.engagementScore}/100</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      row.intentLevel === 'PRIORITY'
                        ? 'bg-primary text-on-primary'
                        : row.intentLevel === 'HIGH'
                        ? 'bg-secondary-container text-on-secondary-container'
                        : 'bg-surface-container text-on-surface-variant'
                    }`}>
                      {row.intentLevel}
                    </span>
                  </td>
                  <td className="p-3 font-semibold text-primary">{row.nextAction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};
