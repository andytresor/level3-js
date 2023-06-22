/*
* Create an array that contains names, All names should
*be in smll letters
* TASK => write a xn that capitalises the first letters 
of each name */
let studentNames = ['andy', 'roy', 'brian', 'jessica', 'remon'];
console.log(studentNames);
// SOLUTION

// const result = studentNames.map(name => {
//     let firstletter = name[0];
//    let capitalLetter = name[0] = firstletter.toUpperCase();
//     console.log(capitalLetter);
//     return name;
// });
// console.log(result);
/*console.log(studentNames);
console.log(studentNames[0].toUpperCase());
console.log( studentNames.split(''));
 let theLength = studentNames.length;
// console.log(theLength);
// console.log(studentNames[0]);
function nameCapitalised(array) {
    let firstletter = studentNames.spilt();
    for(let i=0; i<=studentNames.length; i++){
        firstletter.toUpperCase();
        console.log(firstletter);
    };
  
};*/

// Mikes method
function arrayToUppercase(array) {
    let m
    let n = []
    for (let i=0; i<array.length; i++){
        let storedfirstletter = array[i][0].toUpperCase()
        console.log(storedfirstletter)
        m = storedfirstletter + array[i].substring(1)
        n.push(m)
    }

    return n
}
console.log(arrayToUppercase(studentNames));
'l'.toUpperCase

let mapped=studentNames.map(function(m){
    let firstUppercase=m[0].toUpperCase()
  
    let final=firstUppercase+m.slice(1)
    return final

})
console.log(mapped);

let a = [1, 3, 5];
const res = a.forEach(function (b) { return b * 2});
console.log(res);

// definung an array using the Array constructor
const food = new Array ('rice', 'spagetti', 'potatoes', 'fish')
for(let i=0; i<food.length; i++){
    console.log(`Element at index ${i} is ${food[i]}`);
}
