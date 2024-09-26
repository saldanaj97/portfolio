'use client';

import { useEffect, useState } from 'react';

export const LocalTimeComponent = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <span>Dallas, TX, USA</span>
      <span className="font-semibold">{time.toLocaleTimeString()}</span>
    </div>
  );
};
