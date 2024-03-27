import { ThemeToggle } from '@/components/custom/theme-toggle';
import Logo from './logo';
import Navigation from './navigation';

export default function Navbar() {
  return (
    <>
      <nav
        className={`fixed z-50 w-full border-b border-input bg-background/30 p-3 px-5 backdrop-blur-sm backdrop-saturate-150 md:border-none`}
      >
        <div className={`flex justify-between`}>
          <Logo />
          <div className={`flex items-center gap-4`}>
            <ul
              className={`hidden items-center space-x-4 text-foreground md:flex`}
            >
              <Navigation />
            </ul>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div
        className={`fixed bottom-4 left-0 right-0 z-50 mx-5 flex items-center justify-center overflow-auto rounded-xl border border-input bg-background/30 p-5 backdrop-blur-sm backdrop-saturate-150 md:hidden`}
      >
        <div className={`flex items-center gap-4`}>
          <ul className={`flex items-center space-x-10 text-sm md:space-x-4 `}>
            <Navigation />
          </ul>
        </div>
      </div>
    </>
  );
}
