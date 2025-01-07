// Interface Payable
class Payable {
    processPayment() {
        throw new Error("Method 'processPayment()' must be implemented.");
    }
}

// Employee class
class Employee extends Payable {
    constructor(name, id, position, salary) {
        super();
        this._name = name;
        this._id = id;
        this._position = position;
        this._salary = salary;
    }

    // Getter and Setter for name
    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
    }

    // Getter and Setter for id
    getId() {
        return this._id;
    }

    setId(id) {
        this._id = id;
    }

    // Getter and Setter for position
    getPosition() {
        return this._position;
    }

    setPosition(position) {
        this._position = position;
    }

    // Getter and Setter for salary
    getSalary() {
        return this._salary;
    }

    setSalary(salary) {
        this._salary = salary;
    }

    displayDetails() {
        console.log(`ชื่อ: ${this._name}, รหัส: ${this._id}, ตำแหน่ง: ${this._position}, ค่าจ้าง: ${this._salary}`);
    }

    calculateBonus(percentage) {
        const bonus = this._salary * (percentage / 100);
        console.log(`โบนัส: ${bonus}`);
        return bonus;
    }

    processPayment() {
        console.log(`ประมวลผลการชำระเงินสำหรับ ${this._name}`);
    }
}

// Manager class
class Manager extends Employee {
    constructor(name, id, position, salary, specialBonus) {
        super(name, id, position, salary);
        this._specialBonus = specialBonus;
    }

    calculateBonus(percentage) {
        const baseBonus = super.calculateBonus(percentage);
        const totalBonus = baseBonus + this._specialBonus;
        console.log(`โบนัสรวม (รวมโบนัสพิเศษ): ${totalBonus}`);
        return totalBonus;
    }
}

// Demonstration of Employee Management System
const emp = new Employee("ณทชัย", 101, "นักพัฒนา", 50000);
const manager = new Manager("ชัยทณ", 102, "ผู้จัดการ", 80000, 5000);

emp.displayDetails();
emp.calculateBonus(10);
emp.processPayment();

console.log("\n");

manager.displayDetails();
manager.calculateBonus(10);
manager.processPayment();
