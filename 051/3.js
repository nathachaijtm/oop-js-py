class Bookable {

    checkAvailability() {
      throw "checkAvailability method must be implemented";
    }
  }
  
  class Room extends Bookable {
    constructor(roomNumber, roomType) {
      super();
      this._roomNumber = roomNumber;
      this._roomType = roomType;
      this._isBooked = false;
    }
  

    getRoomNumber() {
      return this._roomNumber;
    }
  
    setRoomNumber(roomNumber) {
      this._roomNumber = roomNumber;
    }
  
  
    getRoomType() {
      return this._roomType;
    }
  
    setRoomType(roomType) {
      this._roomType = roomType;
    }
  

    getIsBooked() {
      return this._isBooked;
    }
  
    setIsBooked(isBooked) {
      this._isBooked = isBooked;
    }
  
    bookRoom() {
      if (!this._isBooked) {
        this._isBooked = true;
        console.log(`ห้อง ${this._roomNumber} ถูกจองเเล้ว`);
      } else {
        console.log(`ห้อง ${this._roomNumber} มีการจองไว้แล้ว.`);
      }
    }
  
    cancelBooking() {
      if (this._isBooked) {
        this._isBooked = false;
        console.log(`ห้อง ${this._roomNumber} การจองถูกยกเลิก`);
      } else {
        console.log(`ห้อง ${this._roomNumber} ไม่ได้จองเเล้ว`);
      }
    }
  
    displayDetails() {
      let status = this._isBooked ? "ห้อง" : "มีอยู่";
      console.log(`ห้องหมายเลข: ${this._roomNumber}, ประเภทห้อง: ${this._roomType}, สถานะ: ${status}`);
    }
  
    checkAvailability() {
      return !this._isBooked;
    }
  }
  
  class DeluxeRoom extends Room {
    constructor(roomNumber) {
      super(roomNumber, "Deluxe");
    }
  
    displayDetails() {
      super.displayDetails();
      console.log("ห้องนี้เป็นห้องดีลักซ์พร้อมสิ่งอำนวยความสะดวกระดับพรีเมียม");
    }
  }
  
  class StandardRoom extends Room {
    constructor(roomNumber) {
      super(roomNumber, "Standard");
    }
  
    displayDetails() {
      super.displayDetails();
      console.log("ห้องนี้เป็นห้องมาตรฐานพร้อมสิ่งอำนวยความสะดวกขั้นพื้นฐาน");
    }
  }
  
  // Demonstration of Hotel Booking System
  const room1 = new DeluxeRoom(101);
  const room2 = new StandardRoom(102);
  const room3 = new DeluxeRoom(103);
  
  room1.displayDetails();
  room1.bookRoom();
  room1.displayDetails();
  room1.cancelBooking();
  room1.displayDetails();
  
  console.log("\n");
  room2.displayDetails();
  room2.bookRoom();
  room2.displayDetails();
  
  console.log("\n");
  room3.displayDetails();
  room3.bookRoom();
  room3.cancelBooking();
  room3.displayDetails();
  