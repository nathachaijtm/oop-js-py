class Election {
    constructor() {
        this.votes = {};
    }

    addVote(region, votes) {
        this.votes[region] = (this.votes[region] || 0) + votes;
    }

    declareWinner() {
        const winnerLogic = Math.random() > 0.5
            ? this.declareByTotalVotes
            : this.declareByRegionsWon;
        return winnerLogic.call(this);
    }

    declareByTotalVotes() {
        const totalVotes = Object.values(this.votes).reduce((a, b) => a + b, 0);
        return `Winner determined by total votes: ${totalVotes}`;
    }

    declareByRegionsWon() {
        const regionsWon = Object.keys(this.votes).length;
        return `Winner determined by regions won: ${regionsWon} regions`;
    }
}

// Example
const election = new Election();
election.addVote("Region A", 100);
election.addVote("Region B", 150);

console.log(election.declareWinner());