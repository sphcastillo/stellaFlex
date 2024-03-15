import { draftMode } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest){
    draftMode().disable()
    const url = new URL(request.nextUrl)
    console.log('inside /api/disable-draft ~ URL:', url);
    return NextResponse.redirect(new URL('/', url.origin))
}