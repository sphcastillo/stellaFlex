import { ClerkLoaded } from "@clerk/nextjs";
import { GetPostsQueryResult } from "@/sanity.types";
import { getSiteSettings } from "@/sanity/lib/siteSettings/getSiteSettings";
import FilterByTierSelect from "./FilterByTierSelect";
import PostGrid from "./PostGrid";

async function PostsList({ posts }: { posts: GetPostsQueryResult }) {
  const siteSettings = await getSiteSettings();

  return (
    <section className="my-8 px-4">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Recent Posts by {siteSettings?.siteTitle}
        </h2>

        <div className="flex justify-center items-center mb-4">
          <FilterByTierSelect />
        </div>

        <ClerkLoaded>
          <PostGrid posts={posts} />
        </ClerkLoaded>
      </div>
    </section>
  );
}

export default PostsList;
