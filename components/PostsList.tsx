import Image from "next/image";
import urlFor from "@/sanity/lib/urlFor";
import ClientSideRoute from './ClientSideRoute';
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

type Props = {
  posts: Post[];
}

const categoryColors: { [key: string]: string } = {
  'Fitness': '',
  'Lifestyle': '#084f57',
  'Eat': '#ff643c',
  'Train': 'orange',
  'Community': '#af6f06',
  'About Stella': '#567890',
  'Exercise': '#890123',
};
export default function PostsList({ posts }: Props) {
  console.log("PostsList -> posts", posts)
  return (
    <div>
      <hr className=" border-[#ff643c] mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
          {posts?.length > 0 ? (
              posts.map((post) => (
                  <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
                    <div className="flex flex-col group cursor-pointer">
                      <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                        <Image
                          src={urlFor(post.mainImage).url()}
                          alt="Main Image of Post"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-[#f2f5f7] p-5 flex justify-between">
                          <div>
                            <p className="font-bold">{post.title}</p>
                            {/* <p>
                              {new Date(post._createdAt).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </p> */}
                          </div>

                          <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                          {post.categories.map((category: any, index: number) => (
                                <div 
                                    key={index} 
                                    className="text-center text-white px-3 py-1 rounded-full text-sm font-semibold"
                                    style={{ backgroundColor: categoryColors[category.title] || '#002135' }}
                                    >
                                    
                                        {category.title}
                                </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 flex-1 ">
                        <p className="text-lg font-bold text-[#002135]">{post.title}</p>
                        <p className="line-clamp-2 text-gray-500">{post.description}</p>
                      </div>

                      <p className="mt-5 font-bold flex items-center group-hover:underline text-[#002135]">
                        Read post
                        <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                      </p>
                    </div>
                  </ClientSideRoute>
              ))
          ) : (      
            <div className='flex justify-center'>
              <div className="py-4 text-[#ff643c]">
                  YIKES - No posts found! Contact Stella ASAP!
              </div>
            </div>

          )}
      </div>
    </div>
  )
}
