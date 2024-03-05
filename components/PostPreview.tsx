"use client"

import { POSTS_QUERY } from "@/sanity/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";

import PostList from "./PostList";

export default function PostsListPreview({
    initial
}: {
    initial: QueryResponseInitial<SanityDocument[]>
}){
    const { data } = useQuery<SanityDocument[] | null>(
        POSTS_QUERY,
        {},
        { initial }
    )
    return data ?(
    <PostList posts={data} />
    ) : (
        <div>No posts found.</div>
    )

}