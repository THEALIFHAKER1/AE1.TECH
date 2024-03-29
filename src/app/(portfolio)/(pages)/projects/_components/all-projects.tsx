'use client';
import { RepositoryTypes } from '@/types';
import CardProject from './card-project';
import { PaginationSection } from '../../../../../components/custom/pagination-section';
import { useState } from 'react';
import { SearchBar } from '@/components/custom/search-bar';

export default function AllProjects({
  repository,
}: {
  repository: RepositoryTypes[];
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = repository.slice(firstPostIndex, lastPostIndex);

  return (
    <div className='space-y-4'>
      <SearchBar placeholder={'Search for a repository'} />
      <div className='grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3'>
        {currentPosts.map((repo) => (
          <CardProject repo={repo} key={repo.id} />
        ))}
      </div>
      <PaginationSection
        totalPosts={repository.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
