'use client'
import { GetPostsQueryResult } from "@/sanity.types";
import PostIntro from "./PostIntro";

export default function PostGrid({ posts }: { posts: GetPostsQueryResult }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <PostIntro key={index} post={post} />
      ))}
    </div>
  );
} 