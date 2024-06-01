import { posts } from "@📃/blog";
import { MDXContent } from "../_components/mdx-components";
import { notFound } from "next/navigation";

import "@/styles/mdx.css";
import { type Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Tag } from "../_components/tag";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
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
      <div>
        <div className="flex w-full items-center justify-between align-middle ">
          <div className="">
            <span className="text-3xl font-bold md:text-6xl text-wrap mr-9">
              {post.title}
            </span>
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
        <div>
          {post.description && (
            <span className="text-sm font-light md:text-lg text-muted-foreground mt-5">
              {post.description}
            </span>
          )}
        </div>
      </div>
      <div className="flex gap-2 mb-2">
        {post.tags?.map((tag) => <Tag tag={tag} key={tag} />)}
      </div>
      <div className="w-full relative h-[35rem] max-w-screen-lg mx-auto">
        {post.banner && (
          <Image
            fill
            src={post.banner}
            alt="alt"
            className="rounded-xl border-2 border-white object-cover bg-center"
          />
        )}
      </div>

      <div className="prose dark:prose-invert !max-w-screen-2xl">
        <MDXContent code={post.body} />
      </div>
    </>
  );
}
