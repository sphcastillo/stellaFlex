// ./app/page.tsx

import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";

import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import BlogPosts from "@/components/BlogPosts";
import PostsPreview from "@/components/PostsPreview";

export default async function Home() {
  const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY, {}, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published"
  });

  return draftMode().isEnabled ? (
    <PostsPreview initial={initial} />
  ) : (
    <BlogPosts posts={initial.data} />
  )
}
