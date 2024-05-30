//Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic)


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let max = arr[0];
let min = arr[0];

const findMaxMin = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
}
findMaxMin(arr);

document.getElementById("text").innerHTML = (`Maximum value is : ${max} <br> Minimum value is : ${min}`);
console.log(`Maximum value is : ${max}`);
console.log(`Minimum value is : ${min}`);
