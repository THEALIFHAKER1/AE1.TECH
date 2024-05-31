import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { type DuolingoTypes } from '@/types';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { languageMap } from './languages-map';

interface Biodata {
  data: DuolingoTypes;
}

export default function Biodata({ data }: Biodata) {
  const maxCoursesToShow = 3;
  const totalCourses = data.courses.length;
  return (
    <div className='blur-background flex w-fit gap-5 rounded-xl p-3'>
      <Avatar className='h-14 w-14 rounded-md'>
        <AvatarImage src={data.picture + '/xxlarge'} />
        <AvatarFallback className='h-14 w-14 rounded-md'>R</AvatarFallback>
      </Avatar>
      <div>
        <div className='flex flex-col justify-center'>
          <div className='text-xs font-bold text-white'>{data.name}</div>
          <p className='text-xs text-white/50'>{data.username}</p>
        </div>
        <div>
          <Dialog>
            <DialogTrigger className='flex gap-2 pt-2'>
              {data.courses.slice(0, maxCoursesToShow).map((course, index) => {
                return (
                  <div key={index} className='grid w-full place-items-center'>
                    <Image
                      width={24}
                      height={24}
                      src={languageMap[course.id] as string}
                      alt={course.id}
                    />
                  </div>
                );
              })}
              {totalCourses > maxCoursesToShow && (
                <div className='grid w-full place-items-center rounded-sm border border-foreground/30 text-xs text-white'>
                  +{totalCourses - maxCoursesToShow}
                </div>
              )}
            </DialogTrigger>
            <DialogContent className='max-w-md'>
              <DialogHeader>
                <DialogTitle>My languages</DialogTitle>
              </DialogHeader>
              <div className='flex flex-col gap-2'>
                {data.courses.map((course, index) => {
                  return (
                    <div key={index} className='flex gap-5 align-middle'>
                      <Image
                        width={50}
                        height={50}
                        src={languageMap[course.id] as string}
                        alt={course.id}
                      />
                      <div className='my-auto flex w-full justify-between'>
                        <p>{course.title}</p>
                        <p>{course.xp} XP</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
