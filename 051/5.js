
class Evaluable {
    evaluateStudent(studentName) {
      throw new Error("Method 'evaluateStudent' must be implemented.");
    }
  }
  

  class Course extends Evaluable {
    constructor(courseName, instructorName) {
      super();
      this.courseName = courseName;
      this.instructorName = instructorName;
      this.students = [];
    }
  

    getCourseName() {
      return this.courseName;
    }
  
    setCourseName(courseName) {
      this.courseName = courseName;
    }
  

    getInstructorName() {
      return this.instructorName;
    }
  
    setInstructorName(instructorName) {
      this.instructorName = instructorName;
    }
  

    enrollStudent(studentName) {
      if (!this.students.includes(studentName)) {
        this.students.push(studentName);
        console.log(`${studentName} ได้รับการลงทะเบียนในคอร์ส ${this.courseName}`);
      } else {
        console.log(`${studentName} ได้ลงทะเบียนในคอร์สนี้แล้ว`);
      }
    }
  

    removeStudent(studentName) {
      const index = this.students.indexOf(studentName);
      if (index > -1) {
        this.students.splice(index, 1);
        console.log(`${studentName} ถูกลบออกจากคอร์ส ${this.courseName}`);
      } else {
        console.log(`${studentName} ไม่มีในรายชื่อคอร์ส ${this.courseName}`);
      }
    }
  

    displayDetails() {
      console.log(`ชื่อคอร์ส: ${this.courseName}`);
      console.log(`อาจารย์: ${this.instructorName}`);
      console.log(`รายชื่อนักเรียน: ${this.students.join(", ")}`);
    }
  

    evaluateStudent(studentName) {
      if (this.students.includes(studentName)) {
        console.log(`${studentName} ได้รับการประเมินแล้ว`);
      } else {
        console.log(`${studentName} ไม่ได้ลงทะเบียนในคอร์สนี้`);
      }
    }
  }
  

  const course1 = new Course("คอร์สโปรแกรมมิ่งพื้นฐาน", "อาจารย์สมชาย");
  

  course1.displayDetails();
  

  course1.enrollStudent("สมศักดิ์");
  course1.enrollStudent("สมชาย");
  course1.displayDetails();
  

  course1.removeStudent("สมศักดิ์");
  course1.displayDetails();
  

  course1.evaluateStudent("สมชาย");
  course1.evaluateStudent("สมศักดิ์");
  