import { Post } from "@/typings";
import Image from "next/image";
import urlFor from "@/sanity/lib/urlFor";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  console.log("our posts:", posts)
  return (
    <div>
        <hr className=" border-[#F7AB0A] mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
          {posts.map((post) => {
            return (
              <div key={post._id}>
                <div className="flex flex-col group cursor-pointer">
                  <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.author.name}
                      fill
                      className="object-cover object-left lg:object-center"
                    />
                    <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                      <div>
                        <p className="font-bold">{post.title}</p>
                        <p>
                          {post._createdAt}
                          {/* {new Date(post._createdAt).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })} */}
                        </p>
                      </div>

                      <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center"></div>
                    </div>
                  </div>
                </div>

                <h6>{post.author.name}</h6>
                <h3>{post.description}</h3>
              </div>
            );
          })}
        </div>
    </div>
  )
}

export default BlogList;