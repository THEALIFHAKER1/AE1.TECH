'use client';
import { discordTimestamp } from '@/lib/time';
import { useEffect, useState } from 'react';

interface TimestampProps {
  unixTimestamp: number;
}

export function ElapsedTime({ unixTimestamp }: TimestampProps) {
  const [timeAgo, setTimeAgo] = useState('Loading...');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeAgo(discordTimestamp(unixTimestamp));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [unixTimestamp]);

  return <>{timeAgo}</>;
}
