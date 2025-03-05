function positiveSum(arr) {
    let sum = 0; 
   // Initialize  sum to 0
 
    // Iterate each number in array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) { // Check if number positive
            sum += arr[i]; // Add to sum if positive
        }
    }
    return sum; 
 }
 
   // Return the total sum of positive numbers
 