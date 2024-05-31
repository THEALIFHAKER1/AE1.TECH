import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';
import '@/styles/github-markdown.css';
export default async function ReadmeProject({ readme }: { readme: string }) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkEmoji)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeFormat)
    .use(rehypeDocument)
    .process(readme);

  return (
    <>
      <style>{`
    .markdown-body {
      box-sizing: border-box;
      margin: 0 auto;
      padding: 45px;
    }
    @media (max-width: 767px) {
      .markdown-body {
        padding: 15px;
      }
    }
  `}</style>
      <article className='markdown-body bg-foreground/20 text-foreground'>
        <div
          className=''
          dangerouslySetInnerHTML={{ __html: result.toString() }}
        />
      </article>
    </>
  );
}
