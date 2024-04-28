import { ThemeToggle } from '@/components/custom/theme-toggle';
import Logo from './logo';
import Navigation from './navigation';

export default function Navbar() {
  return (
    <>
      <nav
        className={`blur-background fixed z-50 w-full border-b border-input p-3 px-5  md:border-none`}
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
        className={`blur-background fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center overflow-auto rounded-xl border border-input  px-5 py-7  md:hidden`}
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
