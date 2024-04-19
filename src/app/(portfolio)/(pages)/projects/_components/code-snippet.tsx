'use client';
import React, { useState } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function CodeSnippet({
  code,
  width,
}: {
  code: any;
  width: string;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <div
      className={`rounded-lg bg-gray-800 px-8 pb-8 pt-4 font-mono text-sm text-white ${width}`}
    >
      <pre className='relative overflow-x-auto whitespace-pre-wrap'>
        <code>{code}</code>
        <div className='absolute right-0 top-0 flex justify-end'>
          <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
            <button
              className={`mt-2 text-xs ${copied ? 'bg-green-500' : 'bg-blue-500'} focus:shadow-outline rounded px-4 py-2 text-white focus:outline-none`}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </CopyToClipboard>
        </div>
      </pre>
    </div>
  );
}
