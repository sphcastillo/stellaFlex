"use client"

import { useLiveMode } from '@sanity/react-loader';
import { useEffect } from 'react';
import { VisualEditing } from 'next-sanity';
import { client } from '@/sanity/lib/client';

// A client-side component designed to be loaded conditionally
// Only when draft mode is active/enabled

const stegaClient = client.withConfig({ stega: true });

export default function LiveVisualEditing() {
    useLiveMode({ client: stegaClient })

    useEffect(() => {
        if (process.env.NEXT_PUBLIC_VERCEL_ENV !== 'preview' && window === parent){
            location.href = '/api/disable-draft'
        }
    }, [])
    

    return (
        <VisualEditing />
    )
}

