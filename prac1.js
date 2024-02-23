// Create a typescript array of numbers and create a variable to store the
// sum of all the numbers in the array.
//Compute the sum using a for loop and print the result to the console
var val1 = [10, 20, 30, 40, 50];
var sum = 0;
for (var i = 0; i < val1.length; i++) {
    sum += val1[i];
}
//console.log(sum);
//Create an array of any type and print the sum of all the numbers in the array to the console.
var val2 = [10, 20, 'vikas', 30, 'Pandey'];
var sum2 = 0;
for (var i = 0; i < val2.length; i++) {
    if (typeof val2[i] == 'number') {
        sum2 += val2[i];
    }
}
//console.log(sum2);
// Create an array of strings and print the pallindrome strings in the array to the console.
function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    var cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Check if the clean string is equal to its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}
function printPalindromeStrings(strings) {
    strings.forEach(function (str) {
        if (isPalindrome(str)) {
            console.log(str);
        }
    });
}
// Example array of strings
var arrayOfStrings = ["level", "apple", "rotor", "bananab", "deified", 'vikiv'];
// Print palindrome strings in the array
//console.log("Palindrome strings in the array:");
//printPalindromeStrings(arrayOfStrings);
// Create an array of strings and print the strings that have a length of 5 to the console.
var val3 = ['vikas', 'vishal', 'Swati', 'Pratyush', 'Priya'];
for (var i = 0; i < val3.length; i++) {
    if (val3[i].length == 5) {
        console.log(val3[i]);
    }
}
