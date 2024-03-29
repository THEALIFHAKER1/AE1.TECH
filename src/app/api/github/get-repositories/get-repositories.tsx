import { env } from '@/env.mjs';
import { RepositoryTypes } from '@/types';

export async function getRepositories(): Promise<RepositoryTypes[]> {
  const token = env.GITHUB_TOKEN;
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

    const repositoriesWithLanguages = await Promise.all(
      repositories.map(async (repo: RepositoryTypes) => {
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
      })
    );

    return repositoriesWithLanguages;
  } catch (error) {
    // Handle the error here
    console.error(error);
    throw error;
  }
}
