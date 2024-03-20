import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/sanity.client";
import { token } from "@/sanity/lib/token";

const clientWithToken = client.withConfig({ token });



export default async function createComment(req: NextRequest, res: NextResponse ) {
    console.log('createComment', req.method, req.body)
    console.log("clientWithToken", clientWithToken)
    if (req.method === 'POST') {
        try {
            const { _id, name, email, comment } = await req.json() as { _id: string, name: string, email: string, comment: string }


            await clientWithToken.create({
                _type: 'comment',
                post: {
                    _type: 'reference',
                    _ref: _id
                },
                name,
                email,
                comment
            });

            // For now, let's just return a success response.
            return res.json();
        } catch (error) {
            console.error('Error creating comment:', error);
            // return res.status(500).json({ message: 'Error creating comment.' });
        }
    } else {
        // return res.status(405).send({ message: 'Method Not Allowed' });
        console.error('WE have a problem', req.method, req.body);
    }
}

