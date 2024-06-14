"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React, { useEffect, useRef } from "react";
import { timeZoneFormatterConfig } from "@/config/timeZoneFormatter";
import drawStars from "./draw-star";
import { TimeClock } from "./time-clock";
import Sun from "./sun";

export default function Time() {
  const nightCanvasRef = useRef<HTMLCanvasElement>(null);
  const time = TimeClock();
  const isNight = time.getHours() >= 20 || time.getHours() < 8;

  useEffect(() => {
    const canvas = nightCanvasRef.current;
    if (canvas) drawStars(canvas, isNight);
  }, [isNight]);

  return (
    <Card
      className={` relative h-[150px] w-full overflow-hidden text-white md:w-[150px] ${
        !isNight && "bg-blue-400"
      }`}
    >
      <div className={"relative h-full w-full"}>
        <canvas
          ref={nightCanvasRef}
          aria-hidden
          className={`${isNight && "bg-black w-full h-full"}`}
        />
        <div className={"absolute inset-0"}>
          <CardHeader
            className={
              "flex flex-row items-center justify-between space-y-0 pb-2"
            }
          >
            <CardTitle className={"text-sm font-medium"}>
              {isNight ? "Night" : "Day"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={"whitespace-nowrap text-lg font-bold"}>
              {timeZoneFormatterConfig.format(time)}
            </div>
            <p className={`text-xs font-light`}>Malaysia Time (GMT+8)</p>
            {!isNight && <Sun />}
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
