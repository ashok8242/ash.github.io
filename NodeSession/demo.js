console.log("Good Morning");
let a = 10;
let b =20;
let c = a + b;
console.log(c);
function wishMe(name){
    return "Good Morning "+name
}
console.log(wishMe("Ashok Kumar"));

function printTable(num){


    let i = 1;
    while( i<= 10){
        console.log(`${num} X ${i} = ${num*i}`);
        i++;
    }
  return;
}
console.log(printTable(5));
console.log(printTable(9));

function isEven(num){
    if(num % 2 === 0) return true;
    else return false;
}

console.log(isEven(12));
console.log(isEven(15));

function fact(n){
    if(n <= 1){
        return 1;
    }
    return n * fact(n-1);
}
console.log(fact(5));
