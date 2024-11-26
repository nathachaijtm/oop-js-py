class Subscription {
    constructor(name, expiryDate) {
        this.name = name;
        this.expiryDate = new Date(expiryDate);
    }

    isActive() {
        return new Date() < this.expiryDate;
    }
}

class User {
    constructor(name) {
        this.name = name;
        this.subscriptions = [];
    }

    addSubscription(subscription) {
        this.subscriptions.push(subscription);
    }

    getActiveSubscriptions() {
        return this.subscriptions.filter(sub => sub.isActive());
    }
}

// Example
const user = new User("Alice");

const netflix = new Subscription("Netflix", "2024-12-31");
const spotify = new Subscription("Spotify", "2023-10-01");
const prime = new Subscription("Amazon Prime", "2024-01-01");

user.addSubscription(netflix);
user.addSubscription(spotify);
user.addSubscription(prime);

console.log(user.getActiveSubscriptions().map(sub => sub.name)); 
// Output: ['Netflix', 'Amazon Prime'] (assuming today's date is past 2023-10-01)