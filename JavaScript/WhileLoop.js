// // document.write("Hello I am External JavaScript File "+"<br>");

// // let num = 123456789123456786;
// // let count = 0;
// // let digit;
// // document.write("Number is: "+num+"<br>");
// // while(num>0){
// //     digit = num % 10; // remainder
// //     count++;

// //     document.write(count+" digit is: "+ digit+"<br>");
// //     num = Math.floor(num/10);

// // }

// let num  = 987;
// let digit;
// let count;
// let sum = 0;

// while(num>0){
//     digit = num % 10;
//     count++;
//     sum = sum + digit;
//     //  sum += num % 10;
//      num = Math.floor(num / 10);
//      document.write("Digit is :"+digit+"<br>")
//      document.write("Sum of Digits is :"+sum+"<br>")
//     }
//     // let num2  = prompt("Enter your Lucky Number");

//      for(let i = 1; i<= 10; i++){
//         for(let j = 1; j<= 10 ; j++){
//         document.write(`${i} + ${j} = ${i + j}`+"<br>")
//         }
//         document.write("---------------------<br>")
//     }

// let i = 10;
// while(i>9){
//     // document.write("hello inside the loop",i);
//     console.log(i)
//     i++;
// }
// let i = 20;
// do{
//     document.write("Do Block of the Loop ",i);
//     // i++;
// }while(i<30);


function add(num,num2){
    return num+num2;
}
function sub(num,num2){
    return num - num2;
}
function mul(num,num2){
    return num * num2;
}
function greet(name="Balayya"){
    return "Good Morning "+ name;
     
}
// document.write(greet()+"<br>")
// console.log(add(5,8));
// console.log(sub(5,8));
// console.log(mul(5,8));
// document.write("sum is: "+add(5,9)+"<br>");
// document.write("sum is: "+sub(15,9)+"<br>");
// document.write("sum is: "+mul(5,9)+"<br>");
function countDigits(num){
    let count = 0;
    let sum = 0;
    while(num > 0){
        digit = num % 10;
        count++;
        sum += digit;
        num = Math.floor(num/10)
    }
    return count+"==> "+sum;
}
console.log(countDigits(174))// 3
console.log(countDigits(58174))// 5
console.log(countDigits(8974))// 4
console.log(countDigits(174857452514))// 12

function isPrime(num){
    if(num <= 1){
        return false;
    }else{
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i == 0){
                return false;
            }
        }
    }
    return true
}
console.log(isPrime(97));
console.log(isPrime(98));
console.log(isPrime(17));
console.log(isPrime(27));
console.log(isPrime(37));

function isPerfectNum(num){
    let sum = 0;
    for(let i = 1; i < num/2; i++){
        if(num % i == 0){
            sum += i;
        }
    }
  return sum == num;
}
console.log(isPerfectNum(6));
console.log(isPerfectNum(16));
console.log(isPerfectNum(28));
console.log(isPerfectNum(153));

function listOfPrimeNum(start, end){
    let result = [];
    let count = 0;
    for(let i = start; i <= end; i++){
        if(isPrime(i)){
            result.push(i)
            count++;
        }
    }
    return result;
}

console.log(listOfPrimeNum(100,500));

function listOfPerfectNum(start, end){
    let result = [];
    for(let i = start; i <= end; i++){
        if(isPerfectNum(i)){
            result.push(i)
        }
    }
    return result;
}

console.log(listOfPerfectNum(1,10000));

function invertTraingle(num){
    let str='';
    for(let row = 1; row <= num; row++){
        for(let col = num; col > 0; col--){
            if(row >= col)
            {
                str += "* ";
            }else{
                str += "  "
            }
        }
        str += "\n"
    }
    return str;
}
console.log(invertTraingle(5));

function fibonacciSeries(n){
    let str = '';
    let a = 0;
    let b = 1;
    str = str + a+" " + b+" ";
    for(i =2; i < n; i++){
        let c = a + b;
        str += c+" ";
        a = b;
        b = c
    }
    return str.split(" ")
}
console.log(fibonacciSeries(20));
console.log(fibonacciSeries(20)[11]);
function fibonacciSeriesArray(n){
    let str = [];
    let a = 0;
    let b = 1;
    str = [a,b]
    for(i =2; i < n; i++){
        let c = a + b;
        str.push(c)
        a = b;
        b = c
    }
    return [str,b];
}
const num = 10;
const [fibseries, lastTerm] = fibonacciSeriesArray(num);

console.log("Series is: ",fibseries);
console.log("Last Term is: ",lastTerm);
console.log(fibonacciSeriesArray(20));
// console.log(fibonacciSeriesArray(20)[2]);

function nthTermOfFibSeries(n){
    if(n <= 1){
        return n;
    }
    let a = 0;
    let b = 1;
    let c;
    for(i = 2; i <= n; i++){
        c = a + b;
        a = b;
        b = c
    }
    return b;
}
console.log(nthTermOfFibSeries(11));

function Traingle(n){
    str ='';

    for(let i = 1; i < n; i++){
        for(j = n; j>i;j--){
            str += " ";
        }
        for(j = 0; j < i;j++){
            str += "* ";
        }
        str += "\n"
    }
    return str;
}

console.log(Traingle(7));