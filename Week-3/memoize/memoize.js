function add(a,b){
    return a+b;
}
let memoize = () => {
  let cache = {};
  return (a,b) => {
    if (a,b in cache) {
      console.log('Fetching from cache');
      return cache[a,b];
    }
    else {
      console.log('Calculating result');
      let result = a+b;
      cache[a,b] = result;
      return result;
    }
  }
} 
// returned function from memoizedAdd
let newAdd = memoize();
console.log(newAdd(1,2)); // calculated
console.log(newAdd(1,2)); // cached
console.log(newAdd(12,10)); 