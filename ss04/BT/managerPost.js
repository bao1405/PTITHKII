const listPost = [];
const MAXPOST = 5;

class Post {
    constructor(title, content, author) {
        this.title = title;
        this.content = content;
        this.author = author;
    }
}

const createPost = (title, content, author) => {
    if (listPost.length >= MAXPOST) {
        console.log("Danh sách bài viết đã đầy!");
        return;
    }

    const newPost = new Post(title, content, author);
    listPost.push(newPost);
    console.log("Bài viết đã được thêm vào danh sách.");
};

const displayAllPosts = () => {
    for (const post of listPost) {
        console.log("Tiêu đề:", post.title);
        console.log("Nội dung:", post.content);
        console.log("Tác giả:", post.author);
        console.log("--------------------");
    }
};

const searchPost = (keyword) => {
    const results = listPost.filter(post =>
        post.title.includes(keyword) || 
        post.content.includes(keyword) || 
        post.author.includes(keyword)
    );

    if (results.length === 0) {
        console.log("Không tìm thấy bài viết nào phù hợp.");
    } else {
        console.log("Kết quả tìm kiếm:");
        displayAllPosts(results);
    }
};

export { createPost, displayAllPosts, searchPost };