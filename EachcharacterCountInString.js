let Str = "Mohammad";
let count = {};

for(let char of Str){

    count[char] = (count[char] || 0) + 1;
}

console.log(count);