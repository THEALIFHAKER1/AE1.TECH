import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import CodeSnippet from '../_components/code-snippet';
import { getProjectTree } from '@/app/api/github/project-info/get-project-tree';
import CollapseComponents from '@/components/custom/collapse-components';
import { HeadingText } from '@/components/custom/heading-text';
import { Button } from '@/components/ui/button';
import { getProjectDetails } from '@/app/api/github/project-info/get-project-details';
import ReadmeProject from '../_components/readme-project';
import { Icons } from '@/components/icons/icons';

export default async function ProjectInfo({
  params,
}: {
  params: { slug: string };
}) {
  const repoStructure = await getProjectTree(params.slug);
  const repo = await getProjectDetails(params.slug);
  const repoDetails = repo.repository;
  const repoReadme = repo.readme;
  console.log(repoReadme);
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
        <Link href='/projects' className='group flex flex-row items-center '>
          <Button className='space-x-1 bg-foreground p-5 text-background'>
            <ArrowLeft
              size={16}
              className='duration-200 group-hover:-translate-x-1 '
            />
            <span>Back</span>
          </Button>
        </Link>
      </div>
      <div className='flex w-fit gap-3 rounded-lg bg-foreground/20 p-2'>
        <div className='flex items-center gap-1'>
          <Icons.fork className='h-4 w-4' />
          {repoDetails.forks_count}
        </div>
        <div className='flex items-center gap-1'>
          <Icons.star className='h-4 w-4' />
          {repoDetails.stargazers_count}
        </div>

        <div className='flex items-center gap-1'>
          <Icons.eye className='h-4 w-4' />
          {repoDetails.watchers_count}
        </div>

        <div className='flex items-center gap-1'>
          <Icons.issue className='h-4 w-4' />
          {repoDetails.open_issues_count}
        </div>

        <div className='flex items-center gap-1'>
          <Icons.calendar className='h-4 w-4' />
          {new Date(repoDetails.updated_at).toLocaleDateString()}
        </div>
      </div>
      {repoReadme && (
        <CollapseComponents
          nameComponent={
            <HeadingText subtext='ReadMe and info of projects'>
              Project Info
            </HeadingText>
          }
          contentComponent={<ReadmeProject readme={repoReadme} />}
        />
      )}
      <CollapseComponents
        nameComponent={
          <HeadingText subtext='Structure of the project repository. '>
            Project Structure
          </HeadingText>
        }
        contentComponent={<CodeSnippet code={repoStructure} />}
      />
    </>
  );
}
