import { type RepositoryTypes } from "@/types";
import CardProject from "./card-project";
import { SearchBar } from "@/components/custom/search-bar";
import { RepositoryOptionConfig } from "@/config/repository-option";
// import { QueryPagination } from "@/components/custom/query-pagination";
export default function AllProjects({
  repository,
  // totalPages,
}: {
  repository: RepositoryTypes[];
  // totalPages: number;
}) {
  const isSearch = RepositoryOptionConfig.search;
  return (
    <div className="space-y-4">
      {isSearch && <SearchBar placeholder={"Search for a repository"} />}
      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {repository.map((repo) => (
          <CardProject repo={repo} key={repo.id} />
        ))}
      </div>
      {/* <QueryPagination totalPages={totalPages} /> */}
    </div>
  );
}
