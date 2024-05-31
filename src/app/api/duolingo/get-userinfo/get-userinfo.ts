const Duolingo = require('duolingo');
import { type DuolingoTypes } from '@/types';

export async function getUserInfo(): Promise<DuolingoTypes> {
  try {
    const duo = new Duolingo('THEALIFHAKER1');
    await duo.init();
    const users = duo.data.users[0];
    return users;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
