import 'server-only'

import { draftMode } from 'next/headers';
import type { QueryOptions, QueryParams } from 'next-sanity';

import { client } from "./client";

export const token = process.env.SANITY_API_READ_TOKEN
console.log("token", token)

export async function sanityFetch<QueryResponse>({
    query,
    params = {},
    tags,
}: {
    query: string
    params?: QueryParams
    tags?: string[]
}) {
    const isDraftMode = draftMode().isEnabled
        if(isDraftMode && !token){
            throw new Error('Missing SANITY_API_READ_TOKEN')
        }
    return client.fetch<QueryResponse>(query, params, {
        ...(isDraftMode &&
            ({
                token:token,
                perspective: 'previewDrafts'
            } satisfies QueryOptions)),
            next: {
                revalidate: isDraftMode ? 0 : false,
                tags,
            }
    })
}