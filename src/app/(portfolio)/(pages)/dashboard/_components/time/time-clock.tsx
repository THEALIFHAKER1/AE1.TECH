'use client';
import { useState, useEffect } from 'react';

export function TimeClock(interval = 60000) {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return time;
}
