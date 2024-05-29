// Write a JavaScript program using array map() method and return the square of array element.
//arr = [2, 5, 6, 3, 8, 9];

const array = [2, 5, 6, 3, 8, 9];

let square = array.map((ele) => ele * ele);

document.getElementById("text").innerHTML = (square);