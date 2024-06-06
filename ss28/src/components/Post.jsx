import React from 'react';

const Post = ({ post }) => {
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p><b>Author:</b> {post.author}</p>
        </div>
    );
};

export default Post;
