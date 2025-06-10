"use client";

import useMembershipTier from "@/hooks/useMembershipTier";
import { GetPostQueryResult } from "@/sanity.types";
import { useUser } from "@clerk/nextjs";
import React, { useState, useTransition } from "react";
import { tierMap } from "@/types/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { Loader2, Send } from "lucide-react";
import addComment from "@/actions/addComment";
import TimeAgo from "react-timeago";

function Comments({ post }: { post: GetPostQueryResult }) {
  const [comment, setComment] = useState("");
  const membershipTier = useMembershipTier();
  const { user } = useUser();
  const [isCommenting, startTransition] = useTransition();

  // Has the ability to comment
  // Greater than level 2 has the ability to comment
  const hasCommentFeature = membershipTier && membershipTier >= tierMap.powerPulse;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!post || !hasCommentFeature) return;

    startTransition(async () => {
      const id = post._id;
      const text = comment;
      try {
        setComment("");
        await addComment(id, text);
      } catch (error) {
        console.error(error);
        setComment(text);
      }
    });
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="flex items-start gap-4 bg-white rounded-lg p-2 md:p-6">
          <Avatar>
            <AvatarImage src={user?.imageUrl} />
            <AvatarFallback>
              {user?.firstName?.charAt(0)}
              {user?.lastName?.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <Textarea
              disabled={!user || !hasCommentFeature || isCommenting}
              placeholder={
                isCommenting
                  ? "Adding comment..."
                  : hasCommentFeature
                  ? "Write a comment..."
                  : "Upgrade membership to comment"
              }
              value={comment}
              onKeyDown={(e) => {
                if (
                  e.key === "Enter" &&
                  !e.shiftKey &&
                  !e.ctrlKey &&
                  !e.altKey &&
                  !e.metaKey
                ) {
                  handleSubmit(
                    e as unknown as React.FormEvent<HTMLFormElement>
                  );
                }
              }}
              onChange={(e) => setComment(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
            />
            <div className="flex justify-end mt-2">
                <Button
                    type="submit"
                    disabled={!user || !hasCommentFeature || isCommenting}
                    className='ml-auto'
                >
                    {isCommenting ? (
                        <Loader2  className="h-5 w-5 animate-spin"/>
                    ) : (
                        <Send className='h-5 w-5' />
                    )}
                </Button>
            </div>
          </div>
        </div>
      </form>

      <div className="space-y-4">
        {post?.comments && post.comments.length > 0 ? (
          post.comments.map((comment) => (
            <div
              key={comment._id}
              className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm"
            >
              <Avatar>
                <AvatarImage src={comment.userImageUrl} />
                <AvatarFallback>
                  {comment.name?.charAt(0)}
                  {comment.name?.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-baseline gap-2">
                  <h4 className="font-medium text-gray-900">{comment.name}</h4>
                  {comment.createdAt && (
                    <span className="text-xs text-gray-500">
                      <TimeAgo date={comment.createdAt} />
                    </span>
                  )}
                </div>
                <p className="text-gray-700 mt-1">{comment.comment}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-4">
            No comments yet. Be the first to share your thoughts!
          </p>
        )}
      </div>
    </div>
  );
}
export default Comments;
