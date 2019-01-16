//1
console.log(hello); // not defined
var hello = 'world';

//actual output
undefined

//2
var needle = 'haystack';
test(); //undefined
function test(){
	var needle = 'magnet';
	console.log(needle);
}
//outputs nothing, did not call function

//actual output
"magnet"

//3
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan); //'super cool' 
//did not call function

//actual output
'super cool'


//4
var food = 'chicken';
console.log(food); //'chicken'
eat(); //not defined
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
//did not call function

//actual output
"chicken"
"half-chicken"

//5
mean(); //not defined
console.log(food); //not defined
var mean = function() { //error
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food); //not defined


//actual output
//error mean is not a function

//6
console.log(genre); //not defined
var genre = "disco";
rewind(); //not defined
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre); //'disco'


//actual output
undefined
"rock"
"r&b"
"disco"

//7
dojo = "san jose"; //error, need to use var/let
console.log(dojo); // not defined
learn(); // not defined
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo); //"san jose"

//actual output
"san jose"
"seattle"
"burbank"
"san jose"