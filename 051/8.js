// Superclass Vehicle
class Vehicle {
    constructor(model, brand, price) {
      this._model = model; // Encapsulation: Protected attribute
      this._brand = brand; // Encapsulation: Protected attribute
      this._price = price; // Encapsulation: Protected attribute
    }
  
    // Getter and Setter for model
    get model() {
      return this._model;
    }
  
    set model(model) {
      this._model = model;
    }
  
    // Getter and Setter for brand
    get brand() {
      return this._brand;
    }
  
    set brand(brand) {
      this._brand = brand;
    }
  
    // Getter and Setter for price
    get price() {
      return this._price;
    }
  
    set price(price) {
      this._price = price;
    }
  
    // Method to display vehicle details
    displayDetails() {
      console.log(`รุ่น: ${this._model}`);
      console.log(`ยี่ห้อ: ${this._brand}`);
      console.log(`ราคา: ${this._price}`);
    }
  }
  
  // Subclass Car
  class Car extends Vehicle {
    constructor(model, brand, price, carType) {
      super(model, brand, price);
      this._carType = carType; // Encapsulation: Protected attribute
    }
  
    // Override displayDetails() for Car
    displayDetails() {
      super.displayDetails();
      console.log(`ประเภทของรถ: ${this._carType}`);
    }
  
    // Getter and Setter for carType
    get carType() {
      return this._carType;
    }
  
    set carType(carType) {
      this._carType = carType;
    }
  }
  
  // Subclass Bike
  class Bike extends Vehicle {
    constructor(model, brand, price, bikeType) {
      super(model, brand, price);
      this._bikeType = bikeType; // Encapsulation: Protected attribute
    }
  
    // Override displayDetails() for Bike
    displayDetails() {
      super.displayDetails();
      console.log(`ประเภทของจักรยาน: ${this._bikeType}`);
    }
  
    // Getter and Setter for bikeType
    get bikeType() {
      return this._bikeType;
    }
  
    set bikeType(bikeType) {
      this._bikeType = bikeType;
    }
  }
  
  // การใช้งาน
  // สร้าง Object ของ Vehicle
  const vehicle = new Vehicle("V1000", "Honda", 50000);
  vehicle.displayDetails();
  
  console.log("\n");
  
  // สร้าง Object ของ Car
  const car = new Car("Model S", "Tesla", 7000000, "Sedan");
  car.displayDetails();
  
  console.log("\n");
  
  // สร้าง Object ของ Bike
  const bike = new Bike("CBR600", "Yamaha", 150000, "Sport");
  bike.displayDetails();
  