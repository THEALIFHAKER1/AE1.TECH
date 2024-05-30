import { env } from '@/env.mjs';
import { NextResponse } from 'next/server';

const GITHUB_TOKEN = env.GITHUB_TOKEN;

type ContentItem = {
  type: string;
  name: string;
  path: string;
  contents?: ContentItem[]; // Optional for directories
};

async function fetchProjectTree(
  repoName: string,
  path: string,
  token: string
): Promise<ContentItem[]> {
  try {
    const apiUrl = `https://api.github.com/repos/THEALIFHAKER1/${repoName}/contents/${path}`;

    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ${apiUrl}: ${response.statusText}`);
    }

    let contents: ContentItem[] = await response.json();

    // Sort contents: directories first, then files
    contents.sort((a, b) => {
      if (a.type === 'dir' && b.type !== 'dir') {
        return -1; // a is a directory, b is a file, a comes first
      } else if (a.type !== 'dir' && b.type === 'dir') {
        return 1; // a is a file, b is a directory, b comes first
      } else {
        return a.name.localeCompare(b.name); // Both are files or directories, sort alphabetically
      }
    });

    // Recursively fetch contents for directories
    for (let i = 0; i < contents.length; i++) {
      const item = contents[i];
      if (item && item.type === 'dir') {
        item.contents = await fetchProjectTree(repoName, item.path, token);
      }
    }

    return contents;
  } catch (error) {
    console.error('Error fetching project tree:', error);
    throw error;
  }
}

export async function getProjectTree(repoName: string) {
  try {
    const projectTree = await fetchProjectTree(repoName, '', GITHUB_TOKEN);

    const structure = await parseRepoData(projectTree);

    return structure;
  } catch (error) {
    console.error('Error fetching project tree:', error);
    throw error;
  }
}

export function parseRepoData(data: ContentItem[], prefix: string = '') {
  let structure = '';

  data.forEach((item) => {
    if (item.type === 'dir') {
      // For directories
      structure += `${prefix}├── ${item.name}\n`;
      // Placeholder for nested directory contents
      // Assuming `item.contents` holds an array of contents if they were fetched
      if (item.contents) {
        structure += parseRepoData(item.contents, prefix + '|   ');
      }
    } else {
      // For files
      structure += `${prefix}|   ├── ${item.name}\n`;
    }
  });

  return structure;
}
