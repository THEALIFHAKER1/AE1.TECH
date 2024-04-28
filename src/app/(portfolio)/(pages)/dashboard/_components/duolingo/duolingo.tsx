import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Biodata from './biodata';
import { getUserInfo } from '@/app/api/duolingo/get-userinfo/get-userinfo';
import Statistics from './statistics';
import DuolingoImage from '@/assets/images/duolingo/duolingo-family.png';
import Animation from '../animation';

export default async function Duolingo() {
  const data = await getUserInfo();
  return (
    <Animation>
      <Card className=' relative h-full overflow-hidden border border-input bg-[#58cc02] backdrop-blur-sm backdrop-saturate-150 '>
        <Image
          className='absolute -bottom-12 right-0 -z-10'
          src={DuolingoImage}
          alt='alt'
          width={300}
          height={300}
        />
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-nowrap text-sm font-medium text-white'>
            Duolingo Activity
          </CardTitle>
        </CardHeader>
        <CardContent className='grid max-h-max gap-2'>
          <Biodata data={data} />
          <Statistics data={data} />
        </CardContent>
      </Card>
    </Animation>
  );
}
