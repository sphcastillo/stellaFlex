"use client"

import { POSTS_QUERY } from "@/sanity/lib/queries";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { SanityDocument, QueryParams } from "next-sanity";

import PostList from "./PostsList";

export default function PostsListPreview({
    initial,
    params
}: {
    initial: QueryResponseInitial<SanityDocument>;
    params: QueryParams
}){
    const { data } = useQuery<SanityDocument | null>(
        POSTS_QUERY,
        params,
        { initial }
    )
    return data ? (
    <PostList posts={data} />
    ) : (
        <div className="bg-red-100">No posts found.</div>
    )

}