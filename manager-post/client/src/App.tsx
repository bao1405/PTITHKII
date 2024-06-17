import React from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Post Manager</h1>
      <PostForm />
      <PostList />
    </div>
  );
};

export default App;
