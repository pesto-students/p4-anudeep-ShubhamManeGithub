function doTask1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('task 1 executed');
        }, 1000);
    })
}

function doTask2() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('task 2 executed');
        }, 5500);
    })
}

function doTask3() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('task 3 executed');
        }, 4000);
    })
}
//Generator
function* generator() {
    yield doTask1().then(resolve => console.log(resolve));
    yield doTask2().then(resolve => console.log(resolve));
    yield doTask3().then(resolve => console.log(resolve));
    return { done: true };
};

const gen = generator();
gen.next();
gen.next();
gen.next();

console.log("Generator");

//Async/Await 
console.log("Async/Await");

async function Async() {
    const response1 = await doTask1();
    console.log(response1);
    const response2 = await doTask2();
    console.log(response2);
    const response3 = await doTask3();
    console.log(response3);
}
Async(); 