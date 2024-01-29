// to find the prime number
var n=8;
var flag=0;
for(i=2;i<n/2;i++){
    if(n%2==0){
        flag=1;
        break;}
    }
if(flag==0){
        console.log("its prime ")
    }
else{
    console.log("its not a prime")
}
