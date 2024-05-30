//. Write a JavaScript program which filters out any string which is less than 8 characters. 
//words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

const words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

let filter = words.filter((char) => char.length >= 8);

document.getElementById("text").innerHTML = (filter);
console.log(filter);