//PROMPT:Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.

// STARTING CODE
/*var min = function(list){
    return list[0];
}

var max = function(list){
    return list[0];
}*/

var min = function(list) {
    // Use Math.min with spread syntax to find min value
    return Math.min(...list);
}

var max = function(list) {
    // Use Math.max with spread syntax to find max value
    return Math.max(...list);
}

//Pseudo-code
// Create two functions: one for finding the minimum value and another for finding the maximum value in a given list (array of integers).
//ID correct functions