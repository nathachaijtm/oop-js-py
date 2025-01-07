
class Vehicle:
    def __init__(self, model, brand, price):
        self.__model = model  
        self.__brand = brand  
        self.__price = price  

 
    def get_model(self):
        return self.__model

    def set_model(self, model):
        self.__model = model


    def get_brand(self):
        return self.__brand

    def set_brand(self, brand):
        self.__brand = brand

    def get_price(self):
        return self.__price

    def set_price(self, price):
        self.__price = price

 
    def display_details(self):
        print(f"รุ่น: {self.__model}")
        print(f"ยี่ห้อ: {self.__brand}")
        print(f"ราคา: {self.__price}")


class Car(Vehicle):
    def __init__(self, model, brand, price, car_type):
        super().__init__(model, brand, price)
        self.__car_type = car_type

    def display_details(self):
        super().display_details()
        print(f"ประเภทของรถ: {self.__car_type}")

    def get_car_type(self):
        return self.__car_type

    def set_car_type(self, car_type):
        self.__car_type = car_type


class Bike(Vehicle):
    def __init__(self, model, brand, price, bike_type):
        super().__init__(model, brand, price)
        self.__bike_type = bike_type


    def display_details(self):
        super().display_details()
        print(f"ประเภทของจักรยาน: {self.__bike_type}")

    def get_bike_type(self):
        return self.__bike_type

    def set_bike_type(self, bike_type):
        self.__bike_type = bike_type


vehicle = Vehicle("V1000", "Honda", 50000)
vehicle.display_details()

print("\n")


car = Car("Model S", "Tesla", 7000000, "Sedan")
car.display_details()

print("\n")

# สร้าง Object ของ Bike
bike = Bike("CBR600", "Yamaha", 150000, "Sport")
bike.display_details()
