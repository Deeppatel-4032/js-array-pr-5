//write a JavaScript program to  to print expected output for following string.
//x = "airplane";      output:-  r
//x = "oxoxoxox";    output:- "oXoXoXoX"
//x = "A New Java Book"; 



const word = "airplane";
let char = word.slice(2, 3);
document.getElementById("text").innerHTML = (char);

const word1 = "oxoxoxox";
let char1 = word1.slice(2, 4);
document.getElementById("text1").innerHTML = (char1);

const word2 = "A New Java Book";
let char2 = word2.slice(2, 4);
document.getElementById("text2").innerHTML = (char2);

