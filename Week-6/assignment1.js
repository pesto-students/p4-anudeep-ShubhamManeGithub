let a = [1, 2, 3, 4, -10]
let maxsum = 0;
let currentsum = 0;
for(let i=0; i<a.length;i++){
     currentsum = currentsum+a[i]
     if (currentsum<0){
        currentsum=0;
     }
     else if (currentsum>maxsum){
        maxsum = currentsum;
     }
} 
console.log(maxsum);