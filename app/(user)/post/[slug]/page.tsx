import urlFor from '@/sanity/lib/urlFor';
import Image from 'next/image';
import React from 'react'

function Post() {
  return (
    <article className="px-10 pb-28">
        <section className="space-y-2 border border-[#F7AB0A] text-white">
            <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
                <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
                    {/* <Image 
                        className='object-cover object-center mx-auto'
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        layout='fill'
                    /> */}
                </div>
            </div>
        </section>
    </article>
  )
}

export default Post;