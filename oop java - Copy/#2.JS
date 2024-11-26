class SmartHome { //class SmartHome
    constructor() {
        this.devices = {};
    }

    addDevice(name, device) {
        this.devices[name] = device;
    }

    async controlDevice(name, action) {
        if (!this.devices[name]) {
            console.log(`${name} is not available.`);
            return;
        }
        console.log(`Executing ${action} for ${name}...`);
        await this.devices[name][action]();
    }
}

class Device {
    constructor(name) {
        this.name = name;
    }

    async on() {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log(`${this.name} is now ON.`);
                resolve();
            }, 1000);
        });
    }

    async off() {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log(`${this.name} is now OFF.`);
                resolve();
            }, 1000);
        });
    }
}

// Example
const home = new SmartHome();
home.addDevice("Light", new Device("Light"));
home.addDevice("AC", new Device("Air Conditioner"));

home.controlDevice("Light", "on");
home.controlDevice("AC", "off");
