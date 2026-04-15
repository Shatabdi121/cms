import React, { useState } from 'react';
import { Tag, Clock, Send, Copy, Check } from 'lucide-react';

const Offers = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const promos = [
    {
      id: 1,
      title: "First Order Special",
      discount: "50% OFF",
      description: "Get half off on your very first order of Burgers or Sandwiches.",
      code: "WELCOME50",
      expiry: "Valid for new users",
      color: "from-orange-500 to-red-600",
    },
    {
      id: 2,
      title: "Midday Caffeine Hit",
      discount: "BUY 1 GET 1",
      description: "Buy any large Latte or Cappuccino and get the second one free.",
      code: "BREW2X",
      expiry: "Mon - Fri, 2PM - 5PM",
      color: "from-blue-600 to-indigo-700",
    },
    {
      id: 3,
      title: "Family Snack Pack",
      discount: "FREE DELIVERY",
      description: "Order any 3 snacks and 2 burgers to unlock free doorstep delivery.",
      code: "FREESHIP",
      expiry: "Ends Sunday",
      color: "from-emerald-500 to-teal-600",
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-neon-primary font-bold uppercase tracking-widest text-sm">Exclusive Deals</h2>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2">
            Limited Time Offers
          </h1>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Grab these delicious deals before they're gone. Just use the codes at checkout!
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promos.map((promo) => (
            <div 
              key={promo.id}
              className="relative group bg-gray-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-slate-800 transition-all hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Top Color Bar */}
              <div className={`h-3 bg-gradient-to-r ${promo.color}`} />

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 shadow-sm text-neon-primary">
                    <Tag size={24} />
                  </div>
                  <span className="text-xs font-bold text-gray-400 flex items-center gap-1 uppercase tracking-tighter">
                    <Clock size={14} /> {promo.expiry}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{promo.title}</h3>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-primary to-amber-500 mb-4">
                  {promo.discount}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8">
                  {promo.description}
                </p>

                {/* Coupon Code Box */}
                <div className="relative flex items-center">
                  <div className="w-full bg-white dark:bg-slate-800 border-2 border-dashed border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3 font-mono font-bold text-center text-gray-700 dark:text-gray-200">
                    {promo.code}
                  </div>
                  <button 
                    onClick={() => handleCopy(promo.code)}
                    className="absolute right-2 p-2 bg-gray-900 dark:bg-neon-primary text-white rounded-lg hover:scale-110 transition-transform"
                  >
                    {copiedCode === promo.code ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                </div>
                
                <button className="w-full mt-6 flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-neon-primary to-amber-500 text-white font-bold rounded-2xl hover:bg-neon-primary/90 transition-colors shadow-lg shadow-orange-200 dark:shadow-none">
                  Order Now <Send size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Notice */}
        <div className="mt-16 p-6 rounded-2xl bg-orange-50 dark:bg-slate-900/50 border border-orange-100 dark:border-slate-800 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            *Terms and conditions apply. Offers cannot be combined with other discounts. 
            All deliveries are subject to availability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offers;