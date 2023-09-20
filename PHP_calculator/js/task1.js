/* Portoflio Assignment Task 1*/
/*Create a special calculator that reads a number from the user,
 and performs a series of mathematical calculations as listed:
If the user inputs the number 4:
Calculate the factorial of a number - A factorial is the product of
 an integer and all the integers below it: example - the factorial
  of 4 is equal to 24 (4 * 3 * 2 * 1).
Calculate the square of a number - A number squared is a number 
that is multiplied by itself: example - 4 is equal to 16 (4 * 4).
Calculate the cube of the number - A number cubed is a number
 that is multiplied by itself twice: 
 example - 4 is equal to 64 (2 * 2 * 2). 
*/
// Function called when the form is submitted.
// Function performs the calculations and returns false.
function calculate() {
  //Using strict method compiler will restrict an un-declared varible
  "use strict";
  // For storing the factorial, squared and cubed results:
  var factorial;
  var squared;
  var cubed;
  // Get references to the form value:
  var num = document.getElementById("number").value;
  // Calculate the factorial results:
  //HINT: the factorial of 0 is 1.
  factorial = fact(num);
  // Calculate the squared results:
  squared = Math.pow(num, 2);
  // Calculate the cubed results:
  cubed = Math.pow(num, 3);
  //display factorial, squared and cubed results
  document.getElementById("factorial").value = factorial;
  document.getElementById("squared").value = squared;
  document.getElementById("cubed").value = cubed;
  // Return false to prevent submission:
  return false;
} // End of calculate() function.
//function to calculate factorial
function fact(n) {
  //Using strict method compiler will restrict an un-declared varible
  'use strict';
  if (n === 0) {
    return 1;
  }
  return n * fact(n - 1);
}
// Function called when the window has been loaded.
// Function needs to add an event handler to the form.
function init() {
  // Add an event handler to the form:
  'use strict';
  document.getElementById("theForm").onsubmit = calculate;
} // End of init() function.
window.onload = init;
// Assign an event handler to the window's load event:
