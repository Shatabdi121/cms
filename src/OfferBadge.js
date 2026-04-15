import React from 'react';

const OfferBadge = () => {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="relative group cursor-pointer">
        {/* The Glowing Background Layer */}
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        
        {/* The Main Badge */}
        <div className="relative px-7 py-4 bg-black rounded-full leading-none flex items-center divide-x divide-gray-600">
          <span className="flex items-center space-x-5">
            <span className="pr-6 text-gray-100 font-bold">Limited Offer</span>
          </span>
          <span className="pl-6 text-neon-primary group-hover:text-gray-100 transition duration-200 font-bold uppercase tracking-tighter">
            Get one Coke with minimum oreder 259 &rarr;
          </span>
        </div>
        
        {/* Floating "OFF" Tag */}
        <div className="absolute -top-4 -right-4 bg-red-600 text-white text-xs font-black px-2 py-1 rounded-md shadow-lg animate-bounce">
          20% OFF
        </div>
      </div>
    </div>
  );
};

export default OfferBadge;