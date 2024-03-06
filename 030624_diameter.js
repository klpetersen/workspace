//Area of a circle is defined as pie times radius squared. Estimate pie to 3 decimal places using monte carlo method 
//Hint, basic equation of a circle is x2 + y2 = r2 

function findPie(x, y) {

    calcX: number = x * x; 
    calcY: number = y * y;
    sumXY: number = calcX + calcY; 
    calcR: number = sumXY * sumXY; 

    return number.toFixed(3);
}

//Solution
function estimatePi(numPoints) {
    let pointsInsideCircle = 0;
    const totalPoints = numPoints;
    
    for (let i = 0; i < numPoints; i++) {
        // Generate random coordinates in the square [-1, 1] x [-1, 1]
        /* Math random generates numbers between [0,1]. When we multiply by 2, this increases the spread to 
        [0,2]. Because we are trying to find a perfectly symmetrical circle, we subtract by 1 to get [-1,1] */ 
        const x = Math.random() * 2 - 1;
        const y = Math.random() * 2 - 1;
        
        // Check if the point is inside the circle
        /* Because we are dealing with a "Unit Circle", the radius=1. So we can assume that x2 + y2 = 1
        and then can help us check if the value is inside or outside the circle. This gets added to total points in the circle */
        if (x ** 2 + y ** 2 <= 1) {
            pointsInsideCircle++;
        }
    }
    
    // Estimate the ratio of points inside the circle to total points
    /* We have a total of 1 million points, this will get the ratio of points found inside the circle */
    const ratio = pointsInsideCircle / totalPoints;
    
    // Multiply the ratio by 4 to estimate π 
    /* We multiply by 4 because in Monte Carlo we are comparing a circle inside a square.  
    Since the area of the square is 4 times the area of the unit circle (since the side length of the square is 2 times
    the radius of the circle), the ratio of the areas is π/4. 
    This means that if we multiply the ratio obtained from our Monte Carlo simulation by 4, we get an estimate for π. */
    const piEstimate = ratio * 4;
    
    //Finally returning the pi estimate and should be roughly 3.14 
    return piEstimate;
}

// Number of points for the estimation
const numPoints = 1000000;

// Estimating π using the Monte Carlo method
const piEstimate = estimatePi(numPoints);
//Calling the .toFixed method converts number to a string and estimates decimal to the argument being sent 
console.log("Estimated value of π:", piEstimate.toFixed(3));

/* 
The Monte Carlo method is a computational technique used to approximate solutions to mathematical and 
statistical problems through random sampling. It is named after the famous casino in Monaco because of its reliance on randomness.

Here's a basic explanation of how the Monte Carlo method works:

1. **Problem Definition**: Start with a problem that can be formulated probabilistically or can be simulated with randomness. 
This could be anything from estimating the value of π to simulating the behavior of complex systems.

2. **Random Sampling**: Generate a large number of random samples or scenarios that are relevant to the problem. 
These samples are typically generated from known probability distributions or using pseudorandom number generators.

3. **Analysis**: Use the generated samples to estimate the desired quantity or behavior. 
This could involve statistical analysis, simulation, or other computational techniques.

4. **Results**: The results obtained from analyzing the random samples provide an approximation or estimate of the solution 
to the original problem. The accuracy of the estimate depends on the number of samples used and the quality of the random sampling 
process.

The Monte Carlo method is widely used in various fields, including physics, engineering, finance, computer graphics, optimization, 
and many others. It's particularly useful when analytical solutions are difficult or impossible to obtain, and when numerical 
methods are computationally intensive or impractical.

One of the key strengths of the Monte Carlo method is its versatility—it can be applied to a wide range of problems with different 
levels of complexity. Additionally, it can often provide insights into the behavior of systems or phenomena that are 
difficult to study analytically. However, it's important to note that the method relies on random sampling, so the results are 
inherently probabilistic and may require careful analysis and interpretation.
*/