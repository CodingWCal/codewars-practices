function abbrevName(name){
    const parts = name.split(' ');
    return parts[0].charAt(0).toUpperCase() + '.' + parts[1].charAt(0).toUpperCase();
  }
  
      // Split the name string into an array of words
      // Extract first letter of name, convert uppercase, and join with dot