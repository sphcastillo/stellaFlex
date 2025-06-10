'use client'
import { GetPostsQueryResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { Lock, MessageCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { normalizeTierAccess } from "@/types/types";
import TierBadge from "../Badge/TierBadge";
import CreatedAt from "../CreatedAt";

function LockedPost({ post }: { post: GetPostsQueryResult[number] }) {
  const safeTier = post.tierAccess
    ? normalizeTierAccess(post.tierAccess)
    : undefined;
  return (
    <Link href="/pricing">
      <article
        className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 group cursor-pointer relative`}
      >
        {post.mainImage?.asset && (
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-lg rel">
            <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
              <Lock className="w-12 h-12 text-white" />
            </div>
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.mainImage.alt || post.title || "Post cover image"}
              className="absolute inset-0 w-full h-full object-contain blur-sm"
              width={1280}
              height={720}
              priority
            />
          </div>
        )}

        {safeTier && (
          <div className="absolute top-4 right-4 z-20">
            <TierBadge tierAccess={safeTier} />
          </div>
        )}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {post.title}
          </h2>

          <div className="relative">
            {/* Lock pattern background */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-6 gap-4">
                {Array(18)
                  .fill(0)
                  .map((_, i) => (
                    <Lock key={i} className="w-4 h-4 text-gray-400" />
                  ))}
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />

            <div className="blur-[6px] text-gray-600 prose opacity-75 relative z-20">
              {post.body && (
                <div className="h-fit overflow-hidden">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Nice try hacking the site but you are not getting in. :D Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Nice try hacking the site but you are not getting in. :D Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Nice try hacking the site but you are not getting in. :D
                </div>
              )}
            </div>
            <div className="absolute inset-0 flex items-center justify-center z-30">
              <div className="bg-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700 transition-colors duration-200 flex items-center space-x-2 shadow-lg gap-2">
                <Lock className="w-4 h-4" />
                Unlock Premium Content
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-500 text-right border border-gray-200 rounded-full px-4 py-1 flex items-center gap-2">
              <MessageCircleIcon className="w-4 h-4" />
              {post.comments?.length} comments
            </div>
            <div className="text-sm text-gray-500 text-right">
              <CreatedAt date={post._createdAt} />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
export default LockedPost;
