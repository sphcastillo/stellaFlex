'use client'
import { GetPostsQueryResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

function PostIntro({ post }: { post: GetPostsQueryResult[number] }) {
  const [showDescription, setShowDescription] = useState(false);
  const router = useRouter();
  
  const imageUrl = post.mainImage?.asset ? urlFor(post.mainImage).url() : null;
  
  if (!imageUrl) {
    console.warn("No image URL available for post:", post._id);
    return null;
  }

  const handleCardClick = () => {
    if (post.slug?.current) {
      router.push(`/post/${post.slug.current}`);
    } else {
      console.warn("No slug available for post:", post._id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <motion.div 
        className="relative w-full h-[300px] overflow-hidden rounded-lg group cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={handleCardClick}
      >
        <Image
          src={imageUrl}
          alt={post.mainImage?.alt || post.title || "Post image"}
          width={600}
          height={300}
          className="w-full h-full object-cover rounded-lg"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <motion.h2 
              className="text-2xl font-bold text-white mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {post.title}
            </motion.h2>
            {post.description && (
              <motion.div 
                className="text-gray-200 text-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDescription(!showDescription);
                }}
                whileHover={{ scale: 1.02 }}
              >
                <AnimatePresence mode="wait">
                  {showDescription ? (
                    <motion.p
                      key="description"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white line-clamp-3"
                    >
                      {post.description}
                    </motion.p>
                  ) : (
                    <motion.p
                      key="read-more"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-white/80 hover:text-white line-clamp-3"
                    >
                      {post.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default PostIntro;
