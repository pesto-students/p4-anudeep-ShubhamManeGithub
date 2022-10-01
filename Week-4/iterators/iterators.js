function fibonacci(num) {
    let i = 2;
    let firstNum = 0;
    let secondNum = 1;
    let thirdNum;

    return {
        next: function () {
            if (i++ < num) {
                thirdNum = firstNum + secondNum;
                firstNum = secondNum;
                secondNum = thirdNum;
            
                return {
                    value: firstNum,
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }
        }

    }
}


const series = fibonacci(8);
console.log(series.next());
console.log(series.next());
console.log(series.next());
console.log(series.next());
console.log(series.next());
console.log(series.next());
console.log(series.next());
console.log(series.next());
console.log(series.next());