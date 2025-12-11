'use client';

import { useState } from 'react';

export default function HealthcarePage() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const featureDescriptions: { [key: string]: string } = {
    'whatsapp': 'Your SEO manager on WhatsApp—guides you, handles tasks, and supports your growth.',
    'protection': 'Alerts you instantly if anyone makes unauthorized changes to your profile.',
    'review': 'Automatically replies to all reviews with smart, sentiment-based responses.',
    'microsite': 'A clean mini-website built from your Google profile to boost visibility.',
    'posts': 'Publish and schedule unlimited posts to keep your profile active.',
    'report': 'Monthly report with calls, visits, reviews, rankings, and insights.',
    'escalation': 'Instant WhatsApp alerts for negative reviews so you can respond quickly.',
    'ranking': 'Monthly keyword ranking updates for your key services.',
    'audit': 'Continuous checks for missing info, errors, or improvements—plus fix suggestions.',
    'images': 'Personalised AI-generated images to enhance your Google posts.',
    'citations': 'Creates listings on key directories like Practo, Justdial, and Medindia to boost local SEO.',
  };

  const InfoButton = ({ feature }: { feature: string }) => (
    <div className="relative inline-block ml-1">
      <button
        onMouseEnter={() => setActiveTooltip(feature)}
        onMouseLeave={() => setActiveTooltip(null)}
        onClick={() => setActiveTooltip(activeTooltip === feature ? null : feature)}
        className="inline-flex items-center justify-center w-4 h-4 text-xs text-white bg-blue-500 rounded-full hover:bg-blue-600 transition cursor-pointer"
        aria-label="More info"
      >
        i
      </button>
      {activeTooltip === feature && (
        <div className="absolute left-6 top-0 z-50 w-72 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-xl pointer-events-none">
          {featureDescriptions[feature]}
          <div className="absolute left-0 top-2 -ml-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-gray-900"></div>
        </div>
      )}
    </div>
  );
