
function BlogPost({ title, content, date}) {

    return (
        <>
            <h1>{title}</h1>
            <h4>{date}</h4>
            <p>{content}</p>

        </>
    );
}

export default BlogPost;