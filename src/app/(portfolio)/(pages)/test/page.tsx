import { getUserInfo } from '@/app/api/duolingo/get-userinfo/get-userinfo';
import React from 'react';

async function Page() {
  const duo = await getUserInfo();
  return (
    <div>
      <h1>{duo.id}</h1>
    </div>
  );
}

export default Page;
