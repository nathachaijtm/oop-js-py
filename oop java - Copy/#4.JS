class Robot {
    constructor(name) {
        this.name = name;
        this.commands = {};
    }

    learnCommand(commandName, action) {
        this.commands[commandName] = action;
    }

    executeCommand(commandName) {
        if (this.commands[commandName]) {
            this.commands[commandName]();
        } else {
            console.log(`${this.name} does not know the command "${commandName}".`);
        }
    }
}

// Example
const robot = new Robot("AlphaBot");
robot.learnCommand("greet", () => console.log("Hello, human!"));
robot.learnCommand("dance", () => console.log("*Dancing robotically*"));

robot.executeCommand("greet");
robot.executeCommand("dance");