import itertools
from collections import deque

class Hospital:
    _id_counter = itertools.count(1)
    
    def __init__(self, name):
        self.name = name
        self.queue = deque()
        self.id = next(self._id_counter)

    def admit_patient(self, patient):
        self.queue.append(patient)

    def discharge_patient(self):
        return self.queue.popleft() if self.queue else None

class Patient:
    def __init__(self, name, condition):
        self.name = name
        self.condition = condition

# Example
hospital = Hospital("City Hospital")
patient1 = Patient("Alice", "Flu")
patient2 = Patient("Bob", "Broken Arm")

hospital.admit_patient(patient1)
hospital.admit_patient(patient2)

print(hospital.discharge_patient().name)  # Output: Alice
print(hospital.discharge_patient().name)  # Output: Bob