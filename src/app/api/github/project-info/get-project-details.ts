import { env } from '@/env.mjs';
import { RepositoryTypes } from '@/types';
const token = env.GITHUB_TOKEN;

export async function getProjectDetails(
  projectName: string
): Promise<{ repository: RepositoryTypes; readme: string }> {
  const apiUrl = `https://api.github.com/repos/THEALIFHAKER1/${projectName}`;

  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  const repository = await response.json();

  const readmeResponse = await fetch(`${apiUrl}/readme`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!readmeResponse.ok) {
    throw new Error(
      `Failed to fetch readme with status ${readmeResponse.status}`
    );
  }

  const readmeData = await readmeResponse.json();
  const readme = atob(readmeData.content);

  return { repository, readme };
}
