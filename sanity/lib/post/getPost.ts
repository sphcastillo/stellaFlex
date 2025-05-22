import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

const getPostQuery = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  ...,
  "comments": *[_type == "comment" && post._ref == ^._id] | order(createdAt desc)
}`);

export async function getPost(slug: string) {
  const { data } = await sanityFetch({
    query: getPostQuery,
    params: { slug },
  });

  return data;
}