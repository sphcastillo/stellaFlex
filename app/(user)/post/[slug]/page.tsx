import urlFor from '@/sanity/lib/urlFor';
import Image from 'next/image';
import { QueryParams, SanityDocument } from 'next-sanity';
import { draftMode } from 'next/headers';
import { loadQuery } from '@/sanity/lib/store';
import { POSTS_QUERY, POST_QUERY } from '@/sanity/lib/queries';
import PostsListPreview from '@/components/PostPreview';
import PostsList from '@/components/PostsList';
import { client } from '@/sanity/lib/client';

export async function getStaticParams(){
    const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);

    return posts.map((post) => ({
        slug: post.slug.current
    }))
}

export default async function Page({params} : {params: QueryParams}) {
    const initial = await loadQuery<SanityDocument[]>(POST_QUERY, params, {
        perspective: draftMode().isEnabled ? "previewDrafts": "published"
    });

    return draftMode().isEnabled ? (
        <PostsListPreview initial={initial} />
    ) : (
        <PostsList posts={initial.data} /> 
    )
}

