import { Alert, AlertDescription } from '@/components/ui/alert';
import { DiscordTypes } from '@/types';
import DiscordActivityCard from './discord-activity-card';

interface ProfileData {
  activities: DiscordTypes['activities'];
  spotify: DiscordTypes['spotify'];
}
export default function Activities({ activities, spotify }: ProfileData) {
  return (
    <div className='blur-background grid max-h-[130px] grid-flow-row gap-2 overflow-auto rounded-xl p-3 sm:grid-flow-col'>
      {!activities || activities.length === 0 ? (
        <Alert className=''>
          <AlertDescription>No activities currently.</AlertDescription>
        </Alert>
      ) : (
        <>
          {activities?.map((activity, index) => {
            return (
              activity.name !== 'Custom Status' && (
                <Alert key={index}>
                  <AlertDescription>
                    <DiscordActivityCard
                      activity={activity}
                      spotify={spotify}
                    />
                  </AlertDescription>
                </Alert>
              )
            );
          })}
        </>
      )}
    </div>
  );
}
{
  /* {activities.map((activity, index) => {
        return (
          <div key={index} className='flex flex-col justify-center'>
            <div className='flex items-center gap-1'>
              {activity.emoji ? <span>{activity.emoji.name}</span> : null}
              <span className='text-sm'>{activity.name}</span>
            </div>
            {activity.details ? (
              <p className='text-xs text-muted-foreground'>
                {activity.details}
              </p>
            ) : null}
          </div>
        );
      })} */
}
