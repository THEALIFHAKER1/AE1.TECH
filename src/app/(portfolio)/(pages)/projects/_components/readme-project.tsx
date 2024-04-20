import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export default async function ReadmeProject({ readme }: { readme: string }) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeFormat)
    .use(rehypeDocument)
    .use(rehypeStringify)
    .process(readme);
  const final = result
    .toString()
    .replace(/<img/g, '<img class="max-w-xl"')
    .replace(/<h1/g, '<h1 class="text-2xl font-semibold"')
    .replace(/<p/g, '<p class="text-sm font-normal"')
    .replace(/<h2/g, '<h2 class="text-xl font-semibold"')
    .replace(
      /<code/g,
      '<code class="text-sm font-normal bg-foreground/10 py-1 px-2 rounded inline-block my-1 text-foreground select-all"'
    )
    .replace(/<ul>/g, '<li class="list-disc">')
    .replace(/<a/g, '<a class="text-blue-500"');

  return (
    <div
      className='grid gap-2'
      dangerouslySetInnerHTML={{ __html: String(final) }}
    />
  );
}
