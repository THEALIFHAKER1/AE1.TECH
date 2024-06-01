import { PostItem } from "./post-item";

interface PinnedBlogsProps {
  blogs: Array<{
    slug: string;
    banner?: string;
    date: string;
    title: string;
    description?: string;
    tags?: string[];
  }>;
}
export default function PinnedBlogs({ blogs }: PinnedBlogsProps) {
  return (
    <div>
      {blogs?.length > 0 ? (
        <>
          {blogs.map((post) => {
            const { slug, date, title, description, tags, banner } = post;
            return (
              <PostItem
                key={slug}
                slug={slug}
                date={date}
                title={title}
                description={description}
                tags={tags}
                banner={banner}
              />
            );
          })}
        </>
      ) : (
        <p>Nothing to see here yet</p>
      )}
    </div>
  );
}
