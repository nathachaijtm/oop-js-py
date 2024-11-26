class GameCharacter {
    constructor(name) {
        this.name = name;
        this.skills = {};
        this.skillHistory = {};
    }

    learnSkill(skillName, action) {
        this.skills[skillName] = action;
        this.skillHistory[skillName] = [];
    }

    useSkill(skillName) {
        if (this.skills[skillName]) {
            this.skills[skillName]();
            this.skillHistory[skillName].push(new Date());
        } else {
            console.log(`${this.name} doesn't know the skill "${skillName}".`);
        }
    }

    getSkillHistory(skillName) {
        return this.skillHistory[skillName];
    }
}

// Example
const character = new GameCharacter("Warrior");
character.learnSkill("Slash", () => console.log("Used Slash!"));
character.learnSkill("Block", () => console.log("Used Block!"));

character.useSkill("Slash");
console.log(character.getSkillHistory("Slash"));