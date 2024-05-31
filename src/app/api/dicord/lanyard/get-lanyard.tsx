import { env } from '@/env.mjs';
import { useEffect, useState, useMemo } from 'react';

export type DiscordTypes = {
  kv: Record<string, unknown>;
  spotify: {
    track_id?: string;
    timestamps?: {
      start: number;
      end: number;
    };
    album?: string;
    album_art_url?: string;
    artist?: string;
    song?: string;
  };
  discord_user: {
    id: string;
    username: string;
    avatar: string;
    global_name: string;
  };
  activities: Array<{
    id?: string;
    name?: string;
    state?: string;
    type?: number;
    emoji?: {
      name?: string;
    };
    created_at?: number;
    details?: string;
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
    application_id?: string;
  }>;
  discord_status: 'online' | 'offline' | 'idle' | 'dnd' | string;
  active_on_discord_web: boolean;
  active_on_discord_desktop: boolean;
  active_on_discord_mobile: boolean;
  listening_to_spotify: boolean;
};

const DiscordID: string = env.NEXT_PUBLIC_APP_DISCORD_ID;
const socket = 'wss://api.lanyard.rest/socket';

export default function GetLanyard(): DiscordTypes | null {
  const [Lanyard, setLanyard] = useState<DiscordTypes | null>(null);

  useEffect(() => {
    const ws: WebSocket = new WebSocket(socket);

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          op: 2,
          d: {
            subscribe_to_id: DiscordID,
          },
        })
      );
    };

    ws.onmessage = (e: MessageEvent) => {
      const data: any = JSON.parse(e.data);
      if (data.t === 'INIT_STATE' || data.t === 'PRESENCE_UPDATE') {
        setLanyard(data.d);
      }
    };

    return () => {
      ws.close();
    };
  }, []);

  return useMemo(() => Lanyard, [Lanyard]);
}