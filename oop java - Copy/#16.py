class Course:
    def __init__(self, name, grading_policy):
        self.name = name
        self.grading_policy = grading_policy

    def calculate_grade(self, scores):
        return self.grading_policy(scores)

class Student:
    def __init__(self, name):
        self.name = name
        self.courses = {}

    def enroll(self, course, scores):
        self.courses[course] = scores

    def get_grades(self):
        return {course.name: course.calculate_grade(scores) for course, scores in self.courses.items()}

# Example
course1 = Course("Math", lambda scores: sum(scores) / len(scores))
course2 = Course("History", lambda scores: max(scores))

student = Student("John")
student.enroll(course1, [90, 80, 85])
student.enroll(course2, [70, 80])

print(student.get_grades())  # Output: {'Math': 85.0, 'History': 80}
