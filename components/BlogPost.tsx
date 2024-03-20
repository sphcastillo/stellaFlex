import Image from "next/image"
import { PortableText } from "@portabletext/react";
import urlFor from "@/sanity/lib/urlFor";
import { Poppins, Inconsolata } from 'next/font/google';
import CommentsForm from "./CommentsForm";


const poppins = Poppins({ weight: "400", subsets: ['latin'] })
const inconsolataBold = Inconsolata({ weight: "800", subsets: ['latin'] })
const inconsolata = Inconsolata({ weight: "400", subsets: ['latin'] })


export default async function BlogPost( { post }: { post : any }) {

  return (
    <div>
      <main className="pt-10 pb-8">
        <div className="flex justify-center">
          <div className="h-full">
            <Image 
                src={urlFor(post.mainImage).url()}
                className="w-full object-contain"
                alt={post.title}
                width={1200}
                height={400}
              />
          </div>
        </div>
        <div className="flex justify-center py-5">
          <div className={inconsolataBold.className}>
            <div className="px-[25px] sm:px-[85px] pt-3">
              <h1 className="text-3xl font-bold text-center">{post.title}</h1>
            </div>
          </div>
        </div>
      {post?.author && (
        <div className="flex items-center justify-center space-x-2">
          <div className="flex items-center justify-center py-2 px-4 border-2 rounded-full bg-black">
            <Image 
              className="rounded-full"
              height={40}
              width={40}
              alt={post?.author?.name}
              src={urlFor(post?.author?.image).url()}
            />
            <div className={poppins.className}>
              <h3 className="text-md text-white pl-2">{post?.author?.name}</h3>
            </div>
          </div>
        </div>
      )}
        <div className="pt-4">
          <div className={inconsolata.className}>
            <div className="px-8 sm:px-[96px] pb-3">
              <h4 className="text-[#f5c15d] text-center">{post.description}</h4>
            </div>
          </div>
        </div>
        <div className={poppins.className}>
          <div className="px-10">
            <PortableText value={post.body} />
          </div>
        </div>
      </main>

      {/* <CommentsForm post={post} /> */}
    </div>
  );
};