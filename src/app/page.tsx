import TextDecryption from '@/components/custom/text-decryption/text-decryption';
import { ThemeToggle } from '@/components/custom/theme-toggle';
import { Icons } from '@/components/icons/icons';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex h-full items-center justify-center'>
      <div className='container flex max-w-[64rem] flex-col items-center gap-4 text-center'>
        <Icons.logo className='h-20 w-20' />
        <TextDecryption
          targetText={siteConfig.name}
          className='text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl'
        />
        <p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
          {siteConfig.description}
        </p>
        <div className='flex gap-2'>
          <Link
            href={siteConfig.links.github}
            target='_blank'
            className={cn(buttonVariants({ size: 'default' }))}
          >
            Get Started
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </main>
  );
}
