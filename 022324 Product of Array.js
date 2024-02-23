/* Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
Follow-up: what if you can't use division? */ 

const array = [1, 2, 3, 4, 5]; 

function mapArray (arr) {
  var num = 0; 
  var complete = false; 
  
  while (complete === false) {
    var isDivisible = true; 
    for (let val of arr) {
        Number.isInteger(num / val);
    }
    num += 1; 
    complete = true; 
  }
  
}

mapArray(array);
 
/* Need to slowly count up and divide by each number until all numbers are divisible by that number. 
1. Loop with a ticker to find largest num all are divisible by 
2. Loop the array to check if each num is divisible by that largest number 
3. Once you find the largest number, then push to array 
4. Divide each number and then push to new array 
5. Return new array value 
*/