"use client"

import definePreview from 'next-sanity/preview';
import { projectId, dataset } from '@/sanity/env';

function onPublicAccessOnly() {
    throw new Error(`Unable to load preview as you are not logged in`);
}

if (!projectId || !dataset) {
    throw new Error(`Missing projectId or dataset. Check your environment variables or sanity.json`);
}

// When you pull in usePreview hook, this will allow you to make queries to the preview dataset
// export const usePreview = definePreview({
//     projectId,
//     dataset,
//     onPublicAccessOnly,
// })