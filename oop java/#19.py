class Event:
    def __init__(self, name, cancel_condition):
        self.name = name
        self.cancel_condition = cancel_condition

    def is_cancelled(self):
        return self.cancel_condition()

# Example
event = Event("Meeting", lambda: False)
print(event.is_cancelled())  # Output: False