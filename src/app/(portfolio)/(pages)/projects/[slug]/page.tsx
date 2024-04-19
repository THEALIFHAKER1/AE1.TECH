import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import CodeSnippet from '../_components/code-snippet';
import { getProjectTree } from '@/app/api/github/project-tree/get-project-tree';

export default async function ProjectInfo({
  params,
}: {
  params: { slug: string };
}) {
  const repoStructure = await getProjectTree(params.slug);
  return (
    <div>
      <Link href='/' className='group  flex flex-row items-center space-x-1'>
        <ArrowLeft
          size={16}
          className='duration-200 group-hover:-translate-x-1 '
        />
        <span>Back</span>
      </Link>
      ProjectInfo <span className='text-xl font-bold'>{params.slug}</span>
      <div className='flex w-full flex-col items-center justify-center sm:items-start'>
        <CodeSnippet code={repoStructure} width='w-full' />
      </div>
    </div>
  );
}
