import { DiscordTypes } from '@/types';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Icons } from '@/components/icons/icons';

interface ProfileData {
  data: DiscordTypes['discord_user'];
  OnlineStatus: DiscordTypes['discord_status'];
  status: DiscordTypes['activities'];
}

export default function Profile({ data, OnlineStatus, status }: ProfileData) {
  const Checkstatus = (status: DiscordTypes['discord_status']) => {
    const statusMap: Record<
      DiscordTypes['discord_status'],
      { text: string; color: string }
    > = {
      online: { text: 'Online', color: '#3ba55c' },
      offline: { text: 'Offline', color: 'gray' },
      idle: { text: 'Idle', color: '#FAA61A' },
      dnd: { text: 'Do Not Disturb', color: '#F04747' },
    };

    return statusMap[status] || statusMap['offline'];
  };

  const statusInfo = Checkstatus(OnlineStatus);
  return (
    <div className='flex gap-2'>
      <div className='flex w-fit gap-5 rounded-xl bg-background/20 p-3'>
        <Avatar className='h-14 w-14 rounded-md'>
          <AvatarImage
            src={`https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}`}
          />
          <AvatarFallback className='h-14 w-14 rounded-md'>R</AvatarFallback>
        </Avatar>
        <div className='flex flex-col justify-center'>
          <div
            className='flex items-center gap-1'
            style={{ color: statusInfo.color }}
          >
            <Icons.discord />
            <span className='text-sm'>{statusInfo.text}</span>
          </div>
          <div className='text-xs font-bold'>{data.global_name}</div>
          <p className='text-xs text-muted-foreground'>{data.username}</p>
        </div>
      </div>
      {status && status.length > 0 && (
        <div className='flex w-full gap-5 rounded-xl bg-background/20 p-3 sm:w-fit'>
          {status.map((activity, index) => {
            return (
              activity.name === 'Custom Status' && (
                <div key={index} className='grid w-full place-items-center'>
                  {activity.emoji && (
                    <span className='text-sm'>{activity.emoji.name}</span>
                  )}
                  <p className='line-clamp-2 text-center align-middle'>
                    {activity.state}
                  </p>
                </div>
              )
            );
          })}
        </div>
      )}
    </div>
  );
}
