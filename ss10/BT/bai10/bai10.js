"use strict";
class Book {
    constructor(title, author, quantity = 1) {
        this.title = title;
        this.author = author;
        this.quantity = quantity;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    addBook(quantity = 1) {
        this.quantity += quantity;
    }
    getQuantity() {
        return this.quantity;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book, quantity = 1) {
        const existingBook = this.books.find(b => b.getTitle() === book.getTitle() && b.getAuthor() === book.getAuthor());
        if (existingBook) {
            existingBook.addBook(quantity);
        }
        else {
            book.addBook(quantity);
            this.books.push(book);
        }
    }
    viewBooks() {
        console.log("Danh sách các quyển sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. Title: ${book.getTitle()}, Author: ${book.getAuthor()}, Quantity: ${book.getQuantity()}`);
        });
    }
}
let book1 = new Book("Book 1", "Author 1");
let book2 = new Book("Book 2", "Author 2");
let book3 = new Book("Book 3", "Author 3");
let book4 = new Book("Book 4", "Author 4");
let book5 = new Book("Book 5", "Author 5");
let library = new Library();
library.addBook(book1);
library.addBook(book2, 3);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.viewBooks();
