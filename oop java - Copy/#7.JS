class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Lion extends Animal {}
class Tiger extends Animal {}
class Elephant extends Animal {}

// Example
const lion = new Lion("Leo");
lion.habitat = "Savannah"; // Dynamic addition
console.log(lion);