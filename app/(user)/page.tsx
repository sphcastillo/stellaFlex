
import HeroBanner from "@/components/HeroBanner";
import InformationPanel from "@/components/InformationPanel";
import PostsList from "@/components/Post/PostsList";
import { getPosts } from "@/sanity/lib/post/getPosts";
import post from "@/sanity/schemaTypes/post";


export default async function Home({
  searchParams,
} : {
  searchParams: Promise<{ tier: string}>;
}) {

  const { tier } = await searchParams;
  const posts = await getPosts(tier);


  return (
    <div className="">
      <HeroBanner />

      <div className="-mt-20">
      <InformationPanel />
      </div>
      <hr />

      <PostsList posts={posts} />
    </div>
  );
}
