import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { validatePreviewUrl } from "@sanity/preview-url-secret";

import { client } from "@/sanity/lib/sanity.client";
import { token } from "@/sanity/lib/token";

const clientWithToken = client.withConfig({ token });


export async function GET(req: Request){
    const { isValid, redirectTo = '/'} = await validatePreviewUrl(
        clientWithToken,
        req.url
    )
    if(!isValid){
        return new Response('Oh no!: Invalid secret', { status: 401})

    }

    draftMode().enable()

    redirect(redirectTo)
}