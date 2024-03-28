'use client';
import { Icons } from '@/components/icons/icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { sportlightProjectsConfig } from '@/config/spotlight-projects';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsCarousel() {
  return (
    <div className={`relative flex items-center justify-center`}>
      <Carousel
        className={`w-full`}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent className={`-ml-1`}>
          {sportlightProjectsConfig.map((project, idx) => (
            <CarouselItem key={idx} className={`pl-1  md:basis-1/3`}>
              <div className={`p-1`}>
                <Card className={`h-60`}>
                  <CardContent
                    className=' flex h-full justify-end rounded-lg  p-6'
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <CarouselItem className='flex flex-col justify-end '>
                      <span className={`text-2xl font-bold `}>
                        {project.projectName}
                      </span>
                      <span className={`text-1xl `}>{project.description}</span>
                      <div className='my-5 space-x-2 md:mb-0'>
                        <Link href={project.link} target='_blank'>
                          <Button variant='outline'>open</Button>
                        </Link>
                        <Link href={project.repo} target='_blank'>
                          <Button variant='outline'>repo</Button>
                        </Link>
                      </div>
                    </CarouselItem>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div
        className={`absolute inset-0 hidden w-1/3 bg-gradient-to-r from-background from-10% to-transparent  md:block`}
      />
      <div
        className={`absolute inset-0 left-auto hidden w-1/3  bg-gradient-to-l from-background from-10% to-transparent   md:flex`}
      />
    </div>
  );
}
