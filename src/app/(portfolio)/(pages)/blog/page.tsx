import CollapseComponents from '@/components/custom/collapse-components';
import { HeadingText } from '@/components/custom/heading-text';
import { type Metadata } from 'next';
import AllBlogs from './_components/all-blogs';
import PinnedBlogs from './_components/pinned-blogs';
import { posts } from '@📃/blog';
import { sortPosts } from '@/lib/sort-post';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'A blog about web development and programming',
};

interface BlogPageProps {
  searchParams: {
    page?: string;
    Search?: string;
  };
}

export default async function BlogPage({ 
  searchParams
 }: BlogPageProps) {
  const searchTerm = searchParams?.Search ?? '';
const searchResults = sortPosts(posts.filter((post) => post.published)) // Filter for published posts only // Sort the published posts
  .filter((post) =>
    searchTerm?.toLowerCase() // Check if searchTerm exists and convert to lowercase
      ? post.title.toLowerCase().includes(searchTerm.toLowerCase()) // Filter by title search
      : true // Include all posts if no searchTerm
  );



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
        contentComponent={<AllBlogs blogs={searchResults} />}
      />
    </>
  );
}
