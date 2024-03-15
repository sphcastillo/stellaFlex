'use client'

import { useLiveMode } from '@sanity/react-loader';
import { VisualEditing } from 'next-sanity';
import { useEffect } from 'react';
import { client } from "@/sanity/lib/sanity.client";

// Always enable STEGA in Live Mode

const stegaClient = client.withConfig({ stega: true });

export default function LiveVisualEditing() {
    useLiveMode({ client: stegaClient });

    useEffect(() => {

        if(process.env.NEXT_PUBLIC_VERCEL_ENV !== 'preview' && window === parent){
            location.href = '/api/disable-draft'

        }
    }, [])

    return <VisualEditing />
}