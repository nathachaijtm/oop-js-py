class Menu:
    def __init__(self):
        self.items = {}

    def add_item(self, name, price):
        self.items[name] = price

    def update_price(self, name, price):
        if name in self.items:
            self.items[name] = price

class FoodOrder:
    def __init__(self, menu):
        self.menu = menu
        self.order = {}

    def add_to_order(self, item_name, quantity):
        if item_name in self.menu.items:
            self.order[item_name] = (self.menu.items[item_name], quantity)

    def calculate_total(self):
        return sum(price * quantity for price, quantity in self.order.values())

# Example
menu = Menu()
menu.add_item("Burger", 5)
menu.add_item("Fries", 2)

order = FoodOrder(menu)
order.add_to_order("Burger", 2)
order.add_to_order("Fries", 3)

print(order.calculate_total())  # Output: 16

menu.update_price("Burger", 6)  # Does not affect existing orders
print(order.calculate_total())  # Output: 16