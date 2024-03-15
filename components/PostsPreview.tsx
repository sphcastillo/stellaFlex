"use client"
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";

import BlogPosts from "./BlogPosts";

function PostsPreview({
    initial,
    } : {
    initial: QueryResponseInitial<SanityDocument[]>;
}) {
    const { data } = useQuery<SanityDocument[] | null>(
        POSTS_QUERY,
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