const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
	return s.length;
});

console.log("Normal way ", a2); // [8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log("Using Arrow Function ", a3); // [8, 6, 7, 9]






function multiply(a, b) {
	b = typeof b !== "undefined" ? b : 1;
	return a * b;
}

console.log(multiply(69)); // 69




function welcomeMsg(name) {
	return ("Hello " + name + " welcome to GeeksforGeeks");

}

// creating a variable
let nameVal = "Admin";

// calling the function
console.log(welcomeMsg(nameVal));



//JS NEW DATE

// If nothing as a parameter is given, 
// it represents the present date and time. 
let A = new Date(); 

// Printing present date and time. 
console.log(A);



// JS DATE
// Here a date has been assigned
// while creating Date object
let B = new Date('October 15, 1996 05:35:32');

// Day of the week from above Date Object is
// being extracted using getDay()
let Day = B.getDay();

// Printing day of the week
console.log("Number of Day: " +Day);




// Creating Date Object
let C = new Date();

// day of the week from above object
// is being extracted using getDay().
let D = C.getDay()

// Printing day of the week.
console.log(D);



// Object creation 
let student = { 
	name: "Martin", 
	class: "12th", 
	section: "A", 

	studentDetails: function () { 
		return this.name + " " + this.class 
			+ " " + this.section + " "; 
	} 
}; 

// Display object data 
console.log("STUDENT " + student.studentDetails());



let f = 17; 
let b = "love"; 
let c = ""; 
let d = null; 

console.log("Type of f = " + (typeof a)); 
console.log("Type of b = " + (typeof b)); 
console.log("Type of c = " + (typeof c)); 
console.log("Type of d = " + (typeof d)); 
console.log("Type of e = " + (typeof e));
