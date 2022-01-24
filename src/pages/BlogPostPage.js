import React from "react";
// import { useParams } from "react-router-dom";
import BlogPost from '../components/BlogPost'
import posts from '../data/posts.json'

function BlogPostPage() {
    // const { id } = useParams();

    const blogPost = posts.find((id) => {
        return id;
    })

    return (
        <BlogPost
            title={blogPost.title}
            date={blogPost.date}
            content={blogPost.content}
        />
    )
}

export default BlogPostPage;