"use strict";
class Book {
    constructor(title, author, id) {
        this.title = title;
        this.author = author;
        this.id = id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getId() {
        return this.id;
    }
    editBook(title, author) {
        this.title = title;
        this.author = author;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    editBookById(id, title, author) {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.editBook(title, author);
            console.log(`Thông tin của sách có ID ${id} đã được sửa đổi.`);
        }
        else {
            console.log(`Không tìm thấy sách có ID ${id} trong thư viện.`);
        }
    }
    viewBooks() {
        console.log("Danh sách các quyển sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ID: ${book.getId()}, Title: ${book.getTitle()}, Author: ${book.getAuthor()}`);
        });
    }
}
let book1 = new Book("Book 1", "Author 1", 1);
let book2 = new Book("Book 2", "Author 2", 2);
let book3 = new Book("Book 3", "Author 3", 3);
let book4 = new Book("Book 4", "Author 4", 4);
let book5 = new Book("Book 5", "Author 5", 5);
let library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.editBookById(3, "New Book 3", "New Author 3");
library.viewBooks();
