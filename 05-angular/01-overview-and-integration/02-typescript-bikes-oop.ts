class Bike {
    constructor(
        public price: number,
        public max_speed: string,
        public miles: number,) {}
    displayInfo = function(){
        console.log(`Bike price is $${this.price}, the maximum speed is ${this.max_speed}, and the current mileage is ${this.miles}`)
    }
    ride = () => {
        this.miles = this.miles + 10
        console.log("You just rode the bike!")
    }
    reverse = () => {
        this.miles = this.miles - 5
        console.log("You just reversed the bike!")
    }
}

const bike1 = new Bike(250, "20 mph", 25)
const bike2 = new Bike(3000, "300 mph", 0)
const bike3 = new Bike(50, "12 mph", 350)

bike1.ride()
bike1.ride()
bike1.ride()
bike1.reverse()
bike1.displayInfo()

bike2.ride()
bike2.reverse()
bike2.displayInfo()

bike3.reverse()
bike3.displayInfo()