class Building { //คลาส Building 
    calculateMaintenanceCost() {
    }
}

class Office extends Building { //คลาสลูกของ Building ชื่อ office
    calculateMaintenanceCost() { 
        return Math.random() * 1000 + 500; // ค่าแบบสุ่ม
    }
}

class Apartment extends Building { //คลาสลูกของ Building ชื่อ Apartment
    calculateMaintenanceCost() {
        return Math.random() * 800 + 300; // ค่าแบบสุ่ม
    }
}

//object office apartment
const office = new Office();
console.log(`Office Maintenance Cost: ${office.calculateMaintenanceCost()}`);
const apartment = new Apartment();
console.log(`Apartment Maintenance Cost: ${apartment.calculateMaintenanceCost()}`);