import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className='fixed bottom-0 mt-auto hidden rounded-tr-lg border border-input bg-background/30 p-5 py-2 text-sm backdrop-blur-sm backdrop-saturate-150 md:block'>
      © {new Date().getFullYear()}{' '}
      <a target='_blank' href={siteConfig.links.github} className='underline'>
        THEALIFHAKER1
      </a>
      . All Rights Reserved.
    </footer>
  );
}
