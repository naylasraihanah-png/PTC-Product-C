import React, { useState } from 'react';

export const InquiryView: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [formData, setFormData] = useState({
    fullName: 'Dr. PTC Pharmacist',
    role: 'Pharmacist',
    institution: 'Metropolitan Hospital System',
    email: 'pharmacist@metropolitan.org',
    category: 'clinical',
    channel: 'email',
    question: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `REQ-${Math.floor(1000 + Math.random() * 9000)}-A`;
    setRefId(generatedId);
    setSubmitted(true);
  };

  return (
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-10 py-6 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-surface-container-lowest border border-outline-variant rounded-xl shadow-ambient overflow-hidden my-4">
        <div className="bg-surface-container-low p-6 border-b border-outline-variant flex justify-between items-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">MEDICAL INFORMATION</span>
            <h1 className="text-xl md:text-2xl font-bold text-primary mt-1">
              Request Medical or Market Access Information
            </h1>
          </div>
          <span className="material-symbols-outlined text-secondary text-3xl">contact_support</span>
        </div>

        {submitted ? (
          <div className="p-8 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl fill">check_circle</span>
            </div>
            <h2 className="text-xl font-bold text-primary">Inquiry Submitted Successfully</h2>
            <p className="text-xs text-on-surface-variant max-w-md leading-relaxed">
              Your request has been routed directly to our Medical Information Liaison team. Reference ID:
            </p>
            <div className="bg-surface-container px-4 py-2 rounded border border-outline-variant font-mono font-bold text-primary text-sm">
              {refId}
            </div>
            <p className="text-[11px] text-outline">
              You will receive a response within 24 business hours via your selected channel ({formData.channel}).
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-6 py-3 min-h-[48px] rounded bg-primary text-on-primary font-bold text-xs uppercase tracking-wider hover:bg-primary-container transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
            <div className="p-3 bg-surface-container-high rounded border border-outline-variant flex items-start gap-2 text-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-base text-primary">lock</span>
              <span>All inquiries are handled confidentially in compliance with medical information standards and HIPAA guidelines.</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full border border-outline-variant rounded bg-surface px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-secondary h-10"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">Professional Role</label>
                <input
                  type="text"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full border border-outline-variant rounded bg-surface px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-secondary h-10"
                />
              </div>

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
                <label className="block text-xs font-semibold text-on-surface mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-outline-variant rounded bg-surface px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-secondary h-10"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">Inquiry Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full border border-outline-variant rounded bg-surface px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-secondary h-10"
                >
                  <option value="clinical">Clinical Efficacy &amp; Trials</option>
                  <option value="safety">Safety &amp; Adverse Events</option>
                  <option value="pricing">WAC Pricing &amp; Contract Terms</option>
                  <option value="dossier">Request Custom Dossier Section</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">Preferred Response Channel</label>
                <select
                  value={formData.channel}
                  onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
                  className="w-full border border-outline-variant rounded bg-surface px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-secondary h-10"
                >
                  <option value="email">Email Summary</option>
                  <option value="phone">Phone Consultation</option>
                  <option value="virtual">Virtual Meeting with MSL</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-on-surface mb-1">Specific Medical / Access Question</label>
              <textarea
                required
                rows={4}
                value={formData.question}
                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                placeholder="Please describe your clinical or formulary query in detail..."
                className="w-full border border-outline-variant rounded bg-surface p-3 text-sm text-on-surface focus:ring-2 focus:ring-secondary"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full h-12 bg-primary text-on-primary font-bold text-xs uppercase tracking-wider rounded shadow-sm hover:bg-primary-container transition-colors flex items-center justify-center gap-2"
              >
                Submit Information Request
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
};
