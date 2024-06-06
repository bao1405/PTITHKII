import React, { Component } from 'react';
import Post from './Post';

export default class ListPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                { 
                    id: 1, 
                    title: "First Post", 
                    content: "Content of first post", 
                    author: "John Doe" 
                },
                { 
                    id: 2, 
                    title: "Second Post", 
                    content: "Content of second post", 
                    author: "Jane Smith" 
                },
                { 
                    id: 3, 
                    title: "Third Post",
                    content: "Content of third post", 
                    author: "Bob Johnson" 
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <h2>Bài 7</h2>
                <h2>List of Posts</h2>
                {this.state.posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        );
    }
}
