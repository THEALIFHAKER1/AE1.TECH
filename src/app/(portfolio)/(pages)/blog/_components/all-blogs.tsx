import { SearchBar } from "@/components/custom/search-bar";
import { PostItem } from "./post-item";

interface AllBlogsProps {
  blogs: Array<{
    slug: string;
    banner?: string;
    date: string;
    title: string;
    description?: string;
    tags?: string[];
  }>;
}
export default function AllBlogs({ blogs }: AllBlogsProps) {
  return (
    <div className="space-y-4">
      <SearchBar placeholder={"Search for a blog"} />
      <div className="grid gap-2">
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
    </div>
  );
}
