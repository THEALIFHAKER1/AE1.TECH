import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Animation from '../animation';
import { Icons } from '@/components/icons/icons';
import BirthdayCalculate from './birthday-calculate';

export default function Birthday() {
  return (
    <Animation>
      <Card className='relative h-[150px] w-full bg-purple-400 text-white md:w-[150px]'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Birthday</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-nowrap text-lg font-bold'>
            <BirthdayCalculate /> Days
          </div>
          <p className='text-xs'>Until birthday</p>
        </CardContent>
        <div className='absolute right-0 top-14 opacity-30 md:bottom-0'>
          <Icons.cake size={100} />
        </div>
      </Card>
    </Animation>
  );
}
