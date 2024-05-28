//Write a JavaScript program for convert all array element in ASCII value.


const arr = ["a", "b", "c", "d", "e"];

document.getElementById("text").innerHTML = (arr.map(x => x.charCodeAt(0)));