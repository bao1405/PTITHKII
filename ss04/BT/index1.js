import { createPost, displayAllPosts, searchPost } from './managerPost.js';

createPost("Tiêu đề 1", "Nội dung 1", "Tác giả 1");
createPost("Tiêu đề 2", "Nội dung 2", "Tác giả 2");
createPost("Tiêu đề 3", "Nội dung 3", "Tác giả 3");

console.log("Tất cả các bài viết:");
displayAllPosts();

searchPost("Tiêu đề");
