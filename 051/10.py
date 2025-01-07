
class Player:
    def __init__(self, name, position, goals=0):
        self.name = name
        self.position = position
        self.goals = goals

    def scoreGoal(self):
        self.goals += 1
        print(f"{self.name} ทำประตูได้! ประตูรวม: {self.goals}")

    def displayDetails(self):
        print(f"ชื่อผู้เล่น: {self.name}")
        print(f"ตำแหน่ง: {self.position}")
        print(f"จำนวนประตู: {self.goals}")



class Goalkeeper(Player):
    def __init__(self, name):
        super().__init__(name, "Goalkeeper")

    def displayDetails(self):
        super().displayDetails()
        print("ตำแหน่งผู้เล่น: ผู้รักษาประตู")



class Defender(Player):
    def __init__(self, name):
        super().__init__(name, "Defender")

    def displayDetails(self):
        super().displayDetails()
        print("ตำแหน่งผู้เล่น: กองหลัง")



class Forward(Player):
    def __init__(self, name):
        super().__init__(name, "Forward")

    def displayDetails(self):
        super().displayDetails()
        print("ตำแหน่งผู้เล่น: กองหน้า")



player1 = Goalkeeper("สมชาย")
player2 = Defender("สมศักดิ์")
player3 = Forward("สมหมาย")


print("ข้อมูลผู้เล่น 1:")
player1.displayDetails()
print("\nข้อมูลผู้เล่น 2:")
player2.displayDetails()
print("\nข้อมูลผู้เล่น 3:")
player3.displayDetails()


print("\nสมหมายทำประตู:")
player3.scoreGoal()


print("\nข้อมูลผู้เล่น 3 หลังทำประตู:")
player3.displayDetails()
