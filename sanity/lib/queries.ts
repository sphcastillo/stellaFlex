import { groq } from "next-sanity";

// export const POSTS_QUERY =  groq`*[_type == "post"]{
//     _id,
//     title,
//     _createdAt,
//     slug,
//     author  -> {
//     name,
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

export const CATEGORIES_QUERY = groq`*[_type == "category"]{
    title,
    description
}`;