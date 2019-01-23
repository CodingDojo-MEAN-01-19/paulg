function CreateNinja(name) {
    
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function() {
        console.log("Ninja name: " + this.name);
    }

    CreateNinja.prototype.showStats = function() {
        console.log("Ninja name: " + this.name + " Ninja strength: " + this.strength + " Ninja speed: " + this.speed + " Ninja health: " + this.health);
    }

    CreateNinja.prototype.drinkSake = function() {
        this.health = this.health + 10
        console.log("Ninja health: " + this.health)
    }

    this.punch = function(otherNinja) {
        if (otherNinja instanceof CreateNinja) {
            otherNinja.health -= 5
            console.log(otherNinja.name + 'was punched by ' + this.name + ' and lost 5 health!')
        }
    }

    this.kick = function(otherNinja) {
        if (otherNinja instanceof CreateNinja) {
            let damage = this.strength * 15
            otherNinja.health -= damage
            console.log(otherNinja.name + 'was kicked by ' + this.name + ' and lost' + damage + ' health!')
        }
    }
};

var steve = new CreateNinja("Steve");
steve.sayName();
steve.showStats();
steve.drinkSake();
steve.showStats();
