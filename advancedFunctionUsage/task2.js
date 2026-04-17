function decreaseNum(num) {
    if (num <= 0){
        return;
    };
    console.log(num);

    decreaseNum(num - 1);
};

decreaseNum(7);