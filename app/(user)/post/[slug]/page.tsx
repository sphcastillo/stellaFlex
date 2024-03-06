import urlFor from '@/sanity/lib/urlFor';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { groq } from "next-sanity";
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '@/components/RichTextComponents';

// interface IFormInput {
//     _id: string;
//     name: string;
//     email: string;
//     comment: string;
// }

type Props = {
    params: {
        slug: string
    }
};

export const revalidate = 60;

const categoryColors: { [key: string]: string } = {
    'Fitness': 'purple',
    'Lifestyle': 'green',
    'Eat': '#ff643c',
    'Train': 'orange',
    'Community': '#af6f06',
    'About Stella': 'pink',
    'Exercise': '#890123',
  };


export async function generateStaticParams(){


    const query = groq`*[_type == "post"]
        {
            slug
        }`;

    const slugs: Post[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current);

    return slugRoutes.map((slug) => (
        
        {
        slug,
        }
    ));
 }


async function Post({params: { slug }}: Props) {

    const query = groq`*[_type == "post" && slug.current == $slug][0]{
        title,
        mainImage,
        description,
        _createdAt,
        body[]->,
        categories[]->,
        author->{
            name,
            image,
            bio
        }
    }`;

    const post: Post = await client.fetch(query, { slug: slug });

    return (
        <div>
            <article className="px-10 pb-28">
                <section className="space-y-2 border border-[#00c3d7] text-white">
                <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
                    <div className="absolute top-0 w-full h-full opacity-20 blur-sm p-10">
                        <Image 
                            src={urlFor(post.mainImage).url()}
                            alt={post.author.name}
                            className='object-cover object-center mx-auto'
                            fill
                        />
                    </div>

                    <section className="p-5 bg-[#002135] w-full">
                        <div className="flex flex-col md:flex-row justify-between gap-y-5">
                            <div>
                                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                                <p>
                                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    })
                                    }
                                </p>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Image 
                                    className='rounded-full'
                                    src={urlFor(post.author.image).url()}
                                    alt={post.author.name}
                                    width={60}
                                    height={60}
                                />
                                <div className='w-64'>
                                    <h3 className="text-lg font-bold">{post.author.name}</h3>
                                    <div className="line-clamp-4 text-ellipsis text-[14px] text-white">
                                        <PortableText value={post.author.bio} components={RichTextComponents}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="italic pt-10">{post.description}</h2>
                            <div className="flex items-center justify-end mt-auto space-x-2">
                                {post.categories.map((category: any, index: number) => (
                                    <div 
                                        key={index} 
                                        style={{ backgroundColor: categoryColors[category.title] || '#002135' }}
                                        className="text-center text-white px-3 py-1 rounded-full text-sm font-semibold border-2">
                                            {category.title}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
                </section>
                <div>

                </div>
            </article>
            <div className='mt-10'>

            </div>
        </div>
    )

}

export default Post;
