class AIModel:
    def __init__(self):
        self.layers = []
        self.hyperparameters = {}

    def add_layer(self, layer):
        self.layers.append(layer)

    def set_hyperparameter(self, key, value):
        self.hyperparameters[key] = value

# Example
model = AIModel()
model.add_layer("Dense Layer")
model.set_hyperparameter("learning_rate", 0.01)

print(model.layers)  # Output: ['Dense Layer']