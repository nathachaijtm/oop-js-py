
class BookNotAvailableException(Exception):
    def __init__(self, message):
        super().__init__(message)


class Book:
    def __init__(self, title, author, isbn):
        self.title = title
        self.author = author
        self.isbn = isbn
        self.isAvailable = True  

 
    def borrowBook(self):
        if self.isAvailable:
            self.isAvailable = False
            print(f"คุณยืมหนังสือ: {self.title} ของ {self.author} (ISBN: {self.isbn})")
        else:
            raise BookNotAvailableException(f"หนังสือ '{self.title}' ถูกยืมอยู่แล้ว!")

 
    def returnBook(self):
        if not self.isAvailable:
            self.isAvailable = True
            print(f"คุณคืนหนังสือ: {self.title} ของ {self.author} (ISBN: {self.isbn})")
        else:
            print(f"หนังสือ '{self.title}' ยังไม่ได้ถูกยืม")


    def displayDetails(self):
        status = "พร้อมใช้งาน" if self.isAvailable else "ถูกยืมอยู่"
        print(f"ชื่อหนังสือ: {self.title}")
        print(f"ผู้แต่ง: {self.author}")
        print(f"ISBN: {self.isbn}")
        print(f"สถานะ: {status}")


try:
    book1 = Book("Python for Beginners", "John Doe", "978-3-16-148410-0")
    
    book1.displayDetails()  
    book1.borrowBook()      
    book1.displayDetails()  
    book1.borrowBook()
except BookNotAvailableException as e:
    print(f"ข้อผิดพลาด: {e}")

print("\n")


book1.returnBook()
book1.displayDetails()  
