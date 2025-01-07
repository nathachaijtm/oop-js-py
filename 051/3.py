from abc import ABC, abstractmethod

class Bookable(ABC):
    @abstractmethod
    def checkAvailability(self):
        pass

class Room(Bookable):
    def __init__(self, roomNumber, roomType):
        self.__roomNumber = roomNumber
        self.__roomType = roomType
        self.__isBooked = False

    
    def getRoomNumber(self):
        return self.__roomNumber

    def setRoomNumber(self, roomNumber):
        self.__roomNumber = roomNumber

    
    def getRoomType(self):
        return self.__roomType

    def setRoomType(self, roomType):
        self.__roomType = roomType

    
    def getIsBooked(self):
        return self.__isBooked

    def setIsBooked(self, isBooked):
        self.__isBooked = isBooked

    def bookRoom(self):
        if not self.__isBooked:
            self.__isBooked = True
            print(f"ห้อง {self.__roomNumber} ถูกจองเเล้ว")
        else:
            print(f"ห้อง {self.__roomNumber} มีการจองไว้แล้ว.")

    def cancelBooking(self):
        if self.__isBooked:
            self.__isBooked = False
            print(f"ห้อง {self.__roomNumber} การจองถูกยกเลิก")
        else:
            print(f"ห้อง {self.__roomNumber} ไม่ได้จองเเล้ว")

    def displayDetails(self):
        status = "ห้อง" if self.__isBooked else "มีอยู่"
        print(f"ห้องหมายเลข: {self.__roomNumber}, ประเภทห้อง: {self.__roomType}, สถานะ: {status}")

    def checkAvailability(self):
        return not self.__isBooked

class DeluxeRoom(Room):
    def __init__(self, roomNumber):
        super().__init__(roomNumber, "Deluxe")

    def displayDetails(self):
        super().displayDetails()
        print("ห้องนี้เป็นห้องดีลักซ์พร้อมสิ่งอำนวยความสะดวกระดับพรีเมียม")

class StandardRoom(Room):
    def __init__(self, roomNumber):
        super().__init__(roomNumber, "Standard")

    def displayDetails(self):
        super().displayDetails()
        print("ห้องนี้เป็นห้องมาตรฐานพร้อมสิ่งอำนวยความสะดวกขั้นพื้นฐาน")


room1 = DeluxeRoom(101)
room2 = StandardRoom(102)
room3 = DeluxeRoom(103)

room1.displayDetails()
room1.bookRoom()
room1.displayDetails()
room1.cancelBooking()
room1.displayDetails()

print("\n")
room2.displayDetails()
room2.bookRoom()
room2.displayDetails()

print("\n")
room3.displayDetails()
room3.bookRoom()
room3.cancelBooking()
room3.displayDetails()
