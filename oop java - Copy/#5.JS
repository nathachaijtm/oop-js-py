class Station {
    constructor(name) {
        this.name = name;
        this.schedule = [];
    }

    setSchedule(schedule) {
        this.schedule = schedule;
    }

    getSchedule() {
        return this.schedule;
    }
}

class Train {
    constructor(id) {
        this.id = id;
        this.schedule = [];
    }

    syncSchedule(station) {
        this.schedule = station.getSchedule();
    }
}

// Example
const station = new Station("Central Station");
station.setSchedule(["10:00 AM", "12:00 PM", "2:00 PM"]);

const train = new Train("Train A");
train.syncSchedule(station);

console.log(train.schedule);
