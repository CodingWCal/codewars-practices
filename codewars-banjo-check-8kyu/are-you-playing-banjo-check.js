//PROMPT:
// Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!

//The function takes a name as its only argument, and returns one of the following strings:

//name + " plays banjo" 
//name + " does not play banjo"
//Names given are always valid strings

//SOLUTION
function areYouPlayingBanjo(name) {
    // Implement me
    if(name.charAt(0) === 'R' ||
    name.charAt(0) === 'r') {
    return name + " plays banjo" ;
    } else{
      return name + " does not play banjo";
    }
  }
  
  //PERSONAL PSEUDOCODE
  // Check first letter of the name.
  
  //Determine if it is either uppercase "R" or lowercase "r".
  
  //Return string based on the check.