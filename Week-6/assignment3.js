let a = [0,1,0,1,2,2,1];

let temp;
function num(){
for(i=0;i<a.length;i++){
    if(a[i]>a[i+1]){         
        temp = a[i];
        a[i]=a[i+1];
        a[i+1]=temp;
        i=-1;
        
    } 
        
  } console.log(a);   
}
num();
