import Image from "next/image";
import collage from "@/images/blogCollage.png";
import Link from "next/link";
import { sanityClient } from "@/sanity";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto pt-6 relative">
      <div className="bg-[#118DF0] absolute inset-0 bg-opacity-75"></div>
      <div className="flex justify-between items-center relative z-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl py-5 max-w-xl font-serif">
            <span className="text-white">Sophiastic Living</span> {' '}
            
          </h1>
          <h2 className="text-white">
          Join Sophia on her journey as she navigates the world of wellness, beauty, and lifestyle products. Through firsthand experiences and candid reviews, Sophia opens the door to a world of knowledge, offering valuable insights and honest opinions to guide you towards a more radiant and fulfilling life. Explore with Sophia and uncover the secrets to a brighter tomorrow!
          </h2>
        </div>


          <Image 
          src={collage}
          alt="Sophiastic Living collage"
          className="hidden md:inline-flex lg:h-full"
          />

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="border rounded-lg group cursor-pointer overflow-hidden">
              <img
                className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                alt=""
                src={urlFor(post.mainImage).url()!}
              />
              <div className="flex justify-between p-5 bg-white">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs">
                    {post.description} by {post.author.name}
                  </p>
                </div>
                <img 
                  className="h-12 w-12 rounded-full"
                  src={urlFor(post.author.image).url()!} alt="" 
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export const getServerSideProps = async () => {
  // fetching the info from Sanity
  const query =  `*[_type == "post"]{
    _id,
    title,
    slug,
    author  -> {
    name,
    image
  },
  description,
  mainImage,
  slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts
    },
  };
}