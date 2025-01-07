
class Player {
    constructor(name, position, goals = 0) {
        this.name = name;
        this.position = position;
        this.goals = goals;
    }

    scoreGoal() {
        this.goals += 1;
        console.log(`${this.name} ทำประตูได้! ประตูรวม: ${this.goals}`);
    }

    displayDetails() {
        console.log(`ชื่อผู้เล่น: ${this.name}`);
        console.log(`ตำแหน่ง: ${this.position}`);
        console.log(`จำนวนประตู: ${this.goals}`);
    }
}


class Goalkeeper extends Player {
    constructor(name) {
        super(name, "Goalkeeper");
    }

    displayDetails() {
        super.displayDetails();
        console.log("ตำแหน่งผู้เล่น: ผู้รักษาประตู");
    }
}


class Defender extends Player {
    constructor(name) {
        super(name, "Defender");
    }

    displayDetails() {
        super.displayDetails();
        console.log("ตำแหน่งผู้เล่น: กองหลัง");
    }
}


class Forward extends Player {
    constructor(name) {
        super(name, "Forward");
    }

    displayDetails() {
        super.displayDetails();
        console.log("ตำแหน่งผู้เล่น: กองหน้า");
    }
}


const player1 = new Goalkeeper("สมชาย");
const player2 = new Defender("สมศักดิ์");
const player3 = new Forward("สมหมาย");


console.log("ข้อมูลผู้เล่น 1:");
player1.displayDetails();
console.log("\nข้อมูลผู้เล่น 2:");
player2.displayDetails();
console.log("\nข้อมูลผู้เล่น 3:");
player3.displayDetails();


console.log("\nสมหมายทำประตู:");
player3.scoreGoal();


console.log("\nข้อมูลผู้เล่น 3 หลังทำประตู:");
player3.displayDetails();
