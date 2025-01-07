from abc import ABC, abstractmethod


class Evaluable(ABC):
    @abstractmethod
    def evaluateStudent(self, studentName):
        pass


class Course(Evaluable):
    def __init__(self, courseName, instructorName):
        self.__courseName = courseName
        self.__instructorName = instructorName
        self.__students = []


    def getCourseName(self):
        return self.__courseName

    def setCourseName(self, courseName):
        self.__courseName = courseName


    def getInstructorName(self):
        return self.__instructorName

    def setInstructorName(self, instructorName):
        self.__instructorName = instructorName


    def enrollStudent(self, studentName):
        if studentName not in self.__students:
            self.__students.append(studentName)
            print(f"{studentName} ได้รับการลงทะเบียนในคอร์ส {self.__courseName}")
        else:
            print(f"{studentName} ได้ลงทะเบียนในคอร์สนี้แล้ว")


    def removeStudent(self, studentName):
        if studentName in self.__students:
            self.__students.remove(studentName)
            print(f"{studentName} ถูกลบออกจากคอร์ส {self.__courseName}")
        else:
            print(f"{studentName} ไม่มีในรายชื่อคอร์ส {self.__courseName}")


    def displayDetails(self):
        print(f"ชื่อคอร์ส: {self.__courseName}")
        print(f"อาจารย์: {self.__instructorName}")
        print(f"รายชื่อนักเรียน: {', '.join(self.__students)}")


    def evaluateStudent(self, studentName):
        if studentName in self.__students:
            print(f"{studentName} ได้รับการประเมินแล้ว")
        else:
            print(f"{studentName} ไม่ได้ลงทะเบียนในคอร์สนี้")


course1 = Course("คอร์สโปรแกรมมิ่งพื้นฐาน", "อาจารย์สมชาย")


course1.displayDetails()


course1.enrollStudent("สมศักดิ์")
course1.enrollStudent("สมชาย")
course1.displayDetails()
course1.removeStudent("สมศักดิ์")
course1.displayDetails()
course1.evaluateStudent("สมชาย")
course1.evaluateStudent("สมศักดิ์")
