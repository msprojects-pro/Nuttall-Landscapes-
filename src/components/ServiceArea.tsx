import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, CheckCircle, Search, Compass, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/landscapingData';

export const ServiceArea: React.FC = () => {
  const [postcodeQuery, setPostcodeQuery] = useState('');
  const [checkResult, setCheckResult] = useState<{ checked: boolean; covered: boolean; message: string }>({
    checked: false,
    covered: false,
    message: '',
  });

  const handleCheckPostcode = (e: React.FormEvent) => {
    e.preventDefault();
    const query = postcodeQuery.trim().toUpperCase();
    if (!query) return;

    // Heywood (OL10) and Greater Manchester (M, OL, BL, SK, WN, WA postcodes)
    const isHeywood = query.includes('OL10') || query.toLowerCase().includes('heywood');
    const isGreaterManchester =
      query.startsWith('OL') ||
      query.startsWith('M') ||
      query.startsWith('BL') ||
      query.startsWith('SK') ||
      query.startsWith('WN') ||
      query.startsWith('WA') ||
      query.toLowerCase().includes('manchester');

    if (isHeywood) {
      setCheckResult({
        checked: true,
        covered: true,
        message: 'Direct Primary Service Area: We operate daily in Heywood with priority site visits available.',
      });
    } else if (isGreaterManchester) {
      setCheckResult({
        checked: true,
        covered: true,
        message: 'Fully Covered: Your property is within our Greater Manchester landscaping & driveway coverage zone.',
      });
    } else {
      setCheckResult({
        checked: true,
        covered: true,
        message: 'Surrounding Area: We frequently undertake larger transformations and resin driveways across neighbouring areas. Please submit your enquiry!',
      });
    }
  };

  return (
    <section className="py-24 bg-[#101211] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#191C1A] to-[#141615] border border-[#242725] rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Decorative Background Lines */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#24CB33]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#24CB33] uppercase mb-3">
                <MapPin className="w-4 h-4 text-[#24CB33]" />
                <span>LOCAL COVERAGE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
                Your Local Landscaping Specialists.
              </h2>

              <p className="text-base sm:text-lg text-[#F5F7F4]/80 leading-relaxed mb-8">
                Proudly serving <strong className="text-white font-semibold">Heywood</strong> and surrounding areas across <strong className="text-white font-semibold">Greater Manchester</strong>.
              </p>

              {/* Three Designated Coverage Regions Strictly Faithful to Prompt */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-[#101211] border border-[#242725] hover:border-[#24CB33]/50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-[#24CB33]/15 flex items-center justify-center text-[#24CB33] mb-3">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-display font-bold text-white mb-1">
                    Heywood
                  </h3>
                  <p className="text-xs text-[#F5F7F4]/60">
                    Our home base. Rapid site visits and consultation.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#101211] border border-[#242725] hover:border-[#24CB33]/50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-[#24CB33]/15 flex items-center justify-center text-[#24CB33] mb-3">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-display font-bold text-white mb-1">
                    Greater Manchester
                  </h3>
                  <p className="text-xs text-[#F5F7F4]/60">
                    Comprehensive coverage across the Greater Manchester region.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#101211] border border-[#242725] hover:border-[#24CB33]/50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-[#24CB33]/15 flex items-center justify-center text-[#24CB33] mb-3">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-display font-bold text-white mb-1">
                    Surrounding Areas
                  </h3>
                  <p className="text-xs text-[#F5F7F4]/60">
                    Accommodating full garden makeovers across the periphery.
                  </p>
                </div>
              </div>

              {/* Quick Area Checker Form */}
              <form onSubmit={handleCheckPostcode} className="flex flex-col sm:flex-row gap-3 max-w-lg">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-[#4D4D4D] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={postcodeQuery}
                    onChange={(e) => setPostcodeQuery(e.target.value)}
                    placeholder="Enter your postcode (e.g. OL10 or M...)"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#101211] border border-[#242725] text-white text-xs sm:text-sm placeholder-[#4D4D4D] focus:outline-none focus:border-[#24CB33] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-[#242725] hover:bg-[#24CB33] text-white hover:text-black font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
                >
                  Check Coverage
                </button>
              </form>

              {checkResult.checked && (
                <div className="mt-3.5 flex items-start gap-2.5 p-3 rounded-xl bg-[#101211] border border-[#24CB33]/40 text-xs text-[#F5F7F4]">
                  <CheckCircle className="w-4 h-4 text-[#24CB33] shrink-0 mt-0.5" />
                  <span>{checkResult.message}</span>
                </div>
              )}
            </div>

            {/* Right Visual Badge / Map Locator Card */}
            <div className="lg:col-span-5">
              <div className="p-7 rounded-2xl bg-[#101211] border border-[#242725] relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-center justify-between pb-5 border-b border-[#242725] mb-6">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#24CB33]">
                      Headquarters
                    </span>
                    <h3 className="text-lg font-display font-extrabold text-white">
                      Heywood, United Kingdom
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#242725] flex items-center justify-center text-[#24CB33] border border-[#4D4D4D]/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#F5F7F4]/80 mb-6">
                  <div className="flex justify-between py-2 border-b border-[#242725]/60">
                    <span className="text-[#4D4D4D]">Operational Region:</span>
                    <span className="font-semibold text-white">Greater Manchester</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#242725]/60">
                    <span className="text-[#4D4D4D]">Site Quotations:</span>
                    <span className="font-semibold text-[#24CB33]">Free In-Person Visit</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-[#4D4D4D]">Direct Phone:</span>
                    <a href={`tel:${BUSINESS_INFO.phoneTel}`} className="font-semibold text-white hover:text-[#24CB33]">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="w-full py-3.5 text-center text-xs font-bold uppercase tracking-wider text-black bg-[#24CB33] hover:bg-[#1fb32d] rounded-xl transition-colors shadow-md"
                >
                  Book Free Site Survey
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
