import React, { useState } from 'react';
import { Menu, X, Zap, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = ['Home', 'About', 'Menu', 'Offers', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 border-b transition-colors duration-300
                    bg-neon-bg text-neon-text border-neon-border
                    dark:bg-slate-950 dark:text-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Zap className="text-neon-primary" size={28} />
            <span className="text-xl font-bold tracking-tight">Not Decided</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <a key={link} href="#" className="text-sm font-medium hover:text-neon-primary transition-colors">
                {link}
              </a>
            ))}
            
            {/* Action Group */}
            <div className="flex items-center gap-4 pl-4 border-l border-neon-border dark:border-slate-800">
              <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-neon-border dark:hover:bg-slate-800 transition-colors">
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} className="text-neon-accent"/>}
              </button>
              <button className="bg-neon-text text-neon-bg px-4 py-2 rounded-lg text-sm font-semibold 
                                 dark:bg-neon-primary dark:text-black hover:opacity-90 transition-opacity">
                Book Your Table
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleTheme} className="p-2 rounded-lg">
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} className="text-neon-accent" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden border-b bg-neon-bg border-neon-border dark:bg-slate-950 dark:border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <a key={link} href="#" className="block px-3 py-2 rounded-md hover:bg-neon-border dark:hover:bg-slate-800">
                {link}
              </a>
            ))}
            <button className="w-full bg-neon-text text-neon-bg px-3 py-2 rounded-md mt-4 dark:bg-neon-primary dark:text-black">
              Book Your Table
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;