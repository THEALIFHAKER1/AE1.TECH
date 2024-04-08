import { env } from '@/env.mjs';

const DiscordID = env.DISCORD_ID;

export async function GetLanyard() {
  try {
    const api = `https://api.lanyard.rest/v1`;
    const response = await fetch(`${api}/users/${DiscordID}`);
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
