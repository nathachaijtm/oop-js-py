class InsufficientBalanceException extends Error {
    constructor(message) {
      super(message);
      this.name = "InsufficientBalanceException";
    }
  }
  

  class Account {
    constructor(accountNumber, holderName, balance = 0.0) {
      this._accountNumber = accountNumber;
      this._holderName = holderName;
      this._balance = balance;
    }
  
  
    getAccountNumber() {
      return this._accountNumber;
    }
  
    setAccountNumber(accountNumber) {
      this._accountNumber = accountNumber;
    }
  
    
    getHolderName() {
      return this._holderName;
    }
  
    setHolderName(holderName) {
      this._holderName = holderName;
    }
  
   
    getBalance() {
      return this._balance;
    }
  
    setBalance(balance) {
      this._balance = balance;
    }
  
    
    deposit(amount) {
      if (amount > 0) {
        this._balance += amount;
        console.log(`ฝากเงิน ${amount} บาท สำเร็จ. ยอดเงินปัจจุบัน: ${this._balance} บาท`);
      } else {
        console.log("จำนวนเงินฝากต้องมากกว่าศูนย์");
      }
    }
  
 
    withdraw(amount) {
      if (amount > this._balance) {
        throw new InsufficientBalanceException("ยอดเงินไม่เพียงพอสำหรับการถอน");
      } else if (amount <= 0) {
        console.log("จำนวนเงินที่ถอนต้องมากกว่าศูนย์");
      } else {
        this._balance -= amount;
        console.log(`ถอนเงิน ${amount} บาท สำเร็จ. ยอดเงินปัจจุบัน: ${this._balance} บาท`);
      }
    }
  
    
    checkBalance() {
      console.log(`ยอดเงินในบัญชี ${this._holderName} (${this._accountNumber}): ${this._balance} บาท`);
    }
  }
  
  
  try {
    const account1 = new Account("123456789", "สมชาย", 1000.0);
  

    account1.checkBalance();
  

    account1.deposit(500.0);
  

    account1.withdraw(200.0);
  

    account1.checkBalance();
  

    account1.withdraw(2000.0);
  
  } catch (e) {
    if (e instanceof InsufficientBalanceException) {
      console.log(e.message);
    } else {
      console.error(e);
    }
  }
  