
from abc import ABC, abstractmethod

class Payable(ABC):
    @abstractmethod
    def processPayment(self):
        pass

class Employee(Payable):
    def __init__(self, name, id, position, salary):
        self.__name = name
        self.__id = id
        self.__position = position
        self.__salary = salary


    def getName(self):
        return self.__name

    def setName(self, name):
        self.__name = name

 
    def getId(self):
        return self.__id

    def setId(self, id):
        self.__id = id


    def getPosition(self):
        return self.__position

    def setPosition(self, position):
        self.__position = position

 
    def getSalary(self):
        return self.__salary

    def setSalary(self, salary):
        self.__salary = salary

    def displayDetails(self):
        print(f"ชื่อ: {self.__name}, รหัส: {self.__id}, ตำเเหน่ง: {self.__position}, ค่่าจ้าง: {self.__salary}")

    def calculateBonus(self, percentage):
        bonus = self.__salary * (percentage / 100)
        print(f"โบนัส: {bonus}")
        return bonus

    def processPayment(self):
        print(f"ประมวลผลการชำระเงินสำหรับ {self.__name}")

class Manager(Employee):
    def __init__(self, name, id, position, salary, specialBonus):
        super().__init__(name, id, position, salary)
        self.__specialBonus = specialBonus

    def calculateBonus(self, percentage):
        baseBonus = super().calculateBonus(percentage)
        totalBonus = baseBonus + self.__specialBonus
        print(f"โบนัสรวม (รวมโบนัสพิเศษ): {totalBonus}")
        return totalBonus


emp = Employee("ณทชัย", 101, "นักพัฒนา", 50000)
manager = Manager("ชัยทณ", 102, "ผู้จัดการ", 80000, 5000)

emp.displayDetails()
emp.calculateBonus(10)
emp.processPayment()
manager.displayDetails()
manager.calculateBonus(10)
manager.processPayment()