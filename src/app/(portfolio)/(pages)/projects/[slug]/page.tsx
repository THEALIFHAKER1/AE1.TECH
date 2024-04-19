import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import CodeSnippet from '../_components/code-snippet';
import { getProjectTree } from '@/app/api/github/project-info/get-project-tree';
import CollapseComponents from '@/components/custom/collapse-components';
import { HeadingText } from '@/components/custom/heading-text';
import { Button } from '@/components/ui/button';
import { getProjectDetails } from '@/app/api/github/project-info/get-project-details';

export default async function ProjectInfo({
  params,
}: {
  params: { slug: string };
}) {
  const repoStructure = await getProjectTree(params.slug);
  const repo = await getProjectDetails(params.slug);
  const repoDetails = repo.repository;
  const repoReadme = repo.readme;
  return (
    <>
      <div className='flex w-full items-center justify-between align-middle '>
        <div className='grid pt-4'>
          <span className='text-3xl font-bold md:text-6xl'>
            {repoDetails.name}
          </span>
          <span className='text-sm font-light md:text-lg'>
            {repoDetails.description}
          </span>
        </div>
        <Link
          href='/projects'
          className='group flex h-5 flex-row items-center bg-foreground text-background'
        >
          <Button className='space-x-1'>
            <ArrowLeft
              size={16}
              className='duration-200 group-hover:-translate-x-1 '
            />
            <span>Back</span>
          </Button>
        </Link>
      </div>
      {repoReadme && (
        <CollapseComponents
          nameComponent={
            <HeadingText subtext='Read Me'>Project Read Me</HeadingText>
          }
          contentComponent={repoReadme}
        />
      )}
      <CollapseComponents
        nameComponent={
          <HeadingText subtext='This is the structure of the project repository. '>
            Project Structure
          </HeadingText>
        }
        contentComponent={<CodeSnippet code={repoStructure} />}
      />
    </>
  );
}
