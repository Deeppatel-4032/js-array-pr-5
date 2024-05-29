// 1 Write a simple JavaScript program to print expected Output using following array.

// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Red,Green,White,Black
// Red+Green+White+Black
// Red,Green,White
// Red
// Green,White
// Red,Green,White,Black,orange 


//join method
const myColor = ["Red", "Green", "White", "Black"];

const fastArray = myColor.join(",");

document.getElementById("text").innerHTML = fastArray;
console.log(fastArray);

//join method
const myColor1 = ["Red", "Green", "White", "Black"];

const fastArray1 = myColor1.join("+");

document.getElementById("text1").innerHTML = fastArray1;
console.log(fastArray1);



//pop method
const myColor2 = ["Red", "Green", "White", "Black"];

myColor2.pop();
document.getElementById("text2").innerHTML = myColor2;

//shift method
const myColor3 = ["Red", "Green", "White", "Black"];

const fastArray2 = myColor3.shift();
document.getElementById("text3").innerHTML = (fastArray);


//slice method
const myColor4 = ["Red", "Green", "White", "Black"];

document.getElementById("text4").innerHTML = (myColor4.slice(1, 3));

//push method
const myColor5 = ["Red", "Green", "White", "Black"];

const newcolor = myColor5.push("orange");
document.getElementById("text5").innerHTML = myColor5;    





