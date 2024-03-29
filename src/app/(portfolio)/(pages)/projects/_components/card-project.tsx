import { RepositoryTypes } from '@/types';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { ExternalLink, Star } from 'lucide-react';
import Link from 'next/link';
import { FaCodeFork } from 'react-icons/fa6';
import LanguageBadge from './language-badge';

export default function CardProject({ repo }: { repo: RepositoryTypes }) {
  return (
    <Card
      key={repo.id}
      className='flex flex-col justify-between bg-foreground/20 saturate-150 filter backdrop-blur-md'
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
          <Link
            target='_blank'
            href={repo.homepage || repo.html_url}
            rel='noopener noreferrer'
            aria-label="Visit the project's live url/repo"
          >
            <ExternalLink className='h-4 w-4 text-muted-foreground' />
          </Link>
        </div>
        <CardDescription className='line-clamp-2 text-sm font-light'>
          {repo.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className='flex justify-between'>
        <div className=''>
          {Object.keys(repo.languages)
            .filter((language, index) => index < 3 && language !== 'Hack')
            .map((language) => (
              <LanguageBadge key={language} language={language} />
            ))}
        </div>
        <div className='flex gap-2'>
          <CardDescription className='flex items-center gap-1'>
            <FaCodeFork className='h-4 w-4' />
            {repo.forks_count}
          </CardDescription>
          <CardDescription className='flex items-center gap-1'>
            <Star className='h-4 w-4' />
            {repo.stargazers_count}
          </CardDescription>
        </div>
      </CardFooter>
    </Card>
  );
}
