'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import React from 'react';

export default function Discord() {
  return (
    <motion.div
      initial={{ height: 80 }}
      animate={{ height: 'inherit' }}
      transition={{ duration: 0.5 }}
      style={{ overflow: 'hidden' }}
    >
      <Card className=' h-full border border-input bg-foreground/20 backdrop-blur-sm backdrop-saturate-150 '>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>
            Discord Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-lg font-bold'>content</div>
          <p className='text-xs text-muted-foreground'>sub content</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
