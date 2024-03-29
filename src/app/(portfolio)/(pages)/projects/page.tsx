import { HeadingText } from '@/components/custom/heading-text';
import CollapseComponents from '@/components/custom/collapse-components';

import AllProjects from './_components/all-projects';
import ProjectsCarousel from './_components/spotlight-projects';
import { getRepositories } from '@/app/api/github/get-repositories/get-repositories';
import { RepositoryTypes } from '@/types';

export const metadata = {
  title: 'Projects',
  description: 'All my projects',
};

export default async function ProjectPage({
  searchParams,
}: {
  searchParams?: {
    Search?: string;
  };
}) {
  const searchTerm = searchParams?.Search || '';

  const repositories = (await getRepositories()) as RepositoryTypes[];
  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm?.toLowerCase() || '')
  );
  return (
    <div className='flex flex-col space-y-4'>
      <CollapseComponents
        nameComponent={
          <HeadingText subtext='All of my favorite projects'>
            Spotlight Projects
          </HeadingText>
        }
        contentComponent={<ProjectsCarousel />}
      />
      <CollapseComponents
        nameComponent={
          <HeadingText subtext='All of my repository on github'>
            GitHub Repositories
          </HeadingText>
        }
        contentComponent={<AllProjects repository={filteredRepositories} />}
      />
    </div>
  );
}
