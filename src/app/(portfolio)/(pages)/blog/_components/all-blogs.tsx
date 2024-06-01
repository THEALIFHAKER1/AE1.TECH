import { SearchBar } from "@/components/custom/search-bar";
import { PostItem } from "./post-item";
import { QueryPagination } from "../../../../../components/custom/query-pagination";

interface AllBlogsProps {
  blogs: Array<{
    slug: string;
    banner?: string;
    date: string;
    title: string;
    description?: string;
    tags?: string[];
  }>;
  totalPages: number;
}
export default function AllBlogs({ blogs, totalPages }: AllBlogsProps) {
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
      <QueryPagination totalPages={totalPages} />
    </div>
  );
}
