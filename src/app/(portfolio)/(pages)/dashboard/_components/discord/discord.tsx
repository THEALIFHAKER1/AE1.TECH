'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Profile from './profile';
import Activities from './activities';
import { Icons } from '@/components/icons/icons';
import GetLanyard from '@/app/api/dicord/lanyard/get-lanyard';
import { Suspense } from 'react';
import { Skeleton } from "@/components/ui/skeleton"
import { motion } from 'framer-motion';

export default function Discord() {
  const Lanyard = GetLanyard();
  const isLoading = !Lanyard;

  return (
    <Card className='relative h-full w-full overflow-hidden border border-input bg-[#7289DA] backdrop-blur-sm backdrop-saturate-150 md:w-[570px] '>
      <Icons.discord className='absolute -right-4 -top-4 h-40 w-40 -rotate-45 text-white/20' />
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-nowrap text-sm font-medium text-white'>
          Discord Activity
        </CardTitle>
      </CardHeader>
      <CardContent className='grid max-h-max gap-2'>
        <Suspense fallback={<p>Loading feed...</p>}>
          {isLoading ? (
            <SkeletonDiscord />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='grid max-h-max gap-2'
            >
              <Profile
                data={Lanyard.discord_user}
                OnlineStatus={Lanyard.discord_status}
                status={Lanyard.activities.filter(
                  (activity) => activity.name === 'Custom Status'
                )}
              />
              <Activities activities={Lanyard.activities} spotify={Lanyard.spotify} />
            </motion.div>
          )}
        </Suspense>
      </CardContent>
    </Card>
  );
}

function SkeletonDiscord() {
  return (
    <>
      <div className='flex gap-2'>
      <Skeleton className='w-[155px] h-[80px] rounded-lg' />
      <Skeleton className='h-[80px] w-32 rounded-xl' />
      </div>
        <Skeleton className='h-[94px] w-full rounded-xl' />
    </>
  );
}