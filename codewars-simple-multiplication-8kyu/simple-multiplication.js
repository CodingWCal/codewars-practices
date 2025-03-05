//PROMPT
//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

//solution
function simpleMultiplication(number) {
    if (number % 2 === 0) {
      return number * 8;
    } else {
      return number * 9;
    }
    }
    
    //Pseudo-code
    //Mult by 8 if number is even
    //Mult by 9 if number is odd