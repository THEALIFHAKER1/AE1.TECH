import { RepositoryTypes } from '@/types';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import Link from 'next/link';
import LanguageBadge from './language-badge';
import { Icons } from '@/components/icons/icons';

export default function CardProject({ repo }: { repo: RepositoryTypes }) {
  return (
    <Card
      key={repo.id}
      className='flex h-40 justify-between flex-col bg-foreground/20 saturate-150 filter backdrop-blur-md'
    >
      <CardHeader>
        <div className='flex justify-between'>
          <Link
            target='_blank'
            href={repo.html_url}
            rel='noopener noreferrer'
            aria-label={repo.html_url}
          >
            <CardTitle className='text-base hover:underline'>
              {repo.name}
            </CardTitle>
          </Link>
          <div className='flex items-center gap-2'>
            <Link href={`projects/${repo.name}`}>
              <Icons.projectData className='h-4 w-4 text-muted-foreground' />
            </Link>
            <Link
              target='_blank'
              href={repo.homepage || repo.html_url}
              rel='noopener noreferrer'
              aria-label="Visit the project's live url/repo"
            >
              <Icons.externalLink className='h-4 w-4 text-muted-foreground' />
            </Link>
          </div>
        </div>
        <CardDescription className='line-clamp-2 text-xs font-light'>
          {repo.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className='flex justify-between'>
        <div className='flex-nowrap gap-2 flex'>
          {Object.keys(repo.languages)
            .filter((language, index) => index < 3 && language !== 'Hack')
            .map((language) => (
              <LanguageBadge key={language} language={language} />
            ))}
        </div>
        <div className='flex gap-2'>
          <CardDescription className='flex items-center gap-1'>
            <Icons.fork className='h-4 w-4' />
            {repo.forks_count}
          </CardDescription>
          <CardDescription className='flex items-center gap-1'>
            <Icons.star className='h-4 w-4' />
            {repo.stargazers_count}
          </CardDescription>
        </div>
      </CardFooter>
    </Card>
  );
}
