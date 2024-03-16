'use client'
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { QueryParams } from "next-sanity";
import { groq } from "next-sanity";
import BlogPost from "./BlogPost";


function PostPreview({
  perspective,
  params
}: {
  perspective: "previewDrafts" | "published";
  params: QueryParams
}) {

  const query = groq`*[_type=='post' && slug.current == $slug][0] {
    ...,
    author->,
    categories[]->
  }`;

  const { slug } = params;
  const { data, error } = useQuery<Post | null>(
    query,
    { slug },
    { initial: { perspective } as QueryResponseInitial<Post | null> }
  );

  if (error) {
    const errorMessage = (error as { message: string }).message;

    return <div className="bg-red-100">ERROR: {errorMessage}</div>;
  }

  return data ? (
    <BlogPost post={data} />
  ) : (
    <div className="bg-red-100">Unfortunately, this post cannot be found</div>
  );
}

export default PostPreview;