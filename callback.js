let sum=(a,b)=>{
    return a+b;
}
let mul=(a,b)=>{
    return a*b;
}
let calculate=(a,b,callback)=>{
    let result="";
    return callback(a,b);
}
let output=calculate(10,20,sum)
console.log(output);

output=calculate(10,20,mul)
console.log(output);

output=calculate(10,20,(a,b)=>{
    return a-b;
})
console.log(output);
console.log(sum);
console.log(mul);