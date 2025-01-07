
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age


    def displayDetails(self):
        print(f"ชื่อ: {self.name}")
        print(f"อายุ: {self.age}")


class Teacher(Person):
    def __init__(self, name, age, subject):
        super().__init__(name, age)
        self.subject = subject


    def displayDetails(self):
        super().displayDetails()
        print(f"วิชาที่สอน: {self.subject}")


class Student(Person):
    def __init__(self, name, age, grade):
        super().__init__(name, age)
        self.grade = grade


    def displayDetails(self):
        super().displayDetails()
        print(f"เกรด: {self.grade}")


teacher = Teacher("อาจารย์สมชาย", 40, "คอมพิวเตอร์")
teacher.displayDetails()

print("\n")


student = Student("ณทชัย", 16, "มัธยมศึกษาปีที่ 6")
student.displayDetails()
