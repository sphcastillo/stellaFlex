import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

export const client = createClient({
    projectId, 
    dataset, 
    apiVersion, 
    useCdn: false,
    // These settings will be overriden by the preview client
    // when draftMode is enabled
    perspective: 'published',
    stega: {
        enabled: false,
        studioUrl: '/studio',
    }
})
