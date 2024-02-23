// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

let list = [10,15,3,7]; 
k = 17;

let check = function() {
  for(let i = 0; i < list.length; i++) {
    let sum = list[i] + list[i+1] 
    console.log(sum)
  }
}

check();


//Solution using a set() 

function twoSum(lst, k) {
    //Create a new set 
    const seen = new Set();
    //Loop through set using a for loop
    for (const num of lst) {
        //Search through set using method has 
        //Find find number by using total minus the number getting looped 
        if (seen.has(k - num)) {
            //Return true if that number exists in the set 
            return true;
        }
        //Adds all numbers to the set as it loops through list 
        seen.add(num);
    }
    //Returns false if list does not contain numbers needed 
    return false;
}

/* In a set you cannot store duplicate values. */
