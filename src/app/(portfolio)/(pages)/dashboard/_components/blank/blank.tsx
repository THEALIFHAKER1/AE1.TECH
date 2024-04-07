import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function blank() {
  return (
    <div className='grid w-full grid-cols-2 gap-2 md:w-auto md:grid-cols-1 md:grid-rows-2 '>
      <Card className='hovers w-full border border-input bg-foreground/30 backdrop-blur-sm backdrop-saturate-150 md:w-fit md:max-w-[400px]'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Title</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-lg font-bold'>content </div>
          <p className='text-xs text-muted-foreground'>sub content</p>
        </CardContent>
      </Card>
      <Card className=' hovers w-full border border-input bg-foreground/30 backdrop-blur-sm backdrop-saturate-150 md:w-fit md:max-w-[400px]'>
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
