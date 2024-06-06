"use strict";
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 10.99,
    printBook() {
        console.log("Title:", this.title);
        console.log("Author:", this.author);
        console.log("Price:", this.price);
    },
    updateBook(title, author, price) {
        if (title) {
            this.title = title;
        }
        if (author) {
            this.author = author;
        }
        if (price) {
            this.price = price;
        }
    }
};
console.log("Thông tin sách ban đầu:");
book.printBook();
book.updateBook("To Kill a Mockingbird", "Harper Lee", 12.99);
console.log("\nThông tin sách sau khi cập nhật:");
book.printBook();
