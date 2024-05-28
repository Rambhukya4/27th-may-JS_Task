//1. Calculating the Sum of Integers from 1 to 100 
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum of integers from 1 to 100:", sum);


//2. Finding the Factorial of a Given Number
let number = 5;
let factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log("Factorial of 5:", factorial); // Output: 120


//3.Generating the Multiplication Table of a Specific Number
let table = prompt();

for (let i = 1; i <= 10; i++) {
    console.log(`${table} x ${i} = ${table * i}`);
}




//4.prime number range b/w 10 to 50

for(i=10; i<=50; i++){
    if(i%i===0 && i%1===0 && i%2!==0 && i%3!==0 && i%5!==0 && i%7!==0){
        console.log(i+ " is prime number")
    }
}


//5.Generating a Sequence of Square Numbers Up to a 225 Limit
let limit = 225;
for(i=1; i*i<=limit; i++){
    console.log(i);
}



