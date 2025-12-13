const fibonacci = function(num) {
    num = parseInt(num);

    if (num < 0) return "OOPS";
    if (num === 0) return 0;

    let prevNum1 = 1;
    let prevNum2 = 0;
    let currentNum = prevNum1 + prevNum2;

    for (let i = 2; i <= num; i++) {
        currentNum = prevNum1 + prevNum2;
        prevNum2 = prevNum1;
        prevNum1 = currentNum;
    }

    return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;
