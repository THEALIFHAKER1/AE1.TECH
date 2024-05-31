import Link from 'next/link';
import localFont from 'next/font/local';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons/icons';
import '@💅/not-found.css';
const myFont = localFont({
  src: '../assets/fonts/cyborg-punk.ttf',
  display: 'swap',
});

export default function NotFound() {
  return (
    <>
      <div className='flex h-full  flex-col items-center justify-center text-center'>
        <div className='hero-container'>
          <h1 className={` hero glitch layers text-8xl ${myFont.className}`}>
            <span>404</span>
          </h1>
        </div>
        <div className=' flex flex-col gap-2 pt-7'>
          <h2 className='max-w-[15rem]  text-sm'>
            An error occurred while trying to access this page
          </h2>
          <Link href={'/'}>
            <Button className='w-fit pr-2'>
              Home
              <Icons.back />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
