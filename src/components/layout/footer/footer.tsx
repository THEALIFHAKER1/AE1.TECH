import { siteConfig } from '@/config/site';
import Socials from './socials';

export default function Footer() {
  return (
    <footer className='blur-background fixed bottom-0 mt-auto hidden w-full justify-between rounded-tr-lg border border-input p-5 py-2 text-sm md:flex'>
      <div className='text-foreground/30'>
        © {new Date().getFullYear()}{' '}
        <a target='_blank' href={siteConfig.links.github} className='underline'>
          THEALIFHAKER1
        </a>
        . All Rights Reserved.
      </div>
      <Socials />
    </footer>
  );
}
