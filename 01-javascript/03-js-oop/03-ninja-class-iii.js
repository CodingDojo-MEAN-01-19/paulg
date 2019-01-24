class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    };

    sayName() {
        console.log("Ninja name: " + this.name);
    }

    showStats() {
        console.log("Ninja name: " + this.name + " Ninja strength: " + this.strength + " Ninja speed: " + this.speed + " Ninja health: " + this.health);
    }

    drinkSake() {
        this.health = this.health + 10
        console.log("Ninja health: " + this.health)
    }
};

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        super.strength = 10;
        super.health = 200;
        super.speed = 10;
        super.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake()
        console.log("There is no spoon");
    }
};
        /* CreateNinja.prototype.punch = function(otherNinja) {
            if (otherNinja instanceof CreateNinja) {
                otherNinja.health -= 5
                console.log(otherNinja.name + 'was punched by ' + this.name + ' and lost 5 health!')
                return this
            }
        }

        CreateNinja.prototype.kick = function(otherNinja) {
            if (otherNinja instanceof CreateNinja) {
                const damage = strength * 15
                otherNinja.health -= damage
                console.log(otherNinja.name + ' was kicked by ' + this.name + ' and lost ' + damage + ' health!')
                return this
            }
        } */

/* var steve = new CreateNinja("Steve");
steve.sayName();
steve.showStats();
steve.drinkSake();
steve.showStats();

var jack = new CreateNinja("Jack");

jack.punch(steve)
jack.kick(steve)
steve.showStats() */

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();

