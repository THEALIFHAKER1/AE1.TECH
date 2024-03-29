import { getRepositories } from '@/app/api/github/get-repositories/get-repositories';
import { RepositoryTypes } from '@/types';
import CardProject from './card-project';

export default async function AllProjects({ filter }: { filter: string }) {
  const repositories = (await getRepositories()) as RepositoryTypes[];
  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(filter?.toLowerCase() || '')
  );
  return (
    <div className='grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3'>
      {filteredRepositories.map((repo) => (
        <CardProject repo={repo} key={repo.id} />
      ))}
    </div>
  );
}
