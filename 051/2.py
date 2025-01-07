class Product:
    def __init__(self, name, price, stock):
        self.__name = name
        self.__price = price
        self.__stock = stock

 
    def getName(self):
        return self.__name

    def setName(self, name):
        self.__name = name

 
    def getPrice(self):
        return self.__price

    def setPrice(self, price):
        self.__price = price

   
    def getStock(self):
        return self.__stock

    def setStock(self, stock):
        self.__stock = stock

    def addStock(self, quantity):
        self.__stock += quantity
        print(f"เพิ่มสต็อกแล้ว หุ้นใหม่: {self.__stock}")

    def reduceStock(self, quantity):
        if quantity <= self.__stock:
            self.__stock -= quantity
            print(f"สต็อกลดลง สต๊อกคงเหลือ: {self.__stock}")
        else:
            print("สต็อกไม่เพียงพอ")

    def displayDetails(self):
        print(f"ชื่อสินค้า: {self.__name}, ราคา: {self.__price}, สต็อก: {self.__stock}")

class Electronics(Product):
    def __init__(self, name, price, stock, warranty):
        super().__init__(name, price, stock)
        self.__warranty = warranty

    def displayDetails(self):
        super().displayDetails()
        print(f"การรับประกัน: {self.__warranty} ปี")

class Clothing(Product):
    def __init__(self, name, price, stock, size):
        super().__init__(name, price, stock)
        self.__size = size

    def displayDetails(self):
        super().displayDetails()
        print(f"ไซต์: {self.__size}")


product = Product("สินค้าทั่วไป", 100, 50)
electronic = Electronics("สมาร์ทโฟน", 699, 20, 2)
clothing = Clothing("เสื้อ", 25, 100, "M")

product.displayDetails()
product.addStock(10)
product.reduceStock(5)

print("\n")
electronic.displayDetails()
electronic.addStock(5)
electronic.reduceStock(10)

print("\n")
clothing.displayDetails()
clothing.addStock(20)
clothing.reduceStock(30)
