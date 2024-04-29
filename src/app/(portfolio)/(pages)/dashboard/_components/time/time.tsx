'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CardAnimation, CardContentCardAnimation } from '../animation';
import React, { useEffect, useRef } from 'react';
import { timeZoneFormatterConfig } from '@/config/timeZoneFormatter';
import drawStars from './draw-star';
import { TimeClock } from './time-clock';
import Sun from './sun';

export default function Time() {
  const nightCanvasRef = useRef<HTMLCanvasElement>(null);
  const time = TimeClock();
  const isNight = time.getHours() >= 20 || time.getHours() < 8;

  useEffect(() => {
    const canvas = nightCanvasRef.current;
    if (canvas) drawStars(canvas, isNight);
  }, [isNight]);

  return (
    <CardAnimation>
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
              <CardContentCardAnimation>
                <div className={'whitespace-nowrap text-lg font-bold'}>
                  {timeZoneFormatterConfig.format(time)}
                </div>
                <p className={`text-xs font-light`}>Malaysia Time (GMT+8)</p>
                {!isNight && <Sun />}
              </CardContentCardAnimation>
            </CardContent>
          </div>
        </div>
      </Card>
    </CardAnimation>
  );
}
