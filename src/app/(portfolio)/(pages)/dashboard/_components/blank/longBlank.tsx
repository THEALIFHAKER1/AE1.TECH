import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function longBlank() {
  return (
    <div className='h-[252px] w-full md:w-fit'>
      <Card className=' h-full border border-input bg-foreground/20 backdrop-blur-sm backdrop-saturate-150 '>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Title</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-lg font-bold'>content</div>
          <p className='text-xs text-muted-foreground'>sub content</p>
        </CardContent>
      </Card>
    </div>
  );
}
