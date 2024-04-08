import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { GetLanyard } from '@/app/api/dicord/lanyard/get-lanyard';
import Animation from '../animation';

export default async function Discord() {
  const Lanyard = await GetLanyard();
  return (
    <Animation>
      <Card className=' h-full border border-input bg-foreground/20 backdrop-blur-sm backdrop-saturate-150 '>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>
            Discord Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-lg font-bold'>{JSON.stringify(Lanyard)}</div>
          <p className='text-xs text-muted-foreground'>sub content</p>
        </CardContent>
      </Card>
    </Animation>
  );
}
