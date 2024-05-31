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
          { activities.length === 1 && activities[0]?.name === 'Custom Status' ? (
            <Alert className=''>
              <AlertDescription>No activities currently.</AlertDescription>
            </Alert>
          ) : (
            activities?.map((activity, index) => {
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
            })
          )}
        </>
      )}
    </div>
  );
}