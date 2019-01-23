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
};

var steve = new CreateNinja("Steve");
steve.sayName();
steve.showStats();
steve.drinkSake();
steve.showStats();
