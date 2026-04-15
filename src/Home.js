import React from 'react';
import { Coffee, Sandwich, Hamburger } from 'lucide-react';
import TaglineMarquee from './TaglineMarquee';
import OfferBadge from './OfferBadge';

const Home = () => {
  const features = [
    { icon: Coffee, title: 'Premium Coffee', desc: 'Experience the finest coffee beans sourced globally.' },
    { icon: Sandwich, title: 'Delicious Sandwiches', desc: 'Freshly made sandwiches with the best ingredients.' },
    { icon: Hamburger, title: 'Juicy Burgers', desc: 'Tasty burgers made with the finest beef and vegetables.' },
  ];

  return (
    <main className="flex-grow transition-colors duration-300
                    bg-neon-bg text-neon-text
                    dark:bg-slate-950 dark:text-slate-300">
                    <OfferBadge/>
      
      {/* Hero Section */}
      <section className="py-20 md:py-32 border-b border-neon-border dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border
                           border-neon-primary text-neon-primary bg-neon-primary/10">
            Now in Your Home Town
          </span>
          <h1 className="mt-8 text-4xl md:text-6xl font-extrabold tracking-tighter text-neon-text dark:text-slate-100">
            Coffee <span className="text-neon-primary"> Cafe</span>.
          </h1>
<div className="mt-6 max-w-2xl mx-auto">
  <TaglineMarquee />
</div>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-neon-text text-neon-bg px-8 py-3 rounded-lg font-semibold
                               dark:bg-neon-primary dark:text-black hover:opacity-90 transition-opacity">
              Place an Order
            </button>
            <button className="px-8 py-3 rounded-lg font-semibold border border-neon-border
                               hover:bg-neon-border dark:border-slate-700 dark:hover:bg-slate-800 transition-colors">
              Get Discount
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="p-8 rounded-2xl border transition-all hover:shadow-lg
                                         bg-white border-neon-border
                                         dark:bg-slate-900 dark:border-slate-800">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border
                                  border-neon-border bg-neon-primary/10
                                  dark:border-slate-700 dark:bg-slate-800">
                    <Icon className="text-neon-primary" size={24} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold tracking-tight text-neon-text dark:text-slate-100">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-base">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;