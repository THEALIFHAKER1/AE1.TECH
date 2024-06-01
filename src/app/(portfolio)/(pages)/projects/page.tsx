import { HeadingText } from "@/components/custom/heading-text";
import CollapseComponents from "@/components/custom/collapse-components";

import AllProjects from "./_components/all-projects";
import ProjectsCarousel from "./_components/spotlight-projects";
import { getRepositories } from "@/app/api/github/get-repositories/get-repositories";
import { type RepositoryTypes } from "@/types";

export const metadata = {
  title: "Projects",
  description: "All my projects",
};

const POSTS_PER_PAGE = 6;

export default async function ProjectPage({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    Search?: string;
  };
}) {
  const searchTerm = searchParams?.Search ?? "";
  const currentPage = Number(searchParams?.page) || 1;

  const repositories = (await getRepositories()) as RepositoryTypes[];
  const sortedRepositories = [...repositories, ...repositories].filter(
    (repo) =>
      repo.name.toLowerCase().includes(searchTerm?.toLowerCase()) ||
      repo.description?.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  const totalPages = Math.ceil(sortedRepositories.length / POSTS_PER_PAGE);
  const displayRepositories = sortedRepositories.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );
  return (
    <>
      <CollapseComponents
        nameComponent={
          <HeadingText subtext="All of my favorite projects">
            Spotlight Projects
          </HeadingText>
        }
        contentComponent={<ProjectsCarousel />}
      />
      <CollapseComponents
        nameComponent={
          <HeadingText subtext="All of my repository on github">
            GitHub Repositories
          </HeadingText>
        }
        contentComponent={
          <AllProjects
            repository={displayRepositories}
            totalPages={totalPages}
          />
        }
      />
    </>
  );
}
