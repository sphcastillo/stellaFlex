"use client"
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import { groq } from "next-sanity";
import BlogPosts from "./BlogPosts";

const query = groq`*[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
  `;

function PostsPreview({
    initial,
    } : {
    initial: QueryResponseInitial<Post[]>;
}) {
    const { data } = useQuery<Post[] | null>(
        query,
        {},
        { initial }
    )
    return data ? (
        <BlogPosts posts={data} />
    ) : (
        <p>No posts found!</p>
    )
}

export default PostsPreview;