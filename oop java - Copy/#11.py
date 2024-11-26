class AccountMeta(type):
    def __new__(cls, name, bases, dct):
        if 'interest_rate' not in dct:
            dct['interest_rate'] = 0  # Default interest rate if not defined
        return super().__new__(cls, name, bases, dct)

# คลาส BankAccount ซึ่งจะใช้ Metaclass
class BankAccount(metaclass=AccountMeta):
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    
    def deposit(self, amount):
        self.balance += amount
        print(f"Deposited {amount}. New balance: {self.balance}")
    
    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient funds.")
        else:
            self.balance -= amount
            print(f"Withdrew {amount}. New balance: {self.balance}")
    
    def get_balance(self):
        return self.balance
    
    def apply_interest(self):
        self.balance += self.balance * self.interest_rate
        print(f"Applied interest. New balance: {self.balance}")

# คลาสลูก SavingAccount สำหรับบัญชีออมทรัพย์
class SavingAccount(BankAccount):
    interest_rate = 0.03  # 3% interest rate for SavingAccount

# คลาสลูก CheckingAccount สำหรับบัญชีเงินฝากกระแสรายวัน
class CheckingAccount(BankAccount):
    fee = 5  # 5 unit fee for each withdrawal

    def withdraw(self, amount):
        if amount + self.fee > self.balance:
            print("Insufficient funds including fee.")
        else:
            self.balance -= (amount + self.fee)
            print(f"Withdrew {amount} with fee. New balance: {self.balance}")

# ตัวอย่างการใช้งาน
saving_account = SavingAccount("Alice", 1000)
saving_account.deposit(500)
saving_account.apply_interest()  # บัญชีออมทรัพย์จะได้ดอกเบี้ย 3%

checking_account = CheckingAccount("Bob", 1000)
checking_account.withdraw(100)  # จะหักค่าธรรมเนียมด้วย