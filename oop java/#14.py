class Transportation:
    def __init__(self, fuel_efficiency):
        self.fuel_efficiency = fuel_efficiency
        self.calculate_fuel_cost = self.default_fuel_cost

    def default_fuel_cost(self, distance, fuel_price):
        return distance / self.fuel_efficiency * fuel_price

    def set_fuel_calculation(self, func):
        self.calculate_fuel_cost = func

class Car(Transportation):
    pass

class Bike(Transportation):
    pass

class Bus(Transportation):
    pass

# Example
car = Car(15)
print(car.calculate_fuel_cost(100, 5))  # Output: 33.33

car.set_fuel_calculation(lambda distance, fuel_price: distance * 0.2 * fuel_price)
print(car.calculate_fuel_cost(100, 5))  # Output: 100.0
