import { QueryParams} from "next-sanity";
import { draftMode } from "next/headers";
import { groq } from "next-sanity";
import { loadQuery } from "@/sanity/lib/store";

import { client } from "@/sanity/lib/sanity.client";
import PostPreview from "@/components/PostPreview";
import BlogPost from "@/components/BlogPost";


type Props = {
  post: Post[];
};
const query = groq`*[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

const singlePageQuery = groq`*[_type=='post' && slug.current == $slug] {
  ...,
  author->,
  categories[]->
}[0]
`;


export async function generateStaticParams() {
  const posts = await client.fetch<Post[]>(groq`*[_type=='post'] {
    slug
  }`);


  return posts.map((post) => ({
    slug: post?.slug?.current
  }))
};


export default async function Page({params} : {params: QueryParams}) {

  const { slug } = params;

  const query = groq`*[_type=='post' && slug.current == $slug][0] {
    ...,
    author->,
    categories[]->
  }`;

  const post: Post = await client.fetch(query, { slug });

  // const initial = await loadQuery<any>(singlePageQuery, params, {
  

  //   perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  // });
  

  
  return draftMode().isEnabled ? (
    <PostPreview initial={initial} />
  ) : (
    <BlogPost post={post} />
  );
}
