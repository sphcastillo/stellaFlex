import { client } from "@/sanity/lib/client";
import { GetPostsQueryResult } from "@/sanity.types";
import Post from "@/components/Post";

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    ...,
    mainImage {
      ...,
      asset->
    },
    "comments": *[_type == "comment" && post._ref == ^._id] | order(createdAt desc)
  }`;

  return client.fetch<GetPostsQueryResult[number]>(query, { slug });
}

type Props = {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Post post={post} />
    </div>
  );
} 