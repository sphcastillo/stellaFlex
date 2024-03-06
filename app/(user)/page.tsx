import PostsList from "@/components/PostsList";
import {LiveQuery} from 'next-sanity/preview/live-query';
import { groq } from "next-sanity";
import { draftMode } from 'next/headers';
import { client } from '@/sanity/lib/client';
import PreviewPostsList from "@/components/PreviewPostsList";
// import { sanityFetch } from "@/sanity/lib/sanity.fetch";

const query = groq`*[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;


export default async function Home() {

  const posts = await client.fetch(query);


  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={query}
      initialData={posts}
      as={PreviewPostsList}
    >
      <PostsList posts={posts} />
    </LiveQuery>
  )


}
