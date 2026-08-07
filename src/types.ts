export type NavigationTab = 
  | 'home'
  | 'evidence'
  | 'calculator'
  | 'dossier'
  | 'rationale'
  | 'resources'
  | 'faq'
  | 'inquiry'
  | 'discussion'
  | 'crm';

export interface UserProfile {
  fullName: string;
  role: string;
  licenseId: string;
  institution: string;
  isPtcMember: boolean;
  city: string;
  country: string;
  isVerified: boolean;
}

export interface CalculatorState {
  step: number; // 0: landing, 1: profile, 2: assumptions, 3: results
  preset: 'conservative' | 'base' | 'optimistic';
  // Step 1: Hospital Profile
  hospitalType: string;
  hospitalSize: string;
  estEligiblePatients: number;
  currentTreatedPatients: number;
  currentProductCUtil: number;
  currentAltUtil: number;
  formularyStatus: string;
  procurementVolume: number;
  // Step 2: Cost & Assumptions
  currentTherapyPrice: number;
  productCPrice: number;
  annualTreatmentVolume: number;
  expectedUptake: number; // percentage
  switchingRate: number; // percentage
  complicationCosts: string;
  implementationCosts: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  type: 'PDF' | 'ZIP Bundle' | 'TOOL' | 'WEB PAGE' | 'PPTX';
  category: 'Clinical' | 'Safety' | 'Budget Impact' | 'Formulary';
  description: string;
  badge?: string;
  isConfidential?: boolean;
  isBookmarked?: boolean;
}

export interface CrmActivityRow {
  id: string;
  hcpName: string;
  institution: string;
  formularyStatus: 'Reviewing' | 'Approved' | 'Not Started' | 'Under Review';
  source: string;
  calcDossierStatus: string;
  engagementScore: number;
  intentLevel: 'PRIORITY' | 'HIGH' | 'MODERATE' | 'LOW';
  nextAction: string;
}
