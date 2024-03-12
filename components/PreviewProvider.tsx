'use client'

import LiveQueryProvider from 'next-sanity/preview';
import { suspend } from 'suspend-react';

const UniqueKey = Symbol('@/sanity/lib/client');
console.log('UniqueKey', UniqueKey)

export default function PreviewProvider({
    children,
    token,
}: {
    children: React.ReactNode
    token?: string
}){
    const {client} = suspend(() => import('@/sanity/lib/client'), [UniqueKey])
    console.log('client', client)
    if(!token) throw new TypeError('Missing token')
    return (
        <LiveQueryProvider
            client={client}
            token={token}
            logger={console}
        >
            {children}
        </LiveQueryProvider>
    )
}