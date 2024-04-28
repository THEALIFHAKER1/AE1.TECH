import { duolingoIcons } from '@/components/icons/icons';
import { DuolingoTypes } from '@/types';
import Image from 'next/image';

interface StatisticsProps {
  data: DuolingoTypes;
}

export default function Statistics({ data }: StatisticsProps) {
  const dataArray = [
    {
      src: duolingoIcons.Streak,
      alt: 'Streak',
      value: data.streakData.currentStreak.length,
    },
    {
      src: duolingoIcons.XP,
      alt: 'XP',
      value: data.totalXp + ' XP',
    },
    {
      src: duolingoIcons.League,
      alt: 'League',
      value: 'Silver',
    },
  ];
  return (
    <div className='blur-background grid w-full grid-flow-col gap-5 rounded-xl p-3'>
      {dataArray.map((item, index) => (
        <div
          key={index}
          className='grid place-items-center text-center text-white'
        >
          <Image src={item.src} alt={item.alt} width={25} height={25} />
          <div>
            <p>{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
