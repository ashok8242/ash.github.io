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
    let str ='';

    let i = 1;
    while( i<= 10){
        str += `${num} X ${i} = ${num*i}`+"\n";
        i++;
    }
    return str;
}
console.log(printTable(5));
console.log(printTable(9));

function isEven(num){
    if(num % 2 === 0) return true;
    else return false;
}

console.log(isEven(12));
console.log(isEven(15));