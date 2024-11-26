class Sensor:
    def __init__(self, sensor_type):
        self.sensor_type = sensor_type
        self.data = {}

    def add_data(self, crop, value):
        if crop not in self.data:
            self.data[crop] = []
        self.data[crop].append(value)

    def get_data(self, crop):
        return self.data.get(crop, [])

# Example
sensor = Sensor("Moisture")
sensor.add_data("Wheat", 20)
sensor.add_data("Wheat", 25)

print(sensor.get_data("Wheat"))  # Output: [20, 25]