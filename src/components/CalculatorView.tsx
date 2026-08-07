import React, { useState } from 'react';
import { CalculatorState, NavigationTab } from '../types';

interface CalculatorViewProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const CalculatorView: React.FC<CalculatorViewProps> = ({ onNavigate }) => {
  const [calcState, setCalcState] = useState<CalculatorState>({
    step: 0,
    preset: 'base',
    hospitalType: 'academic',
    hospitalSize: 'medium',
    estEligiblePatients: 12500,
    currentTreatedPatients: 3500,
    currentProductCUtil: 10,
    currentAltUtil: 80,
    formularyStatus: 'under_review',
    procurementVolume: 15000,
    currentTherapyPrice: 25.5,
    productCPrice: 10.0,
    annualTreatmentVolume: 15000,
    expectedUptake: 45,
    switchingRate: 25,
    complicationCosts: '',
    implementationCosts: '',
  });

  const [showMethodology, setShowMethodology] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const applyPreset = (preset: 'conservative' | 'base' | 'optimistic') => {
    if (preset === 'conservative') {
      setCalcState(prev => ({
        ...prev,
        preset,
        expectedUptake: 10,
        switchingRate: 15,
        annualTreatmentVolume: 7500,
      }));
    } else if (preset === 'base') {
      setCalcState(prev => ({
        ...prev,
        preset,
        expectedUptake: 45,
        switchingRate: 25,
        annualTreatmentVolume: 15000,
      }));
    } else {
      setCalcState(prev => ({
        ...prev,
        preset,
        expectedUptake: 40,
        switchingRate: 45,
        annualTreatmentVolume: 30000,
      }));
    }
  };

  // Calculations for Step 3
  const calculateScenarios = () => {
    // Eligible patients constant: 12,500
    const eligible = calcState.estEligiblePatients || 12500;
    
    // Base Case
    const basePts = 2500;
    const baseVol = 15000;
    const baseShare = '20%';
    const baseImpact = '-$1.2M';
    const baseCostDiff = '+$450K';

    // Conservative Case
    const consPts = 1250;
    const consVol = 7500;
    const consShare = '10%';
    const consImpact = '-$600K';
    const consCostDiff = '+$225K';

    // Optimistic Case
    const optPts = 5000;
    const optVol = 30000;
    const optShare = '40%';
    const optImpact = '-$2.4M';
    const optCostDiff = '+$900K';

    return {
      eligible,
      base: { pts: basePts, vol: baseVol, share: baseShare, impact: baseImpact, diff: baseCostDiff },
      conservative: { pts: consPts, vol: consVol, share: consShare, impact: consImpact, diff: consCostDiff },
      optimistic: { pts: optPts, vol: optVol, share: optShare, impact: optImpact, diff: optCostDiff },
    };
  };

  const results = calculateScenarios();

  return (
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-10 py-6 flex flex-col items-center">
      {/* STEP 0: LANDING */}
      {calcState.step === 0 && (
        <div className="w-full max-w-3xl bg-surface-container-lowest border border-outline-variant rounded-xl shadow-ambient overflow-hidden my-4">
          <div className="bg-surface-container-low p-6 md:p-10 border-b border-outline-variant flex flex-col md:flex-row items-center gap-6 relative">
            <div className="absolute top-4 right-4 bg-primary text-on-primary text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-sm">
              HCP Only
            </div>
            <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0 shadow-inner">
              <span className="material-symbols-outlined text-[40px] md:text-[48px] text-on-secondary-container fill">
                calculate
              </span>
            </div>
            <div className="text-center md:text-left flex-grow">
              <h1 className="font-bold text-2xl md:text-3xl text-primary mb-2">
                Hospital Budget-Impact Calculator
              </h1>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Explore illustrative Product C acquisition-cost scenarios using editable hospital assumptions.
              </p>
            </div>
          </div>

          <div className="p-6 md:p-10 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 border border-outline-variant rounded-lg bg-surface-bright">
                <span className="material-symbols-outlined text-secondary">timer</span>
                <div>
                  <div className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                    Estimated Time
                  </div>
                  <div className="text-sm font-semibold text-primary">~ 4 minutes</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 border border-outline-variant rounded-lg bg-surface-bright">
                <span className="material-symbols-outlined text-secondary">format_list_numbered</span>
                <div>
                  <div className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                    Process
                  </div>
                  <div className="text-sm font-semibold text-primary">3 Steps</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 border border-outline-variant rounded-lg bg-surface-bright">
                <span className="material-symbols-outlined text-secondary">verified_user</span>
                <div>
                  <div className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                    Data Privacy
                  </div>
                  <div className="text-sm font-semibold text-primary">No PHI Required</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold text-primary mb-4 border-b border-outline-variant pb-2">
                Calculation Flow
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center font-bold text-primary flex-shrink-0 text-sm">
                    1
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary">Hospital Profile</div>
                    <div className="text-xs text-on-surface-variant leading-relaxed">
                      Define institution size, patient volume, and current formulary landscape.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center font-bold text-primary flex-shrink-0 text-sm">
                    2
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary">Cost Assumptions</div>
                    <div className="text-xs text-on-surface-variant leading-relaxed">
                      Input current acquisition costs, anticipated contract tiers, and operational overhead.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center font-bold text-primary flex-shrink-0 text-sm">
                    3
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary">Scenario Results</div>
                    <div className="text-xs text-on-surface-variant leading-relaxed">
                      Review projected multi-year financial impact and comparative analyses.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-4 pt-6 border-t border-outline-variant">
              <button
                onClick={() => setCalcState({ ...calcState, step: 1 })}
                className="bg-primary text-on-primary hover:bg-primary-container transition-colors py-3 px-6 rounded-lg text-xs font-bold uppercase tracking-wider w-full md:w-auto min-h-[48px] flex items-center justify-center gap-2 shadow-sm"
              >
                Start Calculation
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button
                onClick={() => setShowMethodology(true)}
                className="border-[1.5px] border-secondary text-secondary hover:bg-surface-container-highest transition-colors py-3 px-6 rounded-lg text-xs font-bold uppercase tracking-wider w-full md:w-auto min-h-[48px] flex items-center justify-center"
              >
                View Methodology
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 1: HOSPITAL PROFILE */}
      {calcState.step === 1 && (
        <div className="w-full max-w-[1280px]">
          <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-1">
                BUDGET IMPACT MODEL
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Hospital Profile</h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-on-surface-variant">Step 1 of 3</span>
              <div className="w-32 h-2 bg-surface-variant rounded-full overflow-hidden flex">
                <div className="h-full bg-secondary w-1/3"></div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest shadow-ambient rounded-xl border border-outline-variant overflow-hidden mb-6">
            <div className="bg-surface-container-low px-6 py-4 border-b border-outline-variant flex justify-between items-center">
              <h3 className="text-base font-bold text-primary">Institution Data Parameters</h3>
              <span className="bg-primary text-on-primary text-[10px] font-bold uppercase px-2 py-1 rounded">
                SECURE INPUT
              </span>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="h-type" className="block text-xs font-semibold text-on-surface mb-1">Hospital Type</label>
                  <select
                    id="h-type"
                    value={calcState.hospitalType}
                    onChange={(e) => setCalcState({ ...calcState, hospitalType: e.target.value })}
                    className="w-full border border-outline-variant rounded bg-surface-container-lowest px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary h-12"
                  >
                    <option value="gov">Government</option>
                    <option value="private">Private</option>
                    <option value="academic">Academic</option>
                    <option value="specialist">Specialist</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="h-size" className="block text-xs font-semibold text-on-surface mb-1">Hospital Size</label>
                  <select
                    id="h-size"
                    value={calcState.hospitalSize}
                    onChange={(e) => setCalcState({ ...calcState, hospitalSize: e.target.value })}
                    className="w-full border border-outline-variant rounded bg-surface-container-lowest px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary h-12"
                  >
                    <option value="small">Small (&lt; 100 beds)</option>
                    <option value="medium">Medium (100 - 500 beds)</option>
                    <option value="large">Large (&gt; 500 beds)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="h-eligible" className="block text-xs font-semibold text-on-surface mb-1">
                    Est. annual eligible dyslipidaemia patients
                  </label>
                  <input
                    id="h-eligible"
                    type="number"
                    value={calcState.estEligiblePatients}
                    onChange={(e) => setCalcState({ ...calcState, estEligiblePatients: Number(e.target.value) })}
                    placeholder="e.g., 5000"
                    className="w-full border border-outline-variant rounded bg-surface-container-lowest px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary h-12"
                  />
                </div>

                <div>
                  <label htmlFor="h-treated" className="block text-xs font-semibold text-on-surface mb-1">
                    Current annual treated patients
                  </label>
                  <input
                    id="h-treated"
                    type="number"
                    value={calcState.currentTreatedPatients}
                    onChange={(e) => setCalcState({ ...calcState, currentTreatedPatients: Number(e.target.value) })}
                    placeholder="e.g., 3500"
                    className="w-full border border-outline-variant rounded bg-surface-container-lowest px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary h-12"
                  />
                </div>

                <div>
                  <label htmlFor="h-cutil" className="block text-xs font-semibold text-on-surface mb-1">
                    Current Product C utilization (%)
                  </label>
                  <div className="relative">
                    <input
                      id="h-cutil"
                      type="number"
                      value={calcState.currentProductCUtil}
                      onChange={(e) => setCalcState({ ...calcState, currentProductCUtil: Number(e.target.value) })}
                      className="w-full border border-outline-variant rounded bg-surface-container-lowest px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary h-12 pr-8"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-on-surface-variant">%</span>
                  </div>
                </div>

                <div>
                  <label htmlFor="h-altutil" className="block text-xs font-semibold text-on-surface mb-1">
                    Current alternative therapy utilization (%)
                  </label>
                  <div className="relative">
                    <input
                      id="h-altutil"
                      type="number"
                      value={calcState.currentAltUtil}
                      onChange={(e) => setCalcState({ ...calcState, currentAltUtil: Number(e.target.value) })}
                      className="w-full border border-outline-variant rounded bg-surface-container-lowest px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary h-12 pr-8"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-on-surface-variant">%</span>
                  </div>
                </div>

                <div>
                  <label htmlFor="h-status" className="block text-xs font-semibold text-on-surface mb-1">Formulary Status</label>
                  <select
                    id="h-status"
                    value={calcState.formularyStatus}
                    onChange={(e) => setCalcState({ ...calcState, formularyStatus: e.target.value })}
                    className="w-full border border-outline-variant rounded bg-surface-container-lowest px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary h-12"
                  >
                    <option value="not_listed">Not Listed</option>
                    <option value="previously_listed">Previously Listed</option>
                    <option value="under_review">Under Review</option>
                    <option value="restricted">Restricted</option>
                    <option value="currently_listed">Currently Listed</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="h-vol" className="block text-xs font-semibold text-on-surface mb-1">
                    Annual procurement volume (Units)
                  </label>
                  <input
                    id="h-vol"
                    type="number"
                    value={calcState.procurementVolume}
                    onChange={(e) => setCalcState({ ...calcState, procurementVolume: Number(e.target.value) })}
                    placeholder="e.g., 10000"
                    className="w-full border border-outline-variant rounded bg-surface-container-lowest px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary h-12"
                  />
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low px-6 py-4 border-t border-outline-variant flex justify-between items-center">
              <button
                onClick={() => setCalcState({ ...calcState, step: 0 })}
                className="text-xs font-bold uppercase text-on-surface-variant hover:text-primary"
              >
                Back
              </button>
              <button
                onClick={() => setCalcState({ ...calcState, step: 2 })}
                className="bg-primary text-on-primary font-bold text-xs uppercase tracking-wider px-6 h-12 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-container transition-colors"
              >
                Continue to Cost Assumptions
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: COST & ASSUMPTIONS */}
      {calcState.step === 2 && (
        <div className="w-full max-w-[1280px]">
          <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Cost &amp; Assumptions</h2>
              <p className="text-xs text-on-surface-variant mt-1">
                Step 2 of 3: Define financial parameters for impact modeling.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-on-surface-variant">Step 2 of 3</span>
              <div className="w-32 h-2 bg-surface-variant rounded-full overflow-hidden flex">
                <div className="h-full bg-secondary w-2/3"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Inputs */}
            <div className="lg:col-span-8 space-y-6">
              {/* Presets */}
              <div className="glass-panel rounded-xl p-3">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => applyPreset('conservative')}
                    className={`flex-1 text-xs font-semibold py-2.5 px-4 rounded-lg border transition-colors flex items-center justify-center gap-2 ${
                      calcState.preset === 'conservative'
                        ? 'bg-primary text-on-primary border-primary shadow-sm'
                        : 'bg-surface-container hover:bg-surface-container-high text-on-surface border-outline-variant'
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm">trending_flat</span>
                    Conservative
                  </button>
                  <button
                    onClick={() => applyPreset('base')}
                    className={`flex-1 text-xs font-semibold py-2.5 px-4 rounded-lg border transition-colors flex items-center justify-center gap-2 ${
                      calcState.preset === 'base'
                        ? 'bg-primary text-on-primary border-primary shadow-sm'
                        : 'bg-surface-container hover:bg-surface-container-high text-on-surface border-outline-variant'
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm">trending_up</span>
                    Base
                  </button>
                  <button
                    onClick={() => applyPreset('optimistic')}
                    className={`flex-1 text-xs font-semibold py-2.5 px-4 rounded-lg border transition-colors flex items-center justify-center gap-2 ${
                      calcState.preset === 'optimistic'
                        ? 'bg-primary text-on-primary border-primary shadow-sm'
                        : 'bg-surface-container hover:bg-surface-container-high text-on-surface border-outline-variant'
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm">rocket_launch</span>
                    Optimistic
                  </button>
                </div>
              </div>

              {/* Acquisition Costs */}
              <section className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-sm">
                <div className="bg-surface-container-low px-4 py-3 border-b border-outline-variant flex justify-between items-center">
                  <h3 className="text-sm font-bold text-primary">Acquisition Costs</h3>
                  <span className="material-symbols-outlined text-on-surface-variant text-sm cursor-help" title="Standard box pricing">
                    info
                  </span>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="p-curr" className="block text-xs font-semibold text-on-surface-variant mb-2">
                      Current Therapy (/box)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-on-surface-variant font-mono text-sm">$</span>
                      <input
                        id="p-curr"
                        type="number"
                        step="0.10"
                        value={calcState.currentTherapyPrice}
                        onChange={(e) => setCalcState({ ...calcState, currentTherapyPrice: Number(e.target.value) })}
                        className="w-full pl-8 pr-4 py-2 bg-surface border border-outline-variant rounded-lg font-mono text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="p-prodc" className="block text-xs font-semibold text-on-surface-variant mb-2 flex items-center gap-2">
                      Product C (/box)
                      <span className="bg-primary-fixed text-on-primary-fixed px-1.5 py-0.5 rounded text-[10px] font-bold">
                        PREFILL
                      </span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-on-surface-variant font-mono text-sm">$</span>
                      <input
                        id="p-prodc"
                        type="number"
                        step="0.10"
                        value={calcState.productCPrice}
                        onChange={(e) => setCalcState({ ...calcState, productCPrice: Number(e.target.value) })}
                        className="w-full pl-8 pr-4 py-2 bg-surface border border-outline-variant rounded-lg font-mono text-sm"
                      />
                    </div>
                    <p className="text-[11px] text-outline mt-1">Ref: Previous estimate $20.00</p>
                  </div>
                </div>
              </section>

              {/* Market Dynamics */}
              <section className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-sm">
                <div className="bg-surface-container-low px-4 py-3 border-b border-outline-variant">
                  <h3 className="text-sm font-bold text-primary">Market Dynamics</h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="m-vol" className="block text-xs font-semibold text-on-surface-variant mb-2">
                        Annual Treatment Volume
                      </label>
                      <input
                        id="m-vol"
                        type="number"
                        value={calcState.annualTreatmentVolume}
                        onChange={(e) => setCalcState({ ...calcState, annualTreatmentVolume: Number(e.target.value) })}
                        className="w-full px-4 py-2 bg-surface border border-outline-variant rounded-lg font-mono text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="m-uptake" className="block text-xs font-semibold text-on-surface-variant mb-2">
                        Expected Product C Uptake (%)
                      </label>
                      <div className="flex items-center gap-4">
                        <input
                          id="m-uptake"
                          type="range"
                          min="0"
                          max="100"
                          value={calcState.expectedUptake}
                          onChange={(e) => setCalcState({ ...calcState, expectedUptake: Number(e.target.value) })}
                          className="w-full h-2 bg-surface-variant rounded-lg appearance-none cursor-pointer"
                        />
                        <span className="font-mono text-sm font-bold w-12 text-right">{calcState.expectedUptake}%</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="m-switch" className="block text-xs font-semibold text-on-surface-variant mb-2">
                      Switching Rate (Current to Product C)
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        id="m-switch"
                        type="range"
                        min="0"
                        max="100"
                        value={calcState.switchingRate}
                        onChange={(e) => setCalcState({ ...calcState, switchingRate: Number(e.target.value) })}
                        className="w-full h-2 bg-surface-variant rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="font-mono text-sm font-bold w-12 text-right">{calcState.switchingRate}%</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Additional Cost Assumptions */}
              <section className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-sm">
                <div className="bg-surface-container-low px-4 py-3 border-b border-outline-variant flex justify-between items-center">
                  <h3 className="text-sm font-bold text-primary">Additional Cost Assumptions</h3>
                  <span className="text-[10px] font-bold text-outline uppercase tracking-wider">OPTIONAL</span>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="a-comp" className="block text-xs font-semibold text-on-surface-variant mb-2">
                      Complication-Related Costs
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-on-surface-variant font-mono text-sm">$</span>
                      <input
                        id="a-comp"
                        type="text"
                        placeholder="Per incident"
                        value={calcState.complicationCosts}
                        onChange={(e) => setCalcState({ ...calcState, complicationCosts: e.target.value })}
                        className="w-full pl-8 pr-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="a-impl" className="block text-xs font-semibold text-on-surface-variant mb-2">
                      Implementation Costs
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-on-surface-variant font-mono text-sm">$</span>
                      <input
                        id="a-impl"
                        type="text"
                        placeholder="One-time cost"
                        value={calcState.implementationCosts}
                        onChange={(e) => setCalcState({ ...calcState, implementationCosts: e.target.value })}
                        className="w-full pl-8 pr-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column: Market Share Widget & Actions */}
            <div className="lg:col-span-4 space-y-6">
              <div className="glass-panel rounded-xl p-6">
                <h4 className="text-base font-bold text-primary mb-4 flex items-center justify-between">
                  Market Share
                  <span className="material-symbols-outlined text-tertiary-container text-lg">pie_chart</span>
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-on-surface-variant">Current Therapy</span>
                      <span className="font-mono font-semibold">{100 - calcState.expectedUptake}%</span>
                    </div>
                    <div className="w-full bg-surface-variant rounded-full h-2">
                      <div
                        className="bg-outline h-2 rounded-full transition-all duration-300"
                        style={{ width: `${100 - calcState.expectedUptake}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-on-surface-variant">Projected Product C</span>
                      <span className="font-mono font-bold text-tertiary-container">{calcState.expectedUptake}%</span>
                    </div>
                    <div className="w-full bg-surface-variant rounded-full h-2">
                      <div
                        className="bg-tertiary-container h-2 rounded-full transition-all duration-300"
                        style={{ width: `${calcState.expectedUptake}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-6 shadow-sm flex flex-col gap-3">
                <button
                  onClick={() => setCalcState({ ...calcState, step: 3 })}
                  className="w-full bg-primary hover:bg-primary-container text-on-primary text-xs font-bold uppercase tracking-wider py-3 rounded-lg transition-colors flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <span className="material-symbols-outlined">calculate</span>
                  Calculate Scenarios
                </button>
                <button
                  onClick={() => setCalcState({ ...calcState, step: 1 })}
                  className="w-full bg-transparent border-[1.5px] border-secondary text-secondary hover:bg-surface-container-highest text-xs font-bold uppercase tracking-wider py-2.5 rounded-lg transition-colors"
                >
                  Review Assumptions
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: SCENARIO RESULTS */}
      {calcState.step === 3 && (
        <div className="w-full max-w-[1280px]">
          <div className="flex flex-col gap-2 border-b border-outline-variant pb-4 mb-6">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-on-surface-variant">
              <span>Step 3 of 3: Results</span>
              <span className="bg-surface-container-high px-2 py-1 rounded text-primary">
                Budget-Impact Scenario
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-primary">
              Illustrative Institutional Scenario Results
            </h1>
            <p className="text-xs text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">info</span>
              Illustrative simulation for strategic presentation purposes.
            </p>
          </div>

          {/* Scenario Cards Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Base Scenario (Highlighted) */}
            <div className="bg-surface-container-lowest border-2 border-primary rounded-xl shadow-ambient flex flex-col relative overflow-hidden order-1 lg:order-2">
              <div className="absolute top-0 right-0 bg-primary text-on-primary text-[10px] uppercase font-bold px-2 py-1 rounded-bl-md">
                BASE CASE
              </div>
              <div className="bg-surface-container-low p-4 border-b border-outline-variant">
                <h3 className="text-lg font-bold text-primary">Base</h3>
                <p className="text-xs text-on-surface-variant">Moderate adoption</p>
              </div>
              <div className="p-4 flex flex-col gap-3 text-xs">
                <div className="flex justify-between items-center border-b border-outline-variant pb-2">
                  <span className="font-bold text-on-surface-variant uppercase tracking-wider">Eligible Patients</span>
                  <span className="font-mono text-primary font-bold">{results.eligible.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center border-b border-outline-variant pb-2">
                  <span className="font-bold text-on-surface-variant uppercase tracking-wider">Projected Prod C Pts</span>
                  <span className="font-mono text-primary font-bold">{results.base.pts.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center border-b border-outline-variant pb-2">
                  <span className="font-bold text-on-surface-variant uppercase tracking-wider">Annual Volume</span>
                  <span className="font-mono text-primary font-bold">{results.base.vol.toLocaleString()} units</span>
                </div>
                <div className="flex justify-between items-center border-b border-outline-variant pb-2">
                  <span className="font-bold text-on-surface-variant uppercase tracking-wider">Share Assumption</span>
                  <span className="font-mono text-primary font-bold">{results.base.share}</span>
                </div>
                <div className="pt-2">
                  <div className="font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                    Acquisition-cost Impact
                  </div>
                  <div className="text-xl font-bold text-secondary">{results.base.impact}</div>
                </div>
                <div>
                  <div className="font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                    Estimated Cost Difference
                  </div>
                  <div className="text-xl font-bold text-error">{results.base.diff}</div>
                </div>
              </div>
            </div>

            {/* Conservative Scenario */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm flex flex-col opacity-95 order-2 lg:order-1">
              <div className="bg-surface-container-low p-4 border-b border-outline-variant">
                <h3 className="text-lg font-bold text-primary">Conservative</h3>
                <p className="text-xs text-on-surface-variant">Slow adoption</p>
              </div>
              <div className="p-4 flex flex-col gap-3 text-xs">
                <div className="flex justify-between items-center border-b border-outline-variant pb-2">
                  <span className="font-bold text-on-surface-variant uppercase tracking-wider">Eligible Patients</span>
                  <span className="font-mono text-primary font-bold">{results.eligible.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center border-b border-outline-variant pb-2">
                  <span className="font-bold text-on-surface-variant uppercase tracking-wider">Projected Prod C Pts</span>
                  <span className="font-mono text-primary font-bold">{results.conservative.pts.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center border-b border-outline-variant pb-2">
                  <span className="font-bold text-on-surface-variant uppercase tracking-wider">Annual Volume</span>
                  <span className="font-mono text-primary font-bold">{results.conservative.vol.toLocaleString()} units</span>
                </div>
                <div className="flex justify-between items-center border-b border-outline-variant pb-2">
                  <span className="font-bold text-on-surface-variant uppercase tracking-wider">Share Assumption</span>
                  <span className="font-mono text-primary font-bold">{results.conservative.share}</span>
                </div>
                <div className="pt-2">
                  <div className="font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                    Acquisition-cost Impact
                  </div>
                  <div className="text-xl font-bold text-secondary">{results.conservative.impact}</div>
                </div>
                <div>
                  <div className="font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                    Estimated Cost Difference
                  </div>
                  <div className="text-xl font-bold text-error">{results.conservative.diff}</div>
                </div>
              </div>
            </div>

            {/* Optimistic Scenario */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm flex flex-col opacity-95 order-3 lg:order-3">
              <div className="bg-surface-container-low p-4 border-b border-outline-variant">
                <h3 className="text-lg font-bold text-primary">Optimistic</h3>
                <p className="text-xs text-on-surface-variant">Rapid adoption</p>
              </div>
              <div className="p-4 flex flex-col gap-3 text-xs">
                <div className="flex justify-between items-center border-b border-outline-variant pb-2">
                  <span className="font-bold text-on-surface-variant uppercase tracking-wider">Eligible Patients</span>
                  <span className="font-mono text-primary font-bold">{results.eligible.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center border-b border-outline-variant pb-2">
                  <span className="font-bold text-on-surface-variant uppercase tracking-wider">Projected Prod C Pts</span>
                  <span className="font-mono text-primary font-bold">{results.optimistic.pts.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center border-b border-outline-variant pb-2">
                  <span className="font-bold text-on-surface-variant uppercase tracking-wider">Annual Volume</span>
                  <span className="font-mono text-primary font-bold">{results.optimistic.vol.toLocaleString()} units</span>
                </div>
                <div className="flex justify-between items-center border-b border-outline-variant pb-2">
                  <span className="font-bold text-on-surface-variant uppercase tracking-wider">Share Assumption</span>
                  <span className="font-mono text-primary font-bold">{results.optimistic.share}</span>
                </div>
                <div className="pt-2">
                  <div className="font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                    Acquisition-cost Impact
                  </div>
                  <div className="text-xl font-bold text-secondary">{results.optimistic.impact}</div>
                </div>
                <div>
                  <div className="font-bold text-on-surface-variant uppercase tracking-wider mb-1">
                    Estimated Cost Difference
                  </div>
                  <div className="text-xl font-bold text-error">{results.optimistic.diff}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-end mt-8 border-t border-outline-variant pt-8">
            <button
              onClick={() => setCalcState({ ...calcState, step: 2 })}
              className="px-6 py-3 min-h-[48px] rounded border border-primary text-primary hover:bg-surface-container-highest transition-colors font-bold text-xs uppercase tracking-wider"
            >
              Adjust Assumptions
            </button>
            <button
              onClick={() => onNavigate('discussion')}
              className="px-6 py-3 min-h-[48px] rounded border-[1.5px] border-secondary text-secondary hover:bg-surface-container-highest transition-colors font-bold text-xs uppercase tracking-wider"
            >
              Request Formulary Discussion
            </button>
            <button
              onClick={() => setShowSuccessModal(true)}
              className="px-6 py-3 min-h-[48px] rounded bg-primary text-on-primary hover:opacity-90 transition-opacity font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">download</span>
              Download One-Page Budget Summary
            </button>
          </div>
        </div>
      )}

      {/* Methodology Disclaimer Modal */}
      {showMethodology && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-tertiary/50 backdrop-blur-sm">
          <div className="bg-surface-container-lowest rounded-xl max-w-md w-full shadow-ambient border border-outline-variant overflow-hidden">
            <div className="bg-surface-container-low px-6 py-4 border-b border-outline-variant flex justify-between items-center">
              <h3 className="font-bold text-lg text-primary">Methodology Disclaimer</h3>
              <button
                onClick={() => setShowMethodology(false)}
                className="text-on-surface-variant hover:text-primary p-1"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-6">
              <div className="flex gap-4 items-start mb-4 p-4 bg-error-container/20 border border-error/20 rounded-lg">
                <span className="material-symbols-outlined text-error">info</span>
                <p className="text-xs text-on-surface font-medium leading-relaxed">
                  This calculator is an illustrative strategic simulation and does not constitute a validated health-economic model.
                </p>
              </div>
              <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">
                Outputs are highly dependent on user-defined inputs and should not be used as the sole basis for purchasing or clinical decisions. Please consult with your institutional financial governance board.
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => setShowMethodology(false)}
                  className="bg-primary text-on-primary hover:bg-primary-container transition-colors py-2 px-4 rounded-lg text-xs font-bold uppercase tracking-wider min-h-[44px]"
                >
                  Acknowledge
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Download Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/20 backdrop-blur-sm p-4">
          <div className="bg-surface-container-lowest rounded-xl shadow-ambient p-6 max-w-sm w-full border border-outline-variant">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-3xl fill">check_circle</span>
              </div>
              <h3 className="font-bold text-lg text-primary">Download Complete</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                The illustrative budget summary PDF has been successfully generated and saved to your device downloads.
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="mt-2 w-full px-6 py-3 min-h-[48px] rounded bg-primary text-on-primary font-bold text-xs uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
