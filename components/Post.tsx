"use client";
import { GetPostsQueryResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import Badge from "./Badge/Badge";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { MessageCircleIcon } from "lucide-react";
import TimeAgo from "react-timeago";
import { useUser } from "@clerk/nextjs";
import {
  tierMap,
  normalizeTierAccess,
} from "@/types/types";
import useMembershipTier from "@/hooks/useMembershipTier";
import LockedPost from "./LockedPost";

function Post({ post }: { post: GetPostsQueryResult[number] }) {
  console.log("🔍 Post data:", post.mainImage?.asset);
  const membershipTier = useMembershipTier();
  const { user } = useUser();

  const safeTier = post.tierAccess
    ? normalizeTierAccess(post.tierAccess)
    : undefined;

  if (!safeTier) {
    console.warn("Invalid tierAccess:", post.tierAccess);
    return null;
  }

  const postMembershipLevel = tierMap[safeTier];
  const isLocked = membershipTier && membershipTier < postMembershipLevel;

  if (!membershipTier)
    return (
      <div className="bg-white rounded-lg shadow-sm relative animate-pulse">
        {post.mainImage && (
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-lg bg-gray-200" />
        )}

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>

          {!user && (
            <div className="space-y-2 text-center my-8">
              <p className="text-gray-500">Sign in to view this post.</p>
            </div>
          )}

          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );

  if (isLocked) return <LockedPost post={post} />;

  return (
    <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 group cursor-pointer relative">
      {/* Optional clickable overlay */}
      <Link
        href={`/post/${post.slug?.current}`}
        className="absolute inset-0 z-10"
        aria-label={`Read more: ${post.title}`}
      />

      {post.mainImage && (
        <div className="max-w-5xl mx-auto relative aspect-[16/9] w-full overflow-hidden rounded-t-lg">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.mainImage.alt || post.title || "Post cover image"}
            width={800}
            height={450}
            className="w-full h-full object-contain group-hover:scale-105 transition-all duration-300"
          />
        </div>
      )}

      {post.tierAccess && (
        <div className="pl-10 pt-6 max-w-4xl mx-auto">
          <div className='w-[200px] flex justify-center mx-auto'>
            <Badge tier={safeTier} variant="simple" />
          </div>
        </div>
      )}

      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          <Link href={`/post/${post.slug?.current}`}>{post.title}</Link>
        </h2>

        {post.body && (
          <div className="text-gray-600 prose">
            <PortableText value={post.body as PortableTextBlock[]} />
          </div>
        )}
      </div>

      <div className="flex items-center justify-between p-4">
        <div className="text-sm text-gray-500 text-right border border-gray-200 rounded-full px-4 py-1 flex items-center gap-2">
          <MessageCircleIcon className="w-4 h-4" />
          {post.comments?.length} comments
        </div>
        <div className="text-right text-sm text-gray-500">
          <TimeAgo date={post._createdAt} />
        </div>
      </div>
    </article>
  );
}
export default Post;
