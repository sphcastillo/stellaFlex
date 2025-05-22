import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import CreatedAt from "../../../../components/CreatedAt";
import Badge from "@/components/Badge/Badge";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { getPost } from "@/sanity/lib/post/getPost";

interface PageProps {
  params: { slug: string };
}

async function PostPage({ params }: PageProps) {
  const { slug } = params;

  const post = await getPost(slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-white">
      {post.mainImage?.asset && (
        <div className="relative h-[50vh] w-full bg-gray-100">
          {/* Blurred background */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.mainImage?.alt || post.title || "Post cover image"}
              fill
              className="object-cover blur-md scale-105 brightness-90"
              priority
            />
          </div>

          {/* Clear centered image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-3xl h-full max-h-[400px] mx-4">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.mainImage?.alt || post.title || "Post cover image"}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="text-sm text-gray-500 flex gap-2 items-center mb-6"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Return to posts
        </Link>

        {post.tierAccess && (
          <div className="relative mb-6 p-4 flex justify-between items-center border border-gray-100 rounded-lg">
            <Badge tier={post.tierAccess} />
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <p className="font-medium">Posted:</p>
              <CreatedAt date={post._createdAt} />
            </div>
          </div>
        )}

        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {post.title}
          </h1>

          {post.body && (
            <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-a:text-blue-600">
              <PortableText value={post.body} />
            </div>
          )}
        </div>
      </div>

      <hr />

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* <Comments post={post} /> */}
      </div>
    </main>
  );
}

export default PostPage;