import React, { useState } from 'react';
import { UserProfile } from '../types';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile;
  onSaveUser: (user: UserProfile) => void;
}

export const VerificationModal: React.FC<VerificationModalProps> = ({
  isOpen,
  onClose,
  user,
  onSaveUser,
}) => {
  const [formData, setFormData] = useState<UserProfile>({ ...user });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveUser({
      ...formData,
      isVerified: true,
    });
    onClose();
  };

  const handleDemoMode = () => {
    onSaveUser({
      fullName: 'Dr. PTC Pharmacist',
      role: 'pharmacist',
      licenseId: 'HCP-884910-US',
      institution: 'Metropolitan Hospital System',
      isPtcMember: true,
      city: 'Boston',
      country: 'us',
      isVerified: false,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm">
      <div className="w-full max-w-md bg-surface-container-lowest rounded-xl shadow-ambient border border-outline-variant overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header Section */}
        <div className="bg-surface p-6 border-b border-outline-variant relative">
          <div className="flex justify-between items-start mb-2">
            <h2 className="font-bold text-xl text-primary tracking-tight">C-LINK PTC Pharmacy</h2>
            <span className="bg-primary text-on-primary text-[10px] font-bold px-2 py-1 rounded uppercase shadow-sm">
              HCP ONLY
            </span>
          </div>
          <p className="font-semibold text-sm text-on-surface mb-1">
            Institutional evidence, designed for formulary decision-makers.
          </p>
          <p className="text-xs text-on-surface-variant">
            Access Product C clinical evidence, formulary resources, budget-impact tools, and professional support for hospital decision-making.
          </p>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-on-surface-variant hover:text-primary"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
          <div>
            <label className="block text-xs font-semibold text-on-surface mb-1" htmlFor="fullName">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Dr. Jane Doe"
              className="w-full border border-outline-variant rounded bg-surface-container-lowest px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary h-10"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-on-surface mb-1" htmlFor="role">
              Professional Role
            </label>
            <select
              id="role"
              required
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full border border-outline-variant rounded bg-surface-container-lowest px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary h-10"
            >
              <option value="">Select Role</option>
              <option value="pharmacist">Clinical Pharmacist</option>
              <option value="director">Pharmacy Director</option>
              <option value="physician">Physician</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-on-surface mb-1" htmlFor="license">
              HCP/Pharmacist License ID
            </label>
            <input
              id="license"
              type="text"
              required
              value={formData.licenseId}
              onChange={(e) => setFormData({ ...formData, licenseId: e.target.value })}
              placeholder="e.g. PH-9821034"
              className="w-full border border-outline-variant rounded bg-surface-container-lowest px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary h-10"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-on-surface mb-1" htmlFor="institution">
              Hospital/Institution
            </label>
            <input
              id="institution"
              type="text"
              required
              value={formData.institution}
              onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
              placeholder="e.g. Central City Hospital"
              className="w-full border border-outline-variant rounded bg-surface-container-lowest px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary h-10"
            />
          </div>

          <div className="flex items-center space-x-3 bg-surface p-3 rounded border border-outline-variant">
            <input
              id="ptcMember"
              type="checkbox"
              checked={formData.isPtcMember}
              onChange={(e) => setFormData({ ...formData, isPtcMember: e.target.checked })}
              className="h-4 w-4 text-primary border-outline-variant rounded focus:ring-primary"
            />
            <label htmlFor="ptcMember" className="text-xs font-medium text-on-surface">
              Confirm PTC Membership Status
            </label>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-on-surface mb-1" htmlFor="city">
                City/Region
              </label>
              <input
                id="city"
                type="text"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="City"
                className="w-full border border-outline-variant rounded bg-surface-container-lowest px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary h-10"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-on-surface mb-1" htmlFor="country">
                Country
              </label>
              <select
                id="country"
                required
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full border border-outline-variant rounded bg-surface-container-lowest px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary h-10"
              >
                <option value="">Select</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="eu">European Union</option>
              </select>
            </div>
          </div>

          <div className="flex items-start space-x-2 pt-2">
            <input
              id="consent"
              type="checkbox"
              required
              defaultChecked
              className="mt-0.5 h-4 w-4 text-primary border-outline-variant rounded focus:ring-primary"
            />
            <label htmlFor="consent" className="text-[11px] text-on-surface-variant">
              I certify that I am a licensed healthcare professional and consent to the processing of my data in accordance with institutional privacy policies.
            </label>
          </div>

          <div className="space-y-2 pt-3 border-t border-outline-variant">
            <button
              type="submit"
              className="w-full h-11 bg-primary text-on-primary font-bold text-xs uppercase tracking-wider rounded shadow-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              Verify and Continue
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button
              type="button"
              onClick={handleDemoMode}
              className="w-full h-11 bg-transparent text-secondary border-[1.5px] border-secondary font-bold text-xs uppercase tracking-wider rounded hover:bg-surface-container transition-colors flex items-center justify-center"
            >
              Enter Demo Mode
            </button>
          </div>
        </form>

        {/* Footer Links */}
        <div className="bg-surface-container p-3 border-t border-outline-variant flex flex-wrap justify-center gap-2 text-center text-[11px] text-on-surface-variant">
          <span className="hover:text-primary underline cursor-pointer">Privacy</span>
          <span>•</span>
          <span className="hover:text-primary underline cursor-pointer">Terms</span>
          <span>•</span>
          <span className="hover:text-primary underline cursor-pointer">Medical Information</span>
        </div>
      </div>
    </div>
  );
};
