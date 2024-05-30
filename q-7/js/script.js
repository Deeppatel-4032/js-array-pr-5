//Write a JavaScript program for sort array in ascending descending.
//numbers = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20];
//myColor = ["Red", "Green", "White", "Black"];


const numbers = [23,20,17, 12,5, 0, 1, 5, 12, 19, 20];

numbers.sort((a, b) => a - b);

document.getElementById("text").innerHTML = (numbers);
console.log(numbers);


const mycolor = ["Red", "Green", "White", "Black"];

mycolor.sort();

document.getElementById("text1").innerHTML = (mycolor);
console.log(mycolor);