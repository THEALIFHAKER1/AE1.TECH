import HeroDetails from './HeroDetails';
import HeroProfile from './HeroProfile';

function Hero() {
  return (
    <div className='flex h-full flex-col-reverse items-center justify-center md:flex-row  md:justify-around'>
      <HeroDetails />
      <HeroProfile />
    </div>
  );
}

export default Hero;
