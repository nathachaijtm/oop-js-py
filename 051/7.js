
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
 
    displayDetails() {
      console.log(`ชื่อ: ${this.name}`);
      console.log(`อายุ: ${this.age}`);
    }
  }
  

  class Teacher extends Person {
    constructor(name, age, subject) {
      super(name, age);
      this.subject = subject;
    }
  

    displayDetails() {
      super.displayDetails();
      console.log(`วิชาที่สอน: ${this.subject}`);
    }
  }
  
 
  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
    }
  
 
    displayDetails() {
      super.displayDetails();
      console.log(`เกรด: ${this.grade}`);
    }
  }

  const teacher = new Teacher("อาจารย์ไกร", 40, "คอมพิวเตอร์");
  teacher.displayDetails();
  
  console.log("\n");
  

  const student = new Student("ณทชัย", 16, "มัธยมศึกษาปีที่ 6");
  student.displayDetails();
  