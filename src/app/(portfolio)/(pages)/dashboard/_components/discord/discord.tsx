import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { GetLanyard } from '@/app/api/dicord/lanyard/get-lanyard';
import Animation from '../animation';
import Profile from './profile';
import Activities from './activities';
import { Icons } from '@/components/icons/icons';

export default async function Discord() {
  const Lanyard = await GetLanyard();
  return (
    <Animation>
      <Card className='relative h-full w-full overflow-hidden border border-input bg-[#7289DA] backdrop-blur-sm backdrop-saturate-150 md:max-w-[570px] '>
        <Icons.discord className='absolute -right-4 -top-4 h-40 w-40 -rotate-45 text-white/20' />
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-nowrap text-sm font-medium'>
            Discord Activity
          </CardTitle>
        </CardHeader>
        <CardContent className='grid max-h-max gap-2'>
          <Profile
            data={Lanyard.discord_user}
            OnlineStatus={Lanyard.discord_status}
            status={Lanyard.activities.filter(
              (activity) => activity.name === 'Custom Status'
            )}
          />
          <Activities
            activities={Lanyard.activities}
            spotify={Lanyard.spotify}
          />
        </CardContent>
      </Card>
    </Animation>
  );
}
