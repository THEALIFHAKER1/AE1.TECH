import { DuolingoTypes } from '@/types';
import console from 'console';
import Image from 'next/image';
interface StatisticsProps {
  data: DuolingoTypes;
}
export default function Statistics({ data }: StatisticsProps) {
  console.log(data);
  return (
    <div className='grid w-full grid-flow-col gap-5 rounded-xl bg-background/20 p-3'>
      <div className='grid place-items-center text-center'>
        <Image
          src='https://d35aaqx5ub95lt.cloudfront.net/images/profile/8a6dca76019d059a81c4c7c1145aa7a4.svg'
          alt='alt'
          width={25}
          height={25}
        />
        <div>
          <p>{data.streakData.currentStreak.length}</p>
          {/* <p>Day streak</p> */}
        </div>
      </div>
      <div className='grid place-items-center text-center'>
        <Image
          src='https://d35aaqx5ub95lt.cloudfront.net/images/profile/01ce3a817dd01842581c3d18debcbc46.svg'
          alt='alt'
          width={25}
          height={25}
        />
        <div>
          <p>{data.totalXp} XP</p>
        </div>
      </div>
      <div className='grid place-items-center text-center'>
        <Image
          src='https://d35aaqx5ub95lt.cloudfront.net/images/leagues/192181672ada150becd83a74a4266ae9.svg'
          alt='alt'
          width={25}
          height={25}
        />
        <div>
          <p>bronze</p>
        </div>
      </div>
    </div>
  );
}
