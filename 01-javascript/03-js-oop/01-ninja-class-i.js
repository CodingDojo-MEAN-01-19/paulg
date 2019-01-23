function CreateNinja(name) {
    
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;

    var self = this;

    this.sayName = function() {
        console.log("Ninja name: " + this.name);
    }

    this.showStats = function() {
        console.log("Ninja name: " + this.name + " Ninja strength: " + this.strength + " Ninja speed: " + this.speed + " Ninja health: " + this.health);
    }

    this.drinkSake = function() {
        this.health = this.health + 10
        console.log("Ninja health: " + this.health)
    }
};

var steve = new CreateNinja("Steve");
steve.sayName();
steve.showStats();
steve.drinkSake();
steve.showStats();
