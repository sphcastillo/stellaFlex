import Image from "next/image"
import { PortableText } from "@portabletext/react";
import urlFor from "@/sanity/lib/urlFor";
import { SanityDocument } from "next-sanity";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/sanity.client";
import { Poppins, Inconsolata } from 'next/font/google';

const poppins = Poppins({ weight: "400", subsets: ['latin'] })
const inconsolataBold = Inconsolata({ weight: "800", subsets: ['latin'] })
const inconsolata = Inconsolata({ weight: "400", subsets: ['latin'] })


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? '';

const authorQuery = groq`*[_type=='author']
{
  slug,
    name,
    image,
    bio
}`;

// export async function getAuthor(){
//   const author = await client.fetch(authorQuery);
//   return author;
//   console.log("author: ", author);
// }

export default function Post({ post }: { post: SanityDocument }) {
  const { 
    title, 
    mainImage, 
    body, 
    description 
  } = post;



  return (
    <main className="pb-28">
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

      <div className="flex items-center justify-center space-x-2">

        {/* <Image 
          className="rounded-full"
          height={40}
          width={40}
          alt={post.author.name}
          src={urlFor(post.author.image).url()}
        /> */}
      </div>
      <div className="">
        <div className={inconsolata.className}>
          <div className="px-8 sm:px-[50px] pb-3">
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
  );
}

// export async function getServerSideProps() {
//   const author = await getAuthor();


//   return {
//     props: {
//       author
//     }
//   }
// }