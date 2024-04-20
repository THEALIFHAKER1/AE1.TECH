'use client';
import { Icons } from '@/components/icons/icons';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function CodeSnippet({ code }: { code: any }) {
  const [copied, setCopied] = useState(false);

  if (copied) {
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div
      className={`rounded-lg bg-foreground/20 px-8 pb-8 pt-4 font-mono text-sm `}
    >
      <pre className='relative overflow-x-auto whitespace-pre-wrap'>
        <code className='select-text text-xs md:text-sm'>{code}</code>
        <div className='absolute right-0 top-0 flex justify-end'>
          <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
            <Button
              className={` ${copied ? 'bg-green-500' : 'bg-foreground'} focus:shadow-outline rounded  text-background focus:outline-none hover:${copied ? 'bg-green-500' : 'bg-foreground'}`}
              size={'icon'}
            >
              {copied ? (
                <Icons.copyCheck className='h-4 w-4' />
              ) : (
                <Icons.copy className='h-4 w-4' />
              )}
            </Button>
          </CopyToClipboard>
        </div>
      </pre>
    </div>
  );
}
