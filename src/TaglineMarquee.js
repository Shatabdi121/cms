import React from 'react';
import { useState,useEffect } from 'react';

const TaglineMarquee = () => {
  const taglines = [
    "Bold Brews. Bigger Bites.",
    "Fuel Your Day, One Delivery at a Time.",
    "The Ultimate Snack Attack HQ.",
    "Hot Sandwiches on the Go.",
    "Icy Soft Drinks & Quick Snacks.",
    "The Full Cafe Experience",
    "Burgers, Brews, and Better Moods",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setFade(false);
      
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % taglines.length);
        // Start fade in
        setFade(true);
      }, 500); // This matches the transition duration
    }, 3000); // Change tagline every 3 seconds

    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <div className="flex flex-col items-center justify-center h-24 overflow-hidden">
      <p 
        className={`text-3xl md:text-5xl font-extrabold  transition-all duration-500 transform ${
          fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {taglines[index]}
      </p>
    </div>
  );
};

export default TaglineMarquee;