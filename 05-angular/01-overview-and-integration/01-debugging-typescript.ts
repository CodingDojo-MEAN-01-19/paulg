//1
let myString: string | number;
// I can assign myString like this:
myString = "Bee stinger";
console.log(myString)
// Why is there a problem with this? What can I do to fix this?
myString = 9;
console.log(myString)

// because myString was declared as only a string, changing it to a 9 was throwing an error
// adding the "|" and a second (or third) variable type allows for that variable to accept different types

//2
function sayHello(name){
    return `Hello, ${name}!`;
 }
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello(9));

// same issue as #1, however I resolved it by removing the variable declaration for "name", which changes it's declaration to any

//3
function fullName(firstName: string, lastName: string, middleName?: string){ 
    if (middleName == undefined) {
        let fullName = `${firstName} ${lastName}`;
        return fullName;
    } else {
        let fullName = `${firstName} ${middleName} ${lastName}`;
        return fullName;
    };
    
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 console.log(fullName("Jimbo", "Jones"));

 //fixed this by adding a "?" at middleName, making it an optional argument. Added in an if statement in the case of an undefined variable so that the full name is not listed as "Jimbo undefined Jones"


//4
interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4 //"belt" was originally written, not "belts"
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 console.log(graduate(jay));




//5
class Ninja {
    fullName: string;
    constructor(
        public firstName: string,
        public lastName: string){
            this.fullName = `${firstName} ${lastName}`;
        }
    debug(){
        console.log("Console.log() is my friend.")
    }
}

const shane = new Ninja("Shane", "Diaz");
const turing = new Ninja("Alan", "Turing")

//calling the Ninja class was not done correctly, it does not require a dictionary(python?) of all three inputs, it only requires one

 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}

console.log(study(turing));
console.log(study(shane));



//6
const increment = x => x + 1;
console.log(increment(3));

const square = x => x * x;
console.log(square(4));
//removed the brackets as they were not needed

const multiply = (x, y) => x * y;
//added parentheses to contain the multiple variables

const math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x-y);
    return [sum, product, difference];
}
//added curly brackets to conatain all the let statements for this function

//7
class Elephant {
    constructor(public age: number){}
    birthday = function(){
       this.age++;
    }
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)

//I fixed the previous problem, so now this one works?