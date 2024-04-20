import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import remarkGfm from 'remark-gfm';
import Image from 'next/image'; // dont remove this
import remarkEmoji from 'remark-emoji';
import '@/style/github-markdown.css';

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

  const final = result.toString().replace(/<img/g, '<Image loading="lazy"');

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
        <div className='' dangerouslySetInnerHTML={{ __html: final }} />
      </article>
    </>
  );
}
