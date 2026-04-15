import React from 'react';
import { Camera,Store } from 'lucide-react';
import { Percent } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t transition-colors duration-300
                       bg-neon-bg text-neon-text border-neon-border
                       dark:bg-slate-950 dark:text-slate-400 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Camera className="text-neon-primary" size={24} />
              <span className="text-xl font-semibold tracking-tight text-neon-text dark:text-slate-100">
                Not Decided
              </span>
            </div>
            <p className="text-sm">
              &copy; {currentYear} Not Decided. All rights reserved.
            </p>
          </div>

          {/* Sitemaps */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm">
            <a href="#" className="hover:text-neon-primary">Privacy</a>
            <a href="#" className="hover:text-neon-primary">Terms</a>
            <a href="#" className="hover:text-neon-primary">API</a>
            <a href="#" className="hover:text-neon-primary">Status</a>
          </div>

          {/* Socials */}
          <div className="flex gap-6">
            {[Camera, Store,Percent].map((Icon, idx) => (
              <a key={idx} href="#" className="text-neon-text/70 dark:text-slate-500 hover:text-neon-primary transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;