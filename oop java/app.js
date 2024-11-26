const readline = require("readline");

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Lion extends Animal {}
class Tiger extends Animal {}
class Elephant extends Animal {}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// รับชื่อสิงโต
rl.question("Enter the name of the lion: ", function (name) {
  const lion = new Lion(name); // สร้าง Lion โดยใช้ชื่อที่กรอก

  // รับที่อยู่ของสิงโต
  rl.question("Enter habitat for the lion: ", function (habitat) {
    lion.habitat = habitat; // เพิ่มที่อยู่ให้กับ lion
    console.log(lion); // แสดงข้อมูลของ lion ที่มีชื่อและที่อยู่
    // ปิด interface หลังจากรับข้อมูลแล้ว

    rl.question("Enter the name of the Tiger: ", function (name) {
      const tiger = new Tiger(name);

      rl.question("Enter habitat for the Tiger: ", function (habitat) {
        tiger.habitat = habitat;
        console.log(tiger);

        rl.question("Enter the name of the Elephant: ", function (name) {
          const elephant = new Elephant(name);

          rl.question("Enter habitat for the Elephant: ", function (habitat) {
            elephant.habitat = habitat;
            console.log(elephant);

            rl.close();
          });
        });
      });
    });
  });
});
