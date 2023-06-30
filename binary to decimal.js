let binary = 100011;
let n = 0;
let decimal = 0;
while(binary > 0){
    let temp = binary % 10;
    decimal += temp*Math.pow(2,n);
    binary = Math.round(binary/10);
    
    n++;
}
console.log(decimal);