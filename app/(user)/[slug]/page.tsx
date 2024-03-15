// ./app/[slug]/page.tsx

import { QueryParams, SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";

import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY, POST_QUERY } from "@/sanity/lib/queries";

import { client } from "@/sanity/lib/sanity.client";
import PostPreview from "@/components/PostPreview";
import BlogPost from "@/components/BlogPost";

export async function generateStaticParams() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY)
 
  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

export default async function Page({params} : {params: QueryParams}) {
  const initial = await loadQuery<SanityDocument>(POST_QUERY, params, {

    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });

  return draftMode().isEnabled ? (
    <PostPreview initial={initial} params={params} />
  ) : (
    <BlogPost post={initial.data} />
  );
}
