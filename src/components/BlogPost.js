import posts from '../data/posts.json';

function BlogPost({ title, content, date}) {
    console.log(posts);

    return (
        <>
            <h1>{title}</h1>
            <h4>{date}</h4>
            <p>{content}</p>

        </>
    );
}

export default BlogPost;