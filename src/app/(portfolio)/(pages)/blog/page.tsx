import CollapseComponents from "@/components/custom/collapse-components";
import { HeadingText } from "@/components/custom/heading-text";
import { type Metadata } from "next";
import AllBlogs from "./_components/all-blogs";
import PinnedBlogs from "./_components/pinned-blogs";
import { posts } from "@📃/blog";
import { sortPosts } from "@/lib/sort-post";

export const metadata: Metadata = {
  title: "Blog",
  description: "A blog about web development and programming",
};

// const POSTS_PER_PAGE = 5;

interface BlogPageProps {
  searchParams: {
    // page?: string;
    Search?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const searchTerm = searchParams?.Search ?? "";
  // const currentPage = Number(searchParams?.page) || 1;
  const pinnedPosts = posts.filter((post) => post.tags?.includes("pin"));
  const sortedPosts = sortPosts(posts.filter((post) => post.published)).filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  // const displayPosts = sortedPosts.slice(
  //   POSTS_PER_PAGE * (currentPage - 1),
  //   POSTS_PER_PAGE * currentPage
  // );

  return (
    <>
      <CollapseComponents
        nameComponent={
          <HeadingText subtext="Pinned Blog">Pinned Blog</HeadingText>
        }
        contentComponent={<PinnedBlogs blogs={pinnedPosts} />}
      />
      <CollapseComponents
        nameComponent={
          <HeadingText subtext="All of my blogs">All Blogs</HeadingText>
        }
        contentComponent={
          <AllBlogs
            blogs={sortedPosts}
            // totalPages={totalPages}
          />
        }
      />
    </>
  );
}
