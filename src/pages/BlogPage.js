import React from 'react';
import posts from '../data/posts.json'
import ListItem from '../components/ListItem'

function BlogPage() {

    return (
        <div>
            <p>Totaal aantal blogs: {posts.length}</p>
            <ul>
                {posts.map((blog) => {
                    return <li key={blog.id}>
                        <ListItem
                        adres={`blog/${blog.id}`}
                        title={`${blog.title}`}
                        />
                    </li>
                })};
            </ul>

        </div>
    );
}

export default BlogPage;