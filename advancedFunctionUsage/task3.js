function divide(numerator, denominator){

    if (denominator === 0 || 
        denominator / 2 === NaN || 
        numerator / 2 === NaN){
            throw new Error("Both arguments must be valid numbers and can't devide by 0")
        };
    
    return numerator / denominator;

    
};

try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Done");
}