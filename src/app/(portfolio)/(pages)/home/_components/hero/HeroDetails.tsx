import { skillsConfig } from '@/config/skills';

function HeroDetails() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center text-center md:items-start md:text-start'>
        <h1
          className='text-2xl font-bold'
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
          }}
        >
          THEALIFHAKER1
        </h1>
        <p className='max-w-xs'>
          MUHAMMAD ALIF DANIEL BIN MOHD HAIRUL HEZZELIN
        </p>
        <h1
          className='text-xl font-bold'
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
          }}
        >
          {'Fullstack Developer </>'}
        </h1>
        <div className='my-5 flex h-10 w-full flex-row justify-center space-x-2 overflow-x-auto md:justify-start'>
          {skillsConfig.map((item, id) => (
            <div
              key={id}
              className='h-15 flex w-10 items-center justify-between rounded border border-black bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800'
            >
              <item.icon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroDetails;
