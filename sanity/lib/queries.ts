import { groq } from "next-sanity";

// export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;

// export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;

// export const POSTS_QUERY =  groq`*[_type == "post"]{
//     _id,
//     title,
//     _createdAt,
//     slug,
//     author  -> {
//     name,
//     body,
//     image},
//     description,
//     mainImage,
//     slug,
//     categories[]
//   }`;

export const POSTS_QUERY =  groq`*[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;
