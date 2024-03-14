
1. Write a JavaScript program that randomly selects and prints a letter from a given name.
2. Ask the following questions:

    What are your English marks in the 10th grade?  
    What are your Science marks in 10th grade?  
    What are your Math marks in 10th grade?  
    What are your Hindi marks in 10th grade?  
    What are your SST marks in 10th grade?  
    
    Now calculate percentage by taking all the 5 subjects numbers.

3. Create Bill Calculator

    Ask below Questions

    How many french fries (89rs per piece) do you want to order ?  
    How many burgers (99rs per piece) do you want to order ?  
    How many plates of chowmin (129rs per plate) do you want to order?  
    How many plates of Manchurian (109rs per plate) do you want to order?  
    How many Cokes (49 per piece) do you want to order ?  
    Use can enter any number of quantities. Calculate the bill based on the quantities entered and item prices. If user enteres 0 or negative value then consider item count as 0.
4. Simple Loan Calculator:
    
    Ask the user for the principal amount (loan amount).
    
    Ask for the annual interest rate (as a percentage).
    
    Ask for the loan term in months.
    
    Calculate the monthly payment using the following formula:
    
    payment = (principal * (interestRate / 100 * (1 + (interestRate / 100) ** term)) / ((1 + (interestRate / 100) ** term) - 1)
    
    All variables are defined as above.
    Use only arithmetic operations and exponentiation (**) to calculate the monthly payment.
    Display the calculated monthly payment.
1. 
1. Asks for temperature: Uses prompt to get the temperature as a number.  
Asks for unit: Uses prompt to get the unit (Celsius or Fahrenheit) and converts it to uppercase for case-insensitive comparison.  
Conversion:  
For Celsius to Fahrenheit: Uses the formula (temperature * 9 / 5) + 32.  
For Fahrenheit to Celsius: Uses the formula (temperature - 32) * 5 / 9.  
Output: Displays the converted temperature with two decimal places using toFixed(2).  
Error handling: Checks if the entered unit is valid and displays an error message if not.  

7. Generate a random number between 1 and 100 (or any desired range).  
Allow the user to guess the number in multiple attempts.  
After each guess, provide feedback using only arithmetic operations:  
If the guess is higher, subtract 1 from the guess and display a message like "Try a lower number!".  
If the guess is lower, add 1 to the guess and display a message like "Try a higher number!".  
If the guess is correct, display a message like "Congratulations, you guessed the number!" and show the number of attempts taken.  


```js
    if(condition) {
        statement-1;
    }
```

```js
    if(condition) {
        statement-1;
    }
    else{
        statement-2;
    }
```

Program
```js
document.write("Rocket"+"<br>")
        function Patterns_5(num){
            let str = '';
            for(let row = 0; row < 2*num; row++){
                let colc = row > num ?  2*num-row : row
                for(let col = colc; col > 0 ; col--){
                    str +="&nbsp;&nbsp;"
                }
                for(let col = 0; col < colc; col++){
                    str +="*&nbsp;&nbsp;"
                }
                str +="<br>"
            }
            return str
        }
        document.write(Patterns_5(7)+"<br>");
```
Output
```js

  *  
    *  *  
      *  *  *  
        *  *  *  *  
          *  *  *  *  *  
            *  *  *  *  *  *  
              *  *  *  *  *  *  *  
            *  *  *  *  *  *  
          *  *  *  *  *  
        *  *  *  *  
      *  *  *  
    *  *  
  *  
```
```js
 function findTarget(numbers,t){
           for(n in numbers){
                if(numbers[n] === t){
                    return n
                }
                
           }
           return -1
        }
        console.log(findTarget([2,1,4,5,8,7,9],4));
```
1. Sum of elements in an Array  
    ```
    
    ````

1. Sum of even numbers in an Array
1. Count the even & odd numbers in an Array
1. Sum of odd indexes of an Array
1. Sum of even indexes of an Array
1. Find the Maximum of sum of odd indexes of an Array and sum of even indexes of an Array.
1. Largest number in an Array
1. Least number in an Array
1. Product of numbers in Array
1. Count the Prime numbers in an Array if exists, if not return 0;
1. Write a function that finds the target element in an array. If target exists return index of the element else return -1
1. List of Perfect numbers
1. Fibonacci Series
1. Armstrong Number