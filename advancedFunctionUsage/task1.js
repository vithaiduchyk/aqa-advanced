function handleNum(num, handleEvenCallback, handleOddCallback){
    if (num % 2 === 0) {
        handleEven();
    } else {
        handleOdd();
    }

};

function handleEven() {
    return console.log("number is even");
};

function handleOdd() {
    return console.log("number is odd");

};

handleNum(6, handleEven, handleOdd);