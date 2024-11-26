class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price

class Customer:
    def __init__(self, name):
        self.name = name

class Order:
    def __init__(self, customer):
        self.customer = customer
        self.items = []

    def add_item(self, product, quantity):
        self.items.append((product, quantity))

    def apply_discount(self, discount_func):
        return sum(discount_func(product, quantity) for product, quantity in self.items)

# Example
product1 = Product("Laptop", 1000)
product2 = Product("Phone", 500)

customer = Customer("Alice")
order = Order(customer)

order.add_item(product1, 1)
order.add_item(product2, 2)

print(order.apply_discount(lambda p, q: p.price * q * 0.9))  # 10% discount