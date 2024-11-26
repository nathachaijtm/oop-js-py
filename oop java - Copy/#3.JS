class Book {
    constructor(title, author, price) {
        Object.defineProperties(this, {
            title: { value: title, writable: true },
            author: { value: author, writable: true },
            price: { value: price, writable: true }
        });
    }
}

class Bookstore {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }
}

// Example
const store = new Bookstore();
const book1 = new Book("JavaScript Basics", "John Doe", 20);
store.addBook(book1);

book1.price = 18; // Allowed
// book1.genre = "Programming"; // Error: Cannot add new properties

console.log(store.books);