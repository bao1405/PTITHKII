class Book {
    private title: string;
    private author: string;
    private id: number;

    constructor(title: string, author: string, id: number) {
        this.title = title;
        this.author = author;
        this.id = id;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }

    getId(): number {
        return this.id;
    }
}

class Library {
    private books: Book[];

    constructor() {
        this.books = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    searchBooksByTitle(title: string): void {
        const foundBooks: Book[] = this.books.filter(book => book.getTitle().toLowerCase().includes(title.toLowerCase()));
        if (foundBooks.length === 0) {
            console.log(`Không tìm thấy sách có tiêu đề chứa "${title}".`);
        } else {
            console.log(`Các sách có tiêu đề chứa "${title}":`);
            foundBooks.forEach(book => {
                console.log(`- Title: ${book.getTitle()}, Author: ${book.getAuthor()}, ID: ${book.getId()}`);
            });
        }
    }
}

let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1);
let book2 = new Book("To Kill a Mockingbird", "Harper Lee", 2);
let book3 = new Book("Pride and Prejudice", "Jane Austen", 3);
let book4 = new Book("The Catcher in the Rye", "J.D. Salinger", 4);
let book5 = new Book("1984", "George Orwell", 5);

let library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.searchBooksByTitle("the");
