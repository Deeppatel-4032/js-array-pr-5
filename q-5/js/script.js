//.Write a JavaScript program for remove negative values using the filter array function.
//numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];


const numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

const filter = numbers.filter((num) => num >= 0);

document.getElementById("text").innerHTML = (filter);
