type Base = {
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    _type: string;
};

interface Post extends Base{
    _id: string;
    _createdAt: string;
    title: string;
    description: string;
    author: Author;
    mainImage: MainImage;
    categories: Category[];
    slug: Slug;
    body: Block[];
}

interface Author extends Base {
    name: string;
    image: string;
    slug : Slug;
    bio: Block[];
}

interface Slug {
    current: string;
    _type: 'slug';
}

interface MainImage {
    asset: Reference;
    _type: "image";
}

interface Category extends Base {
    title: string;
    description: string;

}

interface Block {
    _type: "block";
    children: Span[];
    key: string;
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";

}

interface Span {
    _type: "span";
    marks: string[];
    _key: string;
    text: string;
}