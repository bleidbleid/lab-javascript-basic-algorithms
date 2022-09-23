// Iteration 1: Names and Input
// 1.3 Create a variable hacker2 with the navigator's name.
// 1.4 Print "The navigator's name is YYYY".
// 1.1 Create a variable hacker1 with the driver's name. 

const hacker1 = 'Aina';
const hacker2 = 'Maria';
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print: 
// - The driver has the longest name, it has XX characters. or 
// - It seems that the navigator has the longest name, it has XX characters. or 
// - Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}


// // Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
const driver = hacker1.toUpperCase().split('');
console.log(driver);
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
const navigator = hacker2.split('').reverse().join('');
console.log(navigator);
// 3.3 Depending on the lexicographic order of the strings, print: 
// - The driver's name goes first. 
// - Yo, the navigator goes first definitely. 
// - What?! You both have the same name?
let names = [hacker1, hacker2];
if (hacker1 === hacker2) {
    console.log('What?! You both have the same name?');
} else if (names.sort() == hacker1,hacker2) {
    console.log(`The driver's name goes first. `);
} else {
    console.log(`Yo, the navigator goes first definitely.`);
}
