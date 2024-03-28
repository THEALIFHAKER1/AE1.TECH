import { HeadingText } from '@/components/custom/heading-text';
import { SearchBar } from '@/components/custom/search-bar';
import CollapseComponents from '@/components/custom/collapse-components';

import AllProjects from './_components/all-projects';
import ProjectsCarousel from './_components/projects-carousel';

export const metadata = {
  title: 'Projects',
  description: 'All my projects',
};

export default function ProjectPage({
  searchParams,
}: {
  searchParams?: {
    Search?: string;
  };
}) {
  const searchTerm = searchParams?.Search || '';

  return (
    <main className='flex flex-col py-8'>
      <div className='space-y-4'>
        <CollapseComponents
          nameComponent={
            <HeadingText subtext='All of my favorite projects'>
              Spotlight Projects
            </HeadingText>
          }
          contentComponent={<ProjectsCarousel />}
        />
        <HeadingText subtext='All of my repository on github'>
          GitHub Repositories
        </HeadingText>
        <SearchBar placeholder={'Search for a repository'} />

        <AllProjects filter={searchTerm} />
      </div>
    </main>
  );
}
