
import { LiveQuery } from 'next-sanity/preview/live-query';
import { groq } from "next-sanity";
import { draftMode } from 'next/headers';
import { sanityFetch } from "@/sanity/lib/sanity.fetch";
import PreviewPostsList from "@/components/PreviewPostsList";
import PostsList from "@/components/PostsList";

const query = groq`*[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;


export default async function Home() {


  const data = await sanityFetch<any>({query});

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={query}
      initialData={data}
      as={PreviewPostsList}
    >
      <PostsList posts={data} />
    </LiveQuery>
  )


}
