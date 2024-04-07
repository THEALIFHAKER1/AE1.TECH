'use client';
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { birthdayConfig } from '@/config/birthday';
import { Cake } from 'lucide-react';
import { Icons } from '@/components/icons/icons';

export default function Birthday() {
  // Calculate the birthday date once
  const dob = new Date(birthdayConfig.date);

  // Get the current date once
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
    const timeUntilNextDay = 86400000 - (Number(today) % 86400000); // Time until next day in milliseconds
    const timer = setTimeout(() => {
      setDaysUntilBirthday(calculateDaysUntilBirthday());
    }, timeUntilNextDay); // Update at the start of next day
    return () => clearTimeout(timer);
  });

  return (
    <motion.div
      initial={{ height: 80 }}
      animate={{ height: 'fit-content' }}
      transition={{ duration: 0.5 }}
      style={{ overflow: 'hidden' }}
    >
      <Card className='relative h-[150px] w-full bg-purple-400 text-white md:w-[150px]'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Birthday</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-nowrap text-lg font-bold'>
            {daysUntilBirthday} Days
          </div>
          <p className='text-xs'>Until birthday</p>
        </CardContent>
        <div className='absolute right-0 top-14 opacity-30 md:bottom-0'>
          <Icons.cake size={100} />
        </div>
      </Card>
    </motion.div>
  );
}
