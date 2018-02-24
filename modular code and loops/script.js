// ______________________________LOOPS______//

var a = 1;

while ( a < 10) {
	alert(a);
	a++  // plus one every next loop
}

// ____________________WHILE LOOP____________

var amount = 0;

// create the index

var i = 0;

// check the condition 

while (i  < 10) {
	amount = amount + 100;
	// increment index
	i++
}

alert("The value is: " + amount);


// _______________________FOR LOOP__________

for (var i = 1; i < 10;  i++) {

}



// ______________DO ... WHILE LOOP__________

var a = 100;

do {
	// code
	a++;
} while (a < 10);


// ____________________________VAR__________

var foo = 5;
var bar = 5;
alert (foo + bar);  // 10

var foo = "5";
var bar = "5";
alert(foo + bar); // 55


var foo = 5;
var bar = "5";
alert (foo + bar); // 55 - one is a string


var foo = 5;
var bar = "b";
alert (foo + bar); // NaN -not a number


var foo = "55";   

var myNumber = Number(foo); // make it a number

if (isNan(myNumber)) {
	alert("It's not a number!");
}

// double negative - if NOT NOT a number
if (!isNaN(myNumber)) {
	alert("It IS a number");
}

// _____________________STRING PROPRTIES__________

var phrase = "this ia a simple phrase.";
console.log(phrase.length);   // 24 characters

// _____________________STRING METHODS____

var phrase = "This is a simple phrase.";
console.log(phrase.toUpperCase()); // all words

// _____________________STRING COMPARISON___

var str1 = "Hello";
var str2 = "hello"; // str1 != str2


if (str1.toLowerCase() == str2.toLowerCase()){
	console.log("Yes. equal");  // str1 == str2
}


var phrase = "We want a groovy keyword";
var position = phrase.indexOf("groovy"); //10

/* it returns -1 if the term is not found */

if (phrase.indexOf("DDD") == -1) {
	console.log("That word does not occur.");

}



// there is also . lastIndexOf

var phrase = " Bla bla bla.";

var segment = phrase.slice(6,11);


// . substring()  .substr()


var str1 = "cat";
var str2 = "kitten";

if (str1 < str2) { ....... // true



var str1 = "cat";
var str2 = "Kitten";

if (str1 < str2) {........//  false!

//	ABCD .... less than  absd.... 



//_____________________REGULAR EXPRESSIONS

var myRE = /hello/; // marking as a regular expr
 // or
var myRE = new RegExp("hello");


var myString = "Does this sentence have the word hello in it?";
if (myRE.test(myString)) {
	alert("Yes");
}





var myRE = /^hello/; // ^ at the start
/hello$/; //$ at the end
/hel+o/;  // +once or more
/hel*o/; // * zero or more
/hel?o/; // ? zero or one


//_____________________ARRAYS________________


var multipleValues = [];
multipleValues[0] = 50;
multipleValues[1] = 60;
multipleValues[2] = "Hello";


console.log(multipleValues[2]);  // "Hello"

//___________________

var multipleValues = [50, 60, "Hello"];


//____________________

var myString = " This is a simple phrase.";
console.log(myString,length); // 24 gives characters


var myArray = [10, 20, "test", true, 99];
console.log(myArray.length); // 5 gives items 



// ____________ARRAYS METHODS _________

var myArray = [ 10, "a", 1, 40, 50];
myArray.reverse();
myArray.sort();  // 
myArray.join();



var i = 0;

while (i < myArray.length) {

console.log("The value is:" + myArray[i]);
	i++
}



//_________________________________________
























