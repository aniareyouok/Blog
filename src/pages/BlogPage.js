import React from 'react';
import posts from '../data/posts.json'
import ListItem from '../components/ListItem'

function BlogPage() {

    function listOfBlogs() {
        for(let i = 0; i < posts.length; i++) {
            let listItem =
            `<ListItem
            adres=blog/:${posts[i].id};
            title=posts[i].title;
            />`
            return listItem;
        }
    }

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