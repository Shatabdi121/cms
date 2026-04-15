import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize state from localStorage, defaulting to 'light'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Manage class on <html> tag
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Persist preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for easy consumption of context
export const useTheme = () => useContext(ThemeContext);