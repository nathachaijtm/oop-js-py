
class MenuItem {
    constructor(name, price, category) {
      this.name = name;
      this.price = price;
      this.category = category;
    }
  

    updatePrice(newPrice) {
      this.price = newPrice;
      console.log(`ราคาของ ${this.name} ถูกอัปเดตเป็น ${newPrice} บาท`);
    }
  
  
    displayDetails() {
      console.log(`ชื่อเมนู: ${this.name}`);
      console.log(`ราคา: ${this.price} บาท`);
      console.log(`หมวดหมู่: ${this.category}`);
    }
  }
  

  class Beverage extends MenuItem {
    constructor(name, price) {
      super(name, price, "เครื่องดื่ม");
    }
  

    displayDetails() {
      console.log(`ชื่อเครื่องดื่ม: ${this.name}`);
      console.log(`ราคา: ${this.price} บาท`);
      console.log(`หมวดหมู่: เครื่องดื่ม`);
    }
  }
  

  class Food extends MenuItem {
    constructor(name, price) {
      super(name, price, "อาหาร");
    }

    displayDetails() {
      console.log(`ชื่ออาหาร: ${this.name}`);
      console.log(`ราคา: ${this.price} บาท`);
      console.log(`หมวดหมู่: อาหาร`);
    }
  }
  

  const item1 = new MenuItem("ข้าวผัด", 50, "อาหาร");
  item1.displayDetails();
  item1.updatePrice(60);
  item1.displayDetails();
  
  console.log("\n");
  

  const beverage1 = new Beverage("น้ำผลไม้", 30);
  beverage1.displayDetails();
  beverage1.updatePrice(35);
  beverage1.displayDetails();
  
  console.log("\n");
  

  const food1 = new Food("สปาเกตตี", 100);
  food1.displayDetails();
  food1.updatePrice(120);
  food1.displayDetails();
  