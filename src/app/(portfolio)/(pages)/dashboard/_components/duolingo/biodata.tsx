import { Icons } from '@/components/icons/icons';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { DuolingoTypes } from '@/types';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Biodata {
  data: DuolingoTypes;
}

const languageMap: Record<string, string> = {
  DUOLINGO_JA_EN:
    'https://d35aaqx5ub95lt.cloudfront.net/images/borderlessFlags/6d303af9f69038c1db4bffa52abdc997.svg',
  DUOLINGO_DE_EN:
    'https://d35aaqx5ub95lt.cloudfront.net/images/borderlessFlags/097f1c20a4f421aa606367cd33893083.svg',
  DUOLINGO_FR_EN:
    'https://d35aaqx5ub95lt.cloudfront.net/images/borderlessFlags/7488bd7cd28b768ec2469847a5bc831e.svg',
  'DUOLINGO_ZH-CN_EN':
    'https://d35aaqx5ub95lt.cloudfront.net/images/borderlessFlags/8537efd75f444d1d7dc21d8caf563f58.svg',
  DUOLINGO_AR_EN:
    'https://d35aaqx5ub95lt.cloudfront.net/images/borderlessFlags/e052b83e772ae592295961e595ca50ef.svg',
};

export default function Biodata({ data }: Biodata) {
  const maxCoursesToShow = 3;
  const totalCourses = data.courses.length;
  return (
    <div className='flex w-fit gap-5 rounded-xl bg-background/20 p-3'>
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
                      src={languageMap[course.id]}
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
                        src={languageMap[course.id]}
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
