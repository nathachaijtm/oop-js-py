
class BookNotAvailableException extends Error {
    constructor(message) {
        super(message);
        this.name = "BookNotAvailableException";
    }
}


class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;  
    }

    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`คุณยืมหนังสือ: ${this.title} ของ ${this.author} (ISBN: ${this.isbn})`);
        } else {
            throw new BookNotAvailableException(`หนังสือ '${this.title}' ถูกยืมอยู่แล้ว!`);
        }
    }


    returnBook() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log(`คุณคืนหนังสือ: ${this.title} ของ ${this.author} (ISBN: ${this.isbn})`);
        } else {
            console.log(`หนังสือ '${this.title}' ยังไม่ได้ถูกยืม`);
        }
    }


    displayDetails() {
        const status = this.isAvailable ? "พร้อมใช้งาน" : "ถูกยืมอยู่";
        console.log(`ชื่อหนังสือ: ${this.title}`);
        console.log(`ผู้แต่ง: ${this.author}`);
        console.log(`ISBN: ${this.isbn}`);
        console.log(`สถานะ: ${status}`);
    }
}


try {
    const book1 = new Book("Python for Beginners", "John Doe", "978-3-16-148410-0");
    
    book1.displayDetails();  
    book1.borrowBook();      
    book1.displayDetails();  
    
    
    book1.borrowBook();
} catch (error) {
    if (error instanceof BookNotAvailableException) {
        console.log(`ข้อผิดพลาด: ${error.message}`);
    } else {
        console.log("ข้อผิดพลาดที่ไม่คาดคิด:", error);
    }
}

console.log("\n");


const book2 = new Book("JavaScript for Beginners", "Jane Doe", "978-0-12-345678-9");
book2.borrowBook();  
book2.returnBook();  
book2.displayDetails();  
