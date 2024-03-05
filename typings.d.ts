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
    body: [object];
}

interface Author extends Base {
    name: string;
    image: string;
    slug : Slug;
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