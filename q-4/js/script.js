//Write a JavaScript program for convert all array element in ASCII value.

const array = ["a", "b", "c", "d", "e", "f", "g"];


let convert = array.map((ele) => ele.charCodeAt(0));
document.getElementById("text").innerHTML = (convert);