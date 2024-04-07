import { TimeZoneFormatterTypes } from '@/types';

export const timeZoneFormatterConfig: TimeZoneFormatterTypes =
  new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kuala_Lumpur',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
