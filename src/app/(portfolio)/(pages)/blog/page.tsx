import CollapseComponents from '@/components/custom/collapse-components';
import { HeadingText } from '@/components/custom/heading-text';
import { type Metadata } from 'next';
import AllBlogs from './_components/all-blogs';
import PinnedBlogs from './_components/pinned-blogs';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'A blog about web development and programming',
};

// const POSTS_PER_PAGE = 5;

interface BlogPageProps {
  searchParams: {
    page?: string;
    Search?: string;
  };
}

export default async function BlogPage({ 
  // searchParams
 }: BlogPageProps) {
  // const currentPage = Number(searchParams?.page) || 1;
  // const searchTerm = searchParams?.Search || '';

  return (
    <>
      <CollapseComponents
        nameComponent={
          <HeadingText subtext='Pinned Blog'>Pinned Blog</HeadingText>
        }
        contentComponent={<PinnedBlogs />}
      />
      <CollapseComponents
        nameComponent={
          <HeadingText subtext='All of my blogs'>All Blogs</HeadingText>
        }
        contentComponent={<AllBlogs />}
      />
    </>
  );
}
