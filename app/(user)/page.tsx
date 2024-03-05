import { SanityDocument } from 'next-sanity';
import PostList from "@/components/PostList";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";


export default async function Home() {

  const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY);

  return <PostList posts={initial.data} />;

}
