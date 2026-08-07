import React, { useState } from 'react';

export const DiscussionView: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');
  const [formData, setFormData] = useState({
    institution: 'Metropolitan Hospital System',
    role: 'Pharmacy & Therapeutics Committee Member',
    status: 'under_review',
    topic: 'Relisting Rationale & Budget Impact Review',
    format: 'virtual',
    date: '2026-03-15',
    time: '14:00',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedCode = `FRM-2026-${Math.floor(1000 + Math.random() * 9000)}-A`;
    setRefCode(generatedCode);
    setSubmitted(true);
  };

  return (
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-10 py-6 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-surface-container-lowest border border-outline-variant rounded-xl shadow-ambient overflow-hidden my-4">
        <div className="bg-surface-container-low p-6 border-b border-outline-variant flex justify-between items-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">EXECUTIVE ENGAGEMENT</span>
            <h1 className="text-xl md:text-2xl font-bold text-primary mt-1">
              Request a Formulary Discussion
            </h1>
          </div>
          <span className="material-symbols-outlined text-secondary text-3xl">forum</span>
        </div>

        {submitted ? (
          <div className="p-8 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl fill">event_available</span>
            </div>
            <h2 className="text-xl font-bold text-primary">Discussion Request Confirmed</h2>
            <p className="text-xs text-on-surface-variant max-w-md leading-relaxed">
              Your meeting request has been logged and assigned high-priority status in our Institutional Access CRM. Confirmation Code:
            </p>
            <div className="bg-surface-container px-4 py-2 rounded border border-outline-variant font-mono font-bold text-primary text-sm">
              {refCode}
            </div>
            <p className="text-[11px] text-outline">
              An Institutional Liaison will send calendar invites and pre-meeting materials to your verified address.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-6 py-3 min-h-[48px] rounded bg-primary text-on-primary font-bold text-xs uppercase tracking-wider hover:bg-primary-container transition-colors"
            >
              Modify Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">Institution</label>
                <input
                  type="text"
                  required
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full border border-outline-variant rounded bg-surface px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-secondary h-10"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">PTC Role</label>
                <input
                  type="text"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full border border-outline-variant rounded bg-surface px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-secondary h-10"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">Target Formulary Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full border border-outline-variant rounded bg-surface px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-secondary h-10"
                >
                  <option value="under_review">Under Active Review</option>
                  <option value="not_listed">Currently Not Listed (Relisting)</option>
                  <option value="restricted">Restricted Tier Modification</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">Primary Discussion Topic</label>
                <input
                  type="text"
                  required
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full border border-outline-variant rounded bg-surface px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-secondary h-10"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">Meeting Format</label>
                <select
                  value={formData.format}
                  onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                  className="w-full border border-outline-variant rounded bg-surface px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-secondary h-10"
                >
                  <option value="virtual">Virtual Conference</option>
                  <option value="onsite">Onsite Hospital Visit</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">Preferred Date</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full border border-outline-variant rounded bg-surface px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-secondary h-10"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">Preferred Time</label>
                <input
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full border border-outline-variant rounded bg-surface px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-secondary h-10"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-on-surface mb-1">Additional Context / Agenda Notes</label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Include key committee priorities, clinical questions, or team attendees..."
                className="w-full border border-outline-variant rounded bg-surface p-3 text-sm text-on-surface focus:ring-2 focus:ring-secondary"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full h-12 bg-primary text-on-primary font-bold text-xs uppercase tracking-wider rounded shadow-sm hover:bg-primary-container transition-colors flex items-center justify-center gap-2"
              >
                Schedule Meeting &amp; Trigger CRM Session
                <span className="material-symbols-outlined text-sm">calendar_month</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
};
