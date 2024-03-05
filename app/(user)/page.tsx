import { client } from "@/sanity/lib/client";
import { Post } from "@/typings";
import { cache } from "react";
import PreviewDocumentsCount from "@/components/PreviewDocumentsCount";
import PreviewSuspense from "@/components/PreviewSuspense";
import { groq } from "next-sanity";
import BlogList from "@/components/BlogList";
import { draftMode } from "next/headers";

import { SanityDocument } from 'next-sanity';
import PostList from "@/components/PostList";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";

  const query =  groq`*[_type == "post"]{
    _id,
    title,
    slug,
    author  -> {
    name,
    image},
    description,
    mainImage,
    slug
  }`;


const clientFetch = cache(client.fetch.bind(client));

export default async function Home() {

  const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY);

  return <PostList posts={initial.data} />;
  // if(draftMode()){
  //   return (
  //     <PreviewSuspense
  //       client={client}
  //     >
  //       <h1>Loading...</h1>
  //     </PreviewSuspense>
  //   )
  // }

  // if(previewData()){
  //   return (
  //     <PreviewSuspense
  //       fallback={<div>Loading...</div>}
  //     >
  //       <h1>ahlle</h1>
  //     </PreviewSuspense>
  //   )
  // }

  // const posts = await clientFetch(query);
  // return <BlogList posts={posts} />;

  // return (
  //   <main className="">


  //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
  //       {data.map((post: Post) => (
  //         <div key={post._id}>
  //           <h1 className="bold">{post.title}</h1>
  //           <h6>{post.author.name}</h6>

  //           <h3>{post.description}</h3>
            
  //         </div>
  //       ))}

  //       <BlogList />

  //     </div>
  //   </main>
  // );
}
