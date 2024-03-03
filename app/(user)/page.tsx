import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Post } from "@/typings";
import BlogList from "@/components/BlogList";


async function getData(){
  const query =  `*[_type == "post"]{
    _id,
    title,
    slug,
    author  -> {
    name,
    image},
    description,
    mainImage,
    slug
  }`;

  const data = await client.fetch(query);

  return data;
}



export default async function Home(post: Post[]) {
  const data = await getData();

  console.log("See data on page: ", data);
  
  return (
    <main className="">


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {data.map((post: Post) => (
          <div key={post._id}>
            <h1>{post.title}</h1>
          </div>
        ))}

        <BlogList />

      </div>
    </main>
  );
}
