import { SanityDocument } from 'next-sanity';
import PostsList from "@/components/PostsList";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { groq } from "next-sanity";
import { draftMode } from 'next/headers';
import PostsListPreview from '@/components/PostPreview';
import { client } from '@/sanity/lib/client';

const query = groq`*[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;


export default async function Home() {

  // if(draftMode().isEnabled){
  //   const initial = await client.fetch(query);

  //   return <PostsListPreview initial={initial} />
  // }


  const posts = await client.fetch(query);
  return <PostsList posts={posts} />

}
