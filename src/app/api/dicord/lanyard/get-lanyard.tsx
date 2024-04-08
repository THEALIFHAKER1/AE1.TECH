import { env } from '@/env.mjs';
import { DiscordTypes } from '@/types';

const DiscordID = env.DISCORD_ID;

export async function GetLanyard(): Promise<DiscordTypes> {
  try {
    const api = `https://api.lanyard.rest/v1`;
    const response = await fetch(`${api}/users/${DiscordID}`, {
      cache: 'no-store',
    });
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
