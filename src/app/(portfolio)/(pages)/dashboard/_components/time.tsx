'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import drawStars from './draw-star';
import { TimeClock } from './time-clock';

export default function Time() {
  const nightCanvasRef = useRef<HTMLCanvasElement>(null);

  const time = TimeClock();

  const isNight = time.getHours() >= 20 || time.getHours() < 8;
  // const isNight = true;

  useEffect(() => {
    const canvas = nightCanvasRef.current;
    if (canvas) drawStars(canvas, isNight);
  }, [isNight]);

  return (
    <motion.div
      initial={{ height: 80 }}
      animate={{ height: 'fit-content' }}
      transition={{ duration: 0.5 }}
      style={{ overflow: 'hidden' }}
    >
      <Card
        className={` relative h-[150px] w-full overflow-hidden text-white md:w-[150px] ${
          !isNight && 'bg-blue-400'
        }`}
      >
        <div className={'relative h-full'}>
          <canvas
            ref={nightCanvasRef}
            aria-hidden
            className={`${isNight && 'bg-black'}`}
          />
          <div className={'absolute inset-0'}>
            <CardHeader
              className={
                'flex flex-row items-center justify-between space-y-0 pb-2'
              }
            >
              <CardTitle className={'text-sm font-medium'}>
                {isNight ? 'Night' : 'Day'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={'whitespace-nowrap text-lg font-bold'}>
                {time.toLocaleTimeString('en-US', {
                  timeZone: 'Asia/Kuala_Lumpur',
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                })}
              </div>
              <p className={`text-xs font-light`}>Malaysia Time (GMT+8)</p>
              {!isNight && (
                <motion.div
                  aria-hidden
                  animate={{
                    scale: [1, 1.1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className={
                    'absolute bottom-0 right-0 rounded-tl-full bg-white/10 pl-2 pt-2 md:pl-4 md:pt-4 '
                  }
                >
                  <motion.div>
                    <div
                      className={
                        'bottom-0 right-0 rounded-tl-full bg-white/20 pl-10 pt-10 md:pl-4 md:pt-4'
                      }
                    >
                      <div
                        className={
                          'bottom-0 right-0 rounded-tl-full bg-white/20 pl-10 pt-10 md:pl-4 md:pt-4'
                        }
                      >
                        <motion.div
                          initial={false}
                          animate={{ scale: [1, 0.8, 1.1, 1, 1, 1, 2] }}
                          transition={{
                            duration: 4,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatType: 'reverse',
                          }}
                          className={
                            'relative h-[50px] w-[50px] rounded-tl-full bg-yellow-200 md:h-5 md:w-5'
                          }
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </CardContent>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
