import CollapseComponents from '@/components/custom/collapse-components';
import { HeadingText } from '@/components/custom/heading-text';
import { type Metadata } from 'next';
import AllBlogs from './_components/all-blogs';
import PinnedBlogs from './_components/pinned-blogs';
import { posts } from '#site/content';
import { PostItem } from './post-item';
import { sortPosts } from '@/lib/sort-post';

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
 const sortedPosts = sortPosts(posts.filter((post) => post.published));
 const displayPosts = sortedPosts

  return (
    <>

{displayPosts?.length > 0 ? (
            <ul className="flex flex-col">
              {displayPosts.map((post) => {
                const { slug, date, title, description, tags } = post;
                return (
                  <li key={slug}>
                    <PostItem
                      slug={slug}
                      date={date}
                      title={title}
                      description={description}
                      tags={tags}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Nothing to see here yet</p>
          )}
          
      {/* <CollapseComponents
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
      /> */}
    </>
  );
}
