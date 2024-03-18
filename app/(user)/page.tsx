import { draftMode } from "next/headers";
import { loadQuery } from "@/sanity/lib/store";

import { groq } from "next-sanity";
import BlogPosts from "@/components/BlogPosts";
import PostsPreview from "@/components/PostsPreview";

const query = groq`*[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

export default async function Home() {
  const initial = await loadQuery<Post[]>(query, {}, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published"
  });


  return draftMode().isEnabled ? (
    <PostsPreview initial={initial}  />
  ) : (
    <BlogPosts posts={initial.data}  />
  )
}
