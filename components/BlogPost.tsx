import Image from "next/image"
import { PortableText } from "@portabletext/react";
import urlFor from "@/sanity/lib/urlFor";
import { SanityDocument } from "next-sanity";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/sanity.client";

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
        <div className="h-full w-4/5">
          <Image 
              src={urlFor(post.mainImage).url()}
              className="w-full object-contain"
              alt={post.title}
              width={1200}
              height={400}
            />
        </div>
      </div>
      <div className="flex justify-center pt-5">
        <h1 className="text-4xl font-extrabold">{post.title}</h1>
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
      <div className="flex justify-center px-3 py-3">
        <h3 className="text-center">{post.description}</h3>
      </div>

      <div className="px-10">
        <PortableText value={post.body}/>
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