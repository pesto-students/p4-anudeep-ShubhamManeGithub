let prices=[7,6,4,3,1];
let buy = prices[0];
let profit = 0;
for(let i=1;i<prices.length;i++){
    if(buy>prices[i]){
        buy=prices[i];
        
    } else{
        profit= Math.max(prices[i]-buy,profit);
    }
    
}

console.log(profit);

