// alert("Hello Sasha!");

// var name = prompt("What is your name");
// alert("Hello, " + name);




// NUMBERS


var a;
a = 5;
a = 1000000;
a = 123.654;
a = -500;   
alert(a);


var b = 123;
var c = "123";


// STRINGS


var phrase = "Don't mix your quotes";
var phrase = "this is a simple phrase";
alert(phrase.length); //shows the amount of characters



// ASSIGNMENT

var a = 100;
var b = 50;
var result = a + b;  // 150
var result = a - b;  // 50
var result = a / b;  // 2
var result = a * b;  // 500

var score = 100;
score = score + 10;  // changes var to 110
score += 10;  //  changes var to 110 short cut

// +=  -=  *=  /=


a = a + 1;
a += 1;
a ++;

a = a - 1;
a -= 1:
a --;



// WHITE SPACE

//no impact on behavior

var name = prompt("What is your name?");
var name = prompt("What is \nyour name?"); // nakes a new line (<br>)




// COMENTS

// numeric varibles
var a = 4;
var d = 6;

/*  everything now is 
a comment until
 this sign */




// CONDITIONAL CODE 

if (//condition) {
	//do something

}



/*  

( parentheses )

[   brackets  ]

{  braces  }  

*/




// true or false ?

if ( a < 50 ) {    // smaller than
	alert("it's true!");
	// ect ...
}



if ( b === 99 ) {    // equal to 
	alert("it's true!");
	// ect ...
}


if ( d != 100 ) {    // not equal to
	alert("it's true!");
	// ect ...
}




var balance = 5000;

if ( balance >= 0 ) {
	alert("The balance is positive");
	if (balance > 10000) {
		alert("The balance is large!");
	}
} else {
	alert("The balance is negative");
}



var a = 5;
var b = 10;

if (a == b) { // always double == !!!! or tripple 

}




// =    command to set value
// ==   equality 
// ===  strict equality ( number and string  are not equal)


if (a == b) { .....}
if (a != b) { .....}
if (a === b) { .....}
if (a !== b) { .....}
if (a > b) { .....}
if (a < b) { .....}
if (a <= b) { .....}
if (a >= b) { .....}



// LOGICAL AND / OR


if (a === b &&/*and*/ c === d) {}
if (a === b ||/*or*/ c === d) {}
if ( (a > b &&/*and*/ (c === d)) {}


// SWITCH STATEMENT


var grade = "Premium";

switch ( grade ) {
	case "Regular": 
	 alert("It's $3.15");
	 break;

	case "Premium": 
	 alert("It's $3.47");
	 break;

	case "Diesel": 
	 alert("It's $3.62");
	 break;

	default: 
	  alert("That's not a valid grade");
	  break;


}



















