import BlogPost from "./BlogPost";

function PostPreview({ post }: { post: Post }){

  return post ? <BlogPost post={post} /> : <div>Unfortunately, this post cannot be found</div>;
}

export default PostPreview;
