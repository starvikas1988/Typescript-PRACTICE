// Create a typescript array of numbers and create a variable to store the
// sum of all the numbers in the array.
//Compute the sum using a for loop and print the result to the console

let val1: number[] = [10, 20, 30, 40, 50];
let sum: number = 0;
for (let i = 0; i < val1.length; i++){
    sum += val1[i]; 
}

//console.log(sum);

//Create an array of any type and print the sum of all the numbers in the array to the console.

let val2: any[] = [10,20,'vikas',30,'Pandey'];

let sum2: number = 0;

for (let i = 0; i < val2.length; i++){
    if(typeof val2[i] == 'number'){
        sum2 += val2[i];
    }
}

//console.log(sum2);

// Create an array of strings and print the pallindrome strings in the array to the console.

function isPalindrome(str: string): boolean {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Check if the clean string is equal to its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}

function printPalindromeStrings(strings: string[]): void {
    strings.forEach(str => {
        if (isPalindrome(str)) {
            console.log(str);
        }
    });
}

// Example array of strings
const arrayOfStrings: string[] = ["level", "apple", "rotor", "bananab", "deified",'vikiv'];

// Print palindrome strings in the array
//console.log("Palindrome strings in the array:");
//printPalindromeStrings(arrayOfStrings);

// Create an array of strings and print the strings that have a length of 5 to the console.

let val3: string[] = ['vikas','vishal','Swati','Pratyush','Priya'];


for (let i = 0; i < val3.length; i++){

    if(val3[i].length == 5){
        console.log(val3[i]);
    }

}

function countTrueValues(arr: boolean[]): number {
    let trueCount = 0;
    for (const value of arr) {
        if (value === true) {
            trueCount++;
        }
    }
    return trueCount;
}

//Create a boolean array and print the number of true values in the array to the console.
// Example boolean array
const booleanArray: boolean[] = [true, false, true, true, false, true, false, true];

// Count the number of true values
const trueCount = countTrueValues(booleanArray);

// Print the count of true values to the console
console.log("Number of true values in the array:", trueCount);

//Create five variables of each of the primitive types and print their values to the console.

// Number
const myNumber: number = 10;

// String
const myString: string = "Hello, world!";

// Boolean
const myBoolean: boolean = true;

// Null
const myNull: null = null;

// Undefined
const myUndefined: undefined = undefined;

// Print values to the console
console.log("Number:", myNumber);
console.log("String:", myString);
console.log("Boolean:", myBoolean);
console.log("Null:", myNull);
console.log("Undefined:", myUndefined);
