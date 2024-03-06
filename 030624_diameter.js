//Area of a circle is defined as pie times radius squared. Estimate pie to 3 decimal places using monte carlo method 
//Hint, basic equation of a circle is x2 + y2 = r2 

function findPie(x, y) {

    calcX: number = x * x; 
    calcY: number = y * y;
    sumXY: number = calcX + calcY; 
    calcR: number = sumXY * sumXY; 

    return number.toFixed(3);
}

