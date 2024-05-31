import { env } from '@/env.mjs';
import { type RepositoryTypes } from '@/types';

const token = env.GITHUB_TOKEN;

export async function getRepositories(): Promise<RepositoryTypes[]> {
  try {
    const apiUrl = 'https://api.github.com/users/THEALIFHAKER1/repos';

    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: {
        tags: ['AllRepositories'],
        revalidate: 3000,
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const repositories = await response.json();

    let repositoriesWithLanguages: RepositoryTypes[] = [];

    repositoriesWithLanguages = await getRepositoryLanguages(repositories);

    return repositoriesWithLanguages;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getRepositoryLanguages(
  repositoryName: string
): Promise<RepositoryTypes[]> {
  const repositoriesWithLanguages = await Promise.all(
    (Array.isArray(repositoryName) ? repositoryName : []).map(
      async (repo: RepositoryTypes) => {
        const languagesUrl = repo.languages_url;

        const languagesResponse = await fetch(languagesUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!languagesResponse.ok) {
          throw new Error(`Failed to fetch languages for repo ${repo.name}`);
        }

        const languages = await languagesResponse.json();
        return { ...repo, languages };
      }
    )
  );

  return repositoriesWithLanguages;
}
