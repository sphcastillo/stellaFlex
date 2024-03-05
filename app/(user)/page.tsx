import { SanityDocument } from 'next-sanity';
import PostsList from "@/components/PostsList";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";

import { draftMode } from 'next/headers';
import PostsListPreview from '@/components/PostPreview';


export default async function Home() {

  const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY, {}, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });

  return draftMode().isEnabled ? (
    <PostsListPreview initial={initial} />
  ) : (
  <PostsList posts={initial.data} />)

}
