import React from 'react';

const About = () => {
  const stats = [
    { label: 'Coffee Flavours', value: '10+' },
    { label: 'Daily Deliveries', value: '500+' },
    { label: 'Menu Items', value: '50+' },
    { label: 'Happy Guests', value: '15k' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800" 
                alt="Our Cafe Interior" 
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
              {/* Overlay Decor */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-neon-primary text-white p-8 rounded-xl hidden md:block shadow-xl">
              <p className="text-4xl font-bold italic">Grab your</p>
              <p className="text-2xl font-semibold uppercase tracking-widest">OFFER</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-neon-primary font-bold tracking-widest uppercase text-sm mb-3">
                Our Story
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                More than just a Cafe. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-primary to-amber-500">
                  It's a Flavor Journey.
                </span>
              </h3>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Started in a small corner of the city, we believed that great coffee should 
              always be paired with a legendary burger. Whether you're stopping by for a 
              quick espresso or ordering a late-night snack feast, we treat every order 
              like it's our own.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-neon-primary pl-4">
              "We don't just deliver food; we deliver a moment of joy to your doorstep."
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-4">
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-neon-primary transition-colors shadow-lg active:scale-95">
                Explore Our Full Menu
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;