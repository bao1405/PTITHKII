import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('http://localhost:3001/posts');
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post: any, index: number) => (
          <li key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>{post.created_at}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
