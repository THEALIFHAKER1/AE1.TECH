import { DuolingoTypes } from '@/types';
import console from 'console';
import Image from 'next/image';
interface StatisticsProps {
  data: DuolingoTypes;
}
export default function Statistics({ data }: StatisticsProps) {
  console.log(data);
  return (
    <div className='flex w-fit gap-5 rounded-xl bg-background/20 p-3'>
      <div>
        <Image
          src='https://d35aaqx5ub95lt.cloudfront.net/images/profile/8a6dca76019d059a81c4c7c1145aa7a4.svg'
          alt='alt'
          width={25}
          height={25}
        />
        <p>streak</p>
        <p>{data.streakData.currentStreak.length}</p>
        <p>start date</p>
        <p>{data.streakData.currentStreak.startDate}</p>
        <p>end date</p>
        <p>{data.streakData.currentStreak.endDate}</p>
      </div>
      <div>
        <Image
          src='https://d35aaqx5ub95lt.cloudfront.net/images/profile/01ce3a817dd01842581c3d18debcbc46.svg'
          alt='alt'
          width={25}
          height={25}
        />
        <p>total xp</p>
        <p>{data.totalXp}</p>
      </div>
      <div>
        <p>Current league</p>
        <Image
          src='https://d35aaqx5ub95lt.cloudfront.net/images/leagues/192181672ada150becd83a74a4266ae9.svg'
          alt='alt'
          width={25}
          height={25}
        />
        <p>bronze</p>
      </div>
    </div>
  );
}
