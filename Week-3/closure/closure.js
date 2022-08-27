// created parent function "createIncrement"
function createIncrement() {
    let count = 0;                                           
    function increment() {                     // child-1 of parent           
        count ++ ;
    }

    let message = `Count is ${count}`;                    
    function log() {                           // child-2 of parent              
        console.log(message);
    }
    return [increment, log];

}
const [increment, log] = createIncrement();

increment();    // count = 1 but output syntax is not declared in function i.e. console.log(count)
increment();    // count = 2 but output syntax is not declared in function i.e. console.log(count)
increment();    // count = 3 but output syntax is not declared in function i.e. console.log(count)
log();          // log is child of parent function hence it will return value declared inside parent function 
                // and value of count inside parent function is 0 hence output is 0.

//  The "increment" function and "log" function are siblings. 
//  hence they will not acess values defined under each others function, but they both can access values defined 
//  by thier parent function i.e createIncrement function.