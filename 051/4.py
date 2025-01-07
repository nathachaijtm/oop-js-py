class InsufficientBalanceException(Exception):
    pass

# Account class
class Account:
    def __init__(self, accountNumber, holderName, balance=0.0):
        self.__accountNumber = accountNumber
        self.__holderName = holderName
        self.__balance = balance

    # Getter and Setter for accountNumber
    def getAccountNumber(self):
        return self.__accountNumber

    def setAccountNumber(self, accountNumber):
        self.__accountNumber = accountNumber

    # Getter and Setter for holderName
    def getHolderName(self):
        return self.__holderName

    def setHolderName(self, holderName):
        self.__holderName = holderName

    # Getter and Setter for balance
    def getBalance(self):
        return self.__balance

    def setBalance(self, balance):
        self.__balance = balance

    # Method to deposit money
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print(f"ฝากเงิน {amount} บาท สำเร็จ. ยอดเงินปัจจุบัน: {self.__balance} บาท")
        else:
            print("จำนวนเงินฝากต้องมากกว่าศูนย์")

    # Method to withdraw money
    def withdraw(self, amount):
        if amount > self.__balance:
            raise InsufficientBalanceException("ยอดเงินไม่เพียงพอสำหรับการถอน")
        elif amount <= 0:
            print("จำนวนเงินที่ถอนต้องมากกว่าศูนย์")
        else:
            self.__balance -= amount
            print(f"ถอนเงิน {amount} บาท สำเร็จ. ยอดเงินปัจจุบัน: {self.__balance} บาท")

    # Method to check balance
    def checkBalance(self):
        print(f"ยอดเงินในบัญชี {self.__holderName} ({self.__accountNumber}): {self.__balance} บาท")

# Demonstration of Bank Management System
try:
    # Create an account object
    account1 = Account("123456789", "สมชาย", 1000.0)

    # Check balance
    account1.checkBalance()

    # Deposit money
    account1.deposit(500.0)

    # Withdraw money
    account1.withdraw(200.0)

    # Check balance
    account1.checkBalance()

    # Try to withdraw more than available balance
    account1.withdraw(2000.0)

except InsufficientBalanceException as e:
    print(e)
