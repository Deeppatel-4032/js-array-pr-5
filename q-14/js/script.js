//14.  write a JavaScript program convert string to array.
//Input :- "Hire the top 1% freelance developers";
//Output :- ["Hire", "the", "top", "1%"] 



const text = "Hire the top 1% freelance developers";

let convert = text.split(" ");
let array = convert.splice(-2);

document.getElementById("text").innerHTML = (convert);
console.log(convert);
