//write a JavaScript program to  to print expected output for following string.
//x = "airplane";      output:-  r
//x = "oxoxoxox";    output:- "oXoXoXoX"
//x = "A New Java Book"; 


const word = "airplane";
let char = word.slice(2, 3);
document.getElementById("text").innerHTML = (`${char} <br>`);
console.log(char);

//x = "oxoxoxox";    output:- "oXoXoXoX"
const word1 = "oxoxoxox";

let char1 = word1.replaceAll("x", "X");

document.getElementById("text1").innerHTML = (`${char1} <br>`);
console.log(char1);

//x = "A New Java Book"; 


const word2 =  "A New Java Book";
const word3 = "A NEW JAVA BOOK";

console.log (word2.concat(" , ", word3));



