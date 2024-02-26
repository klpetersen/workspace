/* 
This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
*/

//SOLUTION 
function firstMissingPositive(nums) {
    //Create a new set of the array of nums 
    const set = new Set(nums);
    //Initialize at 1, considering that 0 is not considered a positive number 
    let i = 1;
    //Start a while loop to check if the set contains that number 
    while (set.has(i)) {
        //Increment if the set contains the numer 
        i++;
    }
    //Breaks out of loop when it doesn't contain the number and returns the value 
    return i;
}

// Example usage:
console.log(firstMissingPositive([3, 4, -1, 1]));  // Output: 2
console.log(firstMissingPositive([1, 2, 0]));     // Output: 3