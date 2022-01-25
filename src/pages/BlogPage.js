import React from 'react';
import posts from '../data/posts.json'
import ListItem from '../components/ListItem'

function BlogPage() {

    const listOfBlogs = posts.map((blog) => {
        return `<ListItem
            adres=blog/:${blog.id};
            title=${blog.title};
            />`

        });

    return (
        <div>
            <p>Totaal aantal blogs: {posts.length}</p>
            <ul>
                {listOfBlogs}
            </ul>

        </div>
    );
}

export default BlogPage;