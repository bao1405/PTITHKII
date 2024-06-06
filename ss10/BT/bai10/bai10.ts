class Book {
    private title: string;
    private author: string;
    private quantity: number;

    constructor(title: string, author: string, quantity: number = 1) {
        this.title = title;
        this.author = author;
        this.quantity = quantity;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }

    addBook(quantity: number = 1): void {
        this.quantity += quantity;
    }

    getQuantity(): number {
        return this.quantity;
    }
}

class Library {
    private books: Book[];

    constructor() {
        this.books = [];
    }

    addBook(book: Book, quantity: number = 1): void {
        const existingBook = this.books.find(b => b.getTitle() === book.getTitle() && b.getAuthor() === book.getAuthor());
        if (existingBook) {
            existingBook.addBook(quantity);
        } else {
            book.addBook(quantity);
            this.books.push(book);
        }
    }

    viewBooks(): void {
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
