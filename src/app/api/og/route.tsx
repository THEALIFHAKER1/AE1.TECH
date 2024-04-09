/* eslint-disable @next/next/no-img-element */
import { env } from '@/env.mjs';
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          borderRadius: '8px',
          border: '5px solid white',
        }}
      >
        <img
          width={300}
          height={300}
          src={`${env.NEXT_PUBLIC_APP_URL}/icons/icon-512x512.png`}
          alt=''
        />
      </div>
    ),
    {
      width: 1920,
      height: 1080,
    }
  );
}
