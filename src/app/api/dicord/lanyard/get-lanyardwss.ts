'use client';
import { useEffect, useState } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

// Discord
type DiscordUser = {
  id: string;
  username: string;
  avatar: string;
  global_name: string;
};

type Activity = {
  name: string;
  state?: string;
  details?: string;
  application_id?: string;
  timestamps?: {
    start?: number;
    end?: number;
  };
  assets?: {
    large_image?: string;
    large_text?: string;
    small_image?: string;
    small_text?: string;
  };
};

type DiscordApiContent = {
  spotify: {
    album_art_url: string;
  };
  discord_user: DiscordUser;
  activities: Activity[];
  discord_status: string;
} & DiscordKeyString;

type DiscordKeyString = {
  [key: string]: DiscordApiContent;
};

type DiscordApiResponse = {
  data: DiscordApiContent;
};
interface MessageData {
  op: number;
  t: string;
  d: DiscordApiContent;
}
export default function GetLanyardWSS() {
  const [data, setData] = useState<DiscordApiResponse | null>(null);
  const userId = '565526781701128202';
  const defaultInterval = 5000;
  const socketUrl = 'wss://api.lanyard.rest/socket';

  const initMessage = () => {
    sendMessage(JSON.stringify({ op: 2, d: { subscribe_to_ids: [userId] } }));
  };

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    onOpen: () => {
      initMessage();
      handleHello();
    },
    shouldReconnect: () => true,
  });

  useEffect(() => {
    if (readyState === ReadyState.OPEN) {
      initMessage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readyState, userId, sendMessage]);

  const handleEvent = (messageData: MessageData) => {
    const eventData = messageData.d;
    switch (messageData.t) {
      case 'INIT_STATE':
        setData({ data: eventData && eventData[userId] });
        break;
      case 'PRESENCE_UPDATE':
        setData({ data: eventData });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (lastMessage) {
      const messageData = JSON.parse(lastMessage.data);
      handleEvent(messageData);
    }
  }, [lastMessage]);

  const handleHello = () => {
    const heartbeatInterval = defaultInterval;

    const heartbeatIntervalId = setInterval(() => {
      sendMessage(JSON.stringify({ op: 3 }));
    }, heartbeatInterval);

    return () => clearInterval(heartbeatIntervalId);
  };
  console.log(data);
  return data?.data;
}
