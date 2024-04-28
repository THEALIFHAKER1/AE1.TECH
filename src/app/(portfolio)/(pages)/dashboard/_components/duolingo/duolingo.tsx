import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import React from 'react';
import Biodata from './biodata';
import { getUserInfo } from '@/app/api/duolingo/get-userinfo/get-userinfo';
import Statistics from './statistics';

export default async function Duolingo() {
  const data = await getUserInfo();

  return (
    <Card className=' h-full border border-input bg-[#439c01] backdrop-blur-sm backdrop-saturate-150 '>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>Duolingo Activity</CardTitle>
      </CardHeader>
      <CardContent className='grid max-h-max gap-2'>
        <Biodata data={data} />
        {/* <Statistics data={data} /> */}
      </CardContent>
    </Card>
  );
}
