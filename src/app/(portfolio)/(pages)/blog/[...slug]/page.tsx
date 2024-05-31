import { posts } from "@📃/blog";
import { MDXContent } from "../mdx-components";
import { notFound } from "next/navigation";

import "@/styles/mdx.css";
import { type Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Tag } from "../tag";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post?.published) {
    notFound();
  }

  return (
    <>
      <div className="flex w-full items-center justify-between align-middle ">
        <div className="grid pt-4">
          <span className="text-3xl font-bold md:text-6xl text-wrap w-3/4">
            {post.title}
          </span>
          {post.description && (
            <span className="text-sm font-light md:text-lg text-muted-foreground mt-5">
              {post.description}
            </span>
          )}
        </div>
        <Link href="/blog" className="group flex flex-row items-center ">
          <Button className="space-x-1 bg-foreground p-5 text-background">
            <ArrowLeft
              size={16}
              className="duration-200 group-hover:-translate-x-1 "
            />
            <span>Back</span>
          </Button>
        </Link>
      </div>
      <div className="flex gap-2 mb-2">
        {post.tags?.map((tag) => <Tag tag={tag} key={tag} />)}
      </div>
      <hr className="my-4" />
      <div className="prose dark:prose-invert">
        <MDXContent code={post.body} />
      </div>
    </>
  );
}
