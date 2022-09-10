function hasDuplicate(array) {
    const set = new Set(array);
    if (set.size === array.length) {
      return false;
    }
    return true;
  }

let number = hasDuplicate([1,2,3,4,1]); 
console.log(number);