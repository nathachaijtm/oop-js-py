class MenuItem:
    def __init__(self, name, price, category):
        self.__name = name
        self.__price = price
        self.__category = category

    
    def getName(self):
        return self.__name

    def setName(self, name):
        self.__name = name

   
    def getPrice(self):
        return self.__price

    def setPrice(self, price):
        self.__price = price

   
    def getCategory(self):
        return self.__category

    def setCategory(self, category):
        self.__category = category

    
    def updatePrice(self, newPrice):
        self.__price = newPrice
        print(f"ราคาของ {self.__name} ถูกอัปเดตเป็น {newPrice} บาท")

    
    def displayDetails(self):
        print(f"ชื่อเมนู: {self.__name}")
        print(f"ราคา: {self.__price} บาท")
        print(f"หมวดหมู่: {self.__category}")



class Beverage(MenuItem):
    def __init__(self, name, price):
        super().__init__(name, price, "เครื่องดื่ม")

   
    def displayDetails(self):
        print(f"ชื่อเครื่องดื่ม: {self.getName()}")
        print(f"ราคา: {self.getPrice()} บาท")
        print(f"หมวดหมู่: เครื่องดื่ม")



class Food(MenuItem):
    def __init__(self, name, price):
        super().__init__(name, price, "อาหาร")

   
    def displayDetails(self):
        print(f"ชื่ออาหาร: {self.getName()}")
        print(f"ราคา: {self.getPrice()} บาท")
        print(f"หมวดหมู่: อาหาร")




item1 = MenuItem("ข้าวผัด", 50, "อาหาร")
item1.displayDetails()
item1.updatePrice(60)
item1.displayDetails()

print("\n")


beverage1 = Beverage("น้ำผลไม้", 30)
beverage1.displayDetails()
beverage1.updatePrice(35)
beverage1.displayDetails()

print("\n")

food1 = Food("สปาเกตตี", 100)
food1.displayDetails()
food1.updatePrice(120)
food1.displayDetails()
