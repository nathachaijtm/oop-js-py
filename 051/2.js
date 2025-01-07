
class Product {
    constructor(name, price, stock) {
        this._name = name;
        this._price = price;
        this._stock = stock;
    }


    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
    }


    getPrice() {
        return this._price;
    }

    setPrice(price) {
        this._price = price;
    }

 
    getStock() {
        return this._stock;
    }

    setStock(stock) {
        this._stock = stock;
    }

    addStock(quantity) {
        this._stock += quantity;
        console.log(`เพิ่มสต็อกแล้ว หุ้นใหม่: ${this._stock}`);
    }

    reduceStock(quantity) {
        if (quantity <= this._stock) {
            this._stock -= quantity;
            console.log(`สต็อกลดลง สต๊อกคงเหลือ: ${this._stock}`);
        } else {
            console.log("สต็อกไม่เพียงพอ");
        }
    }

    displayDetails() {
        console.log(`ชื่อสินค้า: ${this._name}, ราคา: ${this._price}, สต็อก: ${this._stock}`);
    }
}

class Electronics extends Product {
    constructor(name, price, stock, warranty) {
        super(name, price, stock);
        this._warranty = warranty;
    }

    displayDetails() {
        super.displayDetails();
        console.log(`การรับประกัน: ${this._warranty} ปี`);
    }
}

class Clothing extends Product {
    constructor(name, price, stock, size) {
        super(name, price, stock);
        this._size = size;
    }

    displayDetails() {
        super.displayDetails();
        console.log(`ไซต์: ${this._size}`);
    }
}


const product = new Product("สินค้าทั่วไป", 100, 50);
const electronic = new Electronics("สมาร์ทโฟน", 699, 20, 2);
const clothing = new Clothing("เสื้อ", 25, 100, "M");

product.displayDetails();
product.addStock(10);
product.reduceStock(5);

console.log("\n");
electronic.displayDetails();
electronic.addStock(5);
electronic.reduceStock(10);

console.log("\n");
clothing.displayDetails();
clothing.addStock(20);
clothing.reduceStock(30);
