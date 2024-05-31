import { type DiscordTypes } from '@/types';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import { BsDiscord } from 'react-icons/bs';
import Image from 'next/image';
import { AlertTitle, AlertDescription } from '@/components/ui/alert';
import { ElapsedTime } from '@/app/(portfolio)/(pages)/dashboard/_components/discord/elapsed-time';
import { ProgressBar } from '@/app/(portfolio)/(pages)/dashboard/_components/discord/progress-bar';

interface DiscordActivityCardProps {
  activity: DiscordTypes['activities'][0];
  spotify: DiscordTypes['spotify'];
}

export default function DiscordActivityCard({
  activity,
  spotify,
}: DiscordActivityCardProps) {
  return (
    <div className='flex w-full flex-row items-center gap-3 border-none text-left'>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {activity.assets?.large_image?.startsWith('spotify:') ? (
              <Image
                priority
                src={spotify.album_art_url ?? ''}
                width={90}
                height={90}
                alt='Activity image'
                className='rounded'
              />
            ) : activity.assets && activity.application_id ? (
              <Image
                src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.webp?size=512`}
                width={90}
                height={90}
                alt='Activity image'
                className='rounded'
                priority
              />
            ) : activity.application_id ? (
              <Image
                src={`https://dcdn.dstn.to/app-icons/${activity.application_id}.webp?size=512`}
                width={90}
                height={90}
                alt='Activity image'
                className='rounded'
                priority
              />
            ) : (
              <div
                className='flex items-center justify-center'
                style={{
                  width: 90,
                  height: 90,
                  backgroundColor: 'gray',
                  borderRadius: '0.25rem',
                }}
              >
                <BsDiscord className='h-12 w-12' />
              </div>
            )}
          </TooltipTrigger>
          <TooltipContent>
            {activity.assets
              ? activity.assets.large_text ?? activity.name
              : activity.name}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className='w-full'>
        <AlertTitle className='text-xs'>{activity.name}</AlertTitle>
        <AlertDescription className='text-nowrap text-xs text-muted-foreground'>
          {activity.details ?? null}
        </AlertDescription>
        <AlertDescription className='text-xs text-muted-foreground'>
          {(!activity.assets?.large_image?.startsWith('spotify:') &&
            activity.state) ??
            null}
        </AlertDescription>
        <AlertDescription className=''>
          {activity.timestamps?.start &&
          activity.timestamps.end ? (
            <ProgressBar
              start={activity.timestamps.start}
              end={activity.timestamps.end}
            />
          ) : null}
        </AlertDescription>
        {activity.timestamps?.start ? (
          <AlertDescription className='text-nowrap text-xs text-muted-foreground'>
            <ElapsedTime unixTimestamp={activity.timestamps.start} />
          </AlertDescription>
        ) : null}
      </div>
    </div>
  );
}
