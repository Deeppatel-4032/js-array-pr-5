//Write a JavaScript program to get sum of all array element using for loop and foreach loop.

//foreach method

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

document.getElementById("text").innerHTML = (`sum of all array elements : ${sum}`);
console.log("sum of all array elements : ", sum);