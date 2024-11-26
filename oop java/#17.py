import random
import time

# คลาส Crop ที่เก็บข้อมูลเกี่ยวกับพืช
class Crop:
    def __init__(self, name):
        self.name = name
        self.sensors_data = {}  # เก็บข้อมูลเซ็นเซอร์ต่างๆ สำหรับพืชนี้

    def add_sensor_data(self, sensor_type, value):
        if sensor_type not in self.sensors_data:
            self.sensors_data[sensor_type] = []
        self.sensors_data[sensor_type].append(value)

    def get_sensor_data(self, sensor_type):
        return self.sensors_data.get(sensor_type, [])

# คลาส Sensor ที่จะส่งข้อมูลเกี่ยวกับการเจริญเติบโตของพืช
class Sensor:
    def __init__(self, sensor_type):
        self.sensor_type = sensor_type  # ชนิดของเซ็นเซอร์ (เช่น ความชื้น, อุณหภูมิ)
        self.data = {}  # เก็บข้อมูลของพืชที่เซ็นเซอร์ตรวจพบ

    # ฟังก์ชันที่จะจำลองการส่งข้อมูลเซ็นเซอร์
    def send_data(self, crop):
        value = random.uniform(0, 100)  # สุ่มค่าเพื่อจำลองข้อมูลจากเซ็นเซอร์
        print(f"Sending {self.sensor_type} data: {value} for {crop.name}")
        crop.add_sensor_data(self.sensor_type, value)

    # เพิ่มชนิดข้อมูลใหม่ได้ใน runtime
    def add_sensor_type(self, new_sensor_type):
        self.sensor_type = new_sensor_type

# ฟังก์ชันการทดสอบ
def test_smartfarm():
    # สร้างพืช 2 ชนิด
    wheat = Crop("Wheat")
    rice = Crop("Rice")

    # สร้างเซ็นเซอร์
    moisture_sensor = Sensor("Moisture")
    temperature_sensor = Sensor("Temperature")

    # ส่งข้อมูลเซ็นเซอร์
    moisture_sensor.send_data(wheat)
    temperature_sensor.send_data(rice)

    # เพิ่มข้อมูลใหม่ใน runtime
    moisture_sensor.add_sensor_type("Humidity")
    moisture_sensor.send_data(wheat)

    # แสดงผลข้อมูล
    print("Wheat's moisture data:", wheat.get_sensor_data("Moisture"))
    print("Rice's temperature data:", rice.get_sensor_data("Temperature"))
    print("Wheat's humidity data:", wheat.get_sensor_data("Humidity"))

# ทดสอบระบบ SmartFarm
test_smartfarm()