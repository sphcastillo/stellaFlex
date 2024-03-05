import Image from "next/image";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

const builder = imageUrlBuilder({ projectId, dataset });

function Post({ post } : { post: SanityDocument }) {
    const { title, mainImage, body } = post;
    return (
        <main className="container mx-auto prose prose-lg p-4">
            {title ? <h1>{title}</h1> : null}
            {mainImage ? (
                <Image
                    className="float-left m-0 w-1/3 mr-4 rounded-lg"
                    src={builder.image(mainImage).width(300).height(300).quality(80).url()}
                    alt={mainImage.alt || ""}
                    width={300}
                    height={300}
                />
            ) : null}
            {body ? <PortableText value={body} /> : null}
        </main>
    )
}

export default Post;