'use client';
import { birthdayConfig } from '@/config/birthday';
import { useEffect, useState } from 'react';

export default function BirthdayCalculate() {
  const dob = new Date(birthdayConfig.date);
  const today = new Date();

  const calculateDaysUntilBirthday = () => {
    let nextBirthday = new Date(
      today.getFullYear(),
      dob.getMonth(),
      dob.getDate()
    );
    if (today > nextBirthday) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    const diffTime = nextBirthday.getTime() - today.getTime();
    const daysUntilBirthday = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return daysUntilBirthday;
  };

  const [daysUntilBirthday, setDaysUntilBirthday] = useState(
    calculateDaysUntilBirthday()
  );

  useEffect(() => {
    const timeUntilNextDay = 86400000 - (Number(today) % 86400000);
    const timer = setTimeout(() => {
      setDaysUntilBirthday(calculateDaysUntilBirthday());
    }, timeUntilNextDay);
    return () => clearTimeout(timer);
  });
  return <>{daysUntilBirthday}</>;
}
