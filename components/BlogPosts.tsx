'use client'

import { SanityDocument } from 'next-sanity';
import Link from 'next/link';
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import urlFor from "@/sanity/lib/urlFor";
import { useEffect, useState } from 'react';
import stellaFlexHero from "@/images/stellaFlexFitness.jpeg";
import stellaFlexHeroMobile from "@/images/StellaFlexmobile.png";

const categoryColors: { [key: string]: string } = {
    'Fitness': '',
    'Lifestyle': '#084f57',
    'Eat': '#ff643c',
    'Train': 'orange',
    'Community': '#af6f06',
    'About Stella': '#567890',
    'Exercise': '#890123',
};

function BlogPosts({ posts }: { posts: SanityDocument[] }) {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => { 
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640)
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <main>
        <div className='w-full min-h-[350px] flex items-center'>
          <Image 
            src={isSmallScreen ? stellaFlexHeroMobile : stellaFlexHero}
            alt="Stella Flex Hero Image"
            layout='responsive'
            className='w-full object-cover object-center'
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24 pt-[50px]">
            {posts?.length > 0 ? (
                posts.map((post) => (
                    <Link href={post.slug.current} key={post._id}>
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
                          {/* {post.categories.map((category: any, index: number) => (
                                <div 
                                    key={index} 
                                    className="text-center text-white px-3 py-1 rounded-full text-sm font-semibold"
                                    style={{ backgroundColor: categoryColors[category.title] || '#002135' }}
                                    >
                                    
                                        {category.title}
                                </div>
                            ))} */}
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
                    </Link>
                ))
            ):
            (
                <p>No posts found</p>
            )}
        </div>

    </main>
  )
}

export default BlogPosts