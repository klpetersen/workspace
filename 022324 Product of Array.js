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

//SOLUTION***********************************************************************

const nums = [1, 2, 3, 4, 5];

function products(nums) {

  //Generate prefix products (the numbers before i)
  let prefix_products = [];
  for (let num of nums) {
      if (prefix_products.length > 0) {
          prefix_products.push(prefix_products[prefix_products.length - 1] * num);
      } else {
          prefix_products.push(num);
      }
  }

  //Generate suffix products (the numbers after i)
  let suffix_products = [];
  for (let num of nums.reverse()) {
      if (suffix_products.length > 0) {
          suffix_products.push(suffix_products[suffix_products.length - 1] * num);
      } else {
          suffix_products.push(num);
      }
  }
  suffix_products = suffix_products.reverse();

  //Generate result 
  let result = [];
  for (let i = 0; i < nums.length; i++) {
      if (i === 0) {
          result.push(suffix_products[i + 1]);
      } else if (i === nums.length - 1) {
          result.push(prefix_products[i - 1]);
      } else {
          result.push(prefix_products[i - 1] * suffix_products[i + 1]);
      }
  }
  return result;
}


//CHATGPT Solution

function productExceptSelf(nums) {
  const n = nums.length;
  const leftProducts = new Array(n).fill(1);
  const rightProducts = new Array(n).fill(1);
  const result = new Array(n).fill(1);
  
  // Calculate the products of elements to the left of each element
  for (let i = 1; i < n; i++) {
      leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
  }
  
  // Calculate the products of elements to the right of each element
  for (let i = n - 2; i >= 0; i--) {
      rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
  }
  
  // Multiply the left and right products to get the result
  for (let i = 0; i < n; i++) {
      result[i] = leftProducts[i] * rightProducts[i];
  }
  
  return result;
}

// Example usage:
console.log(productExceptSelf([1, 2, 3, 4, 5]));  // Output: [120, 60, 40, 30, 24]
console.log(productExceptSelf([3, 2, 1]));        // Output: [2, 3, 6]

