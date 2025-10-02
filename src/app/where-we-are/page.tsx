// import React from "react";

// export default function Page() {
//   return (
//     <div className="bg-white text-black pt-24">
//       <h1 className="text-3xl font-semibold">Where We Are</h1>
//       <p className="mt-2">Find our locations and addresses here.</p>
//     </div>
//   );
// }

'use client';

import { useState } from 'react';
import Image from 'next/image';

type Region = 'africa' | 'asia';

interface RegionData {
  title: string;
  description: string;
}

const regionContent: Record<Region, RegionData> = {
  africa: {
    title: 'About Africa',
    description: 'In Africa, we\'ve worked to expand healthcare access, improve maternal and child health programs, and strengthen disease prevention initiatives through community partnerships.',
  },
  asia: {
    title: 'About India',
    description: 'In India, we\'ve worked to expand vaccine access, advance RMNCH+A and nutrition, and improve TB diagnostics through cross-sector partnerships.',
  },
};

export default function WhereWeAre() {
  const [activeRegion, setActiveRegion] = useState<Region>('asia');

  return (
    <div className="min-h-screen bg-white py-12 lg:py-30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-5">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3B818F] tracking-wide text-center mb-6">
            WHERE WE ARE
          </h1>
          
          {/* Region Buttons */}
          <div className="flex gap-3 justify-end items-center">
            <button
              onClick={() => setActiveRegion('africa')}
              className={`px-8 py-0 flex items-center rounded-full font-medium transition-all duration-300  ${
                activeRegion === 'africa'
                  ? 'bg-[#3B818F] text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-[#3B818F]'
              }`}
            >
              Africa
            </button>
            <button
              onClick={() => setActiveRegion('asia')}
              className={`px-7 py-0 rounded-full font-medium transition-all duration-300 ${
                activeRegion === 'asia'
                  ? 'bg-[#3B818F] text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-[#3B818F]'
              }`}
            >
              Asia
            </button>
          </div>
        </div>

        {/* Map Container */}
        <div className="relative bg-white rounded-3xl border border-gray-500 p-8 shadow-sm">
          <div className="relative w-full h-[500px] md:h-[600px]">
            <Image
              src="/images/worldMap.svg"
              alt="World Map"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Info Card */}
          <div className="absolute bottom-12 right-12 bg-white rounded-2xl shadow-lg p-6 max-w-xs border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {regionContent[activeRegion].title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {regionContent[activeRegion].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}