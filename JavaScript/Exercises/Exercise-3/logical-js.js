// 1) Write a program that prints a multiplication table for numbers up to 12.
/*let number = parseInt(prompt('PLease Enter a number: '));

    for(let i=1; i<=12; i++){
        let result = i * number;
     //  console.log(`${number} * ${i} = ${result}`);
      // console.log(result);
    };*/

    // Another method for question one
    let firstOperand = 0;
    for(let i=1; i<=12; i++){
        let firstOperand = [i];
        for(let x=1; x<=12; x++){
            let secondOperand = [x];
            let mulitlying = firstOperand * secondOperand;
            console.log(`${firstOperand} * ${secondOperand} = ${mulitlying}`);
        };
    };


// 2) Write a program that prints all prime numbers between 1-1000.
for(let i=1; i<=1000; i++){
    if(i % 2 !== 0 && i % 3 !== 0){
        let primeNumber = i;
//console.log(`Prime numbers are ${primeNumber}`);
    }
}


// 3) Write three functions that computes the sum of the numbers in a ist using the for, while and the do-while loop.
let list = [2, 3, 6, 8, 5, 10]
 // a)Using for loop
function forSum(array){
    let sum = 0
    for(let i=0; i<array.length; i++){
        sum = sum + array[i];
    } return sum;
}
//console.log(forSum([2, 3, 6, 8, 5, 10]));


 // b)Using while loop.
 function forSumTwo(array){
    let sumTwo = 0;
    let i=0;
    while(i<array.length){
        sumTwo = sumTwo + array[i];
        i++;
    }; return sumTwo;
 };
   //console.log(forSumTwo([2, 3, 6, 8, 5, 10]));
 

 // c)Using do-while loop.
 function forSumThree(array){
    let sumThree = 0;
    let i = 0;
    do{
        sumThree = sumThree + array[i]; 
        i++;
    }
    while (i<array.length)
    return sumThree;
 };
 //console.log(forSumThree([2, 3, 6, 8, 5, 10]));
 

// 4)Write a function that concatenates two lists.

function sumList(listOne, listTwo){
    listOne = [1, 2, 3, 4, 5];
    listTwo = [6, 7, 8, 9, 10];
 let  summedList = [...listOne, ...listTwo] ;
    return summedList;
}
//console.log(sumList([1, 2, 3, 4, 5]),([6, 7, 8, 9, 10]));


// 5) Write a function that takes a number and returns a list of digits.
let listOfNumbers = 859919;
    let listString = listOfNumbers.toString();
    let splitString = listString.split('');
   // console.log(splitString);

   // Another method for return a list of digits
   let liTwo = 39478;
   function listDigits(value){
    let arrayList =[];
    let stringTwo = value.toString();
   for(let i=0; i<stringTwo.length; i++){
    let digitnum = parseInt(stringTwo[i]);
    arrayList.push(digitnum)
   }
   return arrayList
}
console.log(listDigits(5896));
   
   
   

// 6) Write a function that returns the sum of numbers
let num = 919;
    let numberString = num.toString();
    let newString = numberString.split('');
    let mapArray = newString.map(Number);
    let accumulator = mapArray.reduce(function (a, b){
    return a + b;
}, 0);
//console.log(accumulator);

  // Another method of solving sum of numbers 
let numTwo = 919;
function sumOfNumbers(value){
    let result = 0;
    while(value > 0){
        result += value % 10
        value = Math.floor(value/10)
    }
    return result
}
console.log(sumOfNumbers(numTwo));
