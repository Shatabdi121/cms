import React, { useState } from 'react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Coffee', 'Burgers', 'Snacks', 'Drinks'];

  const menuItems = [
    {
      id: 1,
      name: 'Signature Latte',
      category: 'Coffee',
      price: '55.00/-',
      desc: 'Double shot espresso with steamed silky milk and art.',
      image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=400'
    },
    {
      id: 2,
      name: 'Monster Beef Burger',
      category: 'Burgers',
      price: '85.00/-',
      desc: 'Wagyu beef, cheddar, caramelized onions, and secret sauce.',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400'
    },
    {
      id: 3,
      name: 'Loaded Fries',
      category: 'Snacks',
      price: '49.00/-',
      desc: 'Crispy fries topped with melted cheese and jalapeños.',
      image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=400'
    },
    {
      id: 4,
      name: 'Cold Brew',
      category: 'Coffee',
      price: '55.00/-',
      desc: '12-hour steep for a smooth, low-acid caffeine kick.',
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=400'
    },
    {
      id: 5,
      name: 'Crispy Chicken Sandwich',
      category: 'Burgers',
      price: '75.00/-',
      desc: 'Buttermilk fried chicken with spicy slaw on brioche.',
      image: 'https://images.unsplash.com/photo-1606755962773-51493026771b?q=80&w=400'
    },
    {
      id: 6,
      name: 'Fresh Fruit Smoothie',
      category: 'Drinks',
      price: '25.00/-',
      desc: 'Seasonal fruits blended with Greek yogurt.',
      image: 'https://images.unsplash.com/photo-1553531384-cc64ac80f931?q=80&w=400'
    }
  ];

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-neon-primary font-bold tracking-widest uppercase text-sm mb-2">Taste the Best</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Our Menu</h1>
          <div className="w-20 h-1 bg-neon-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat 
                ? 'bg-neon-primary text-white shadow-lg scale-105' 
                : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-orange-600 font-bold shadow-sm">
                  {item.price}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.name}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-orange-500 bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                <button className="w-full py-3 bg-gray-900 dark:bg-orange-900/30 dark:text-orange-500 text-white font-bold rounded-xl hover:bg-neon-primary dark:hover:bg-neon-primary/90 transition-colors">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">Coming soon! We're perfecting these recipes.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;