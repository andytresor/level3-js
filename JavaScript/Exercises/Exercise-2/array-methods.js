// ARRAY METHODS
  
  // An Araay is a collection of elements or iterms

 let food = ['rice', 'potatoes', 'eru', 'beans', 'banana'];

 food.push('fish'); // adds an element at the end of the array
      console.log(food);
 food.unshift('fufu'); // adds an element at the beginning of the array
      console.log(food);
 food.pop(); // removes an element at the end of an array and changes the original array
      console.log(food);
 food.shift(); // removes an element at the beginning of an array and changes the original array
      console.log(food);
 let foodCopy = food.slice(); // creates a copy of the original array but doesn't change the original array
      console.log(foodCopy);
      let test = food === foodCopy
      console.log(test); // returns false to proove that slice() created a copy which is !== the array
 let [elt1, elt2, elt3, elt4, elt5] =  ['rice', 'potatoes', 'eru', 'beans', 'banana']; // this is known as array destructuring in js
     console.log(elt1); // which is the same as let elt1 = food[0];
 let [elt6, elt7, elt8, elt9, elt10, elt11 = 'fufu'] = ['rice', 'potatoes', 'eru', 'beans', 'banana']; // assigns a default value to the array
    console.log(elt11);
 let meal = ['meat', 'bread', 'soup', ['coaca', 'spride', 'ananna']]; // Nested array distructuring in js
   // how to access ananna
   let soup = meal[3];
   let ananna = soup[2];
     console.log(ananna); // OR using the short form
   let anannas = meal[3][2]; // OR usingndestructuring
     console.log(anannas);
   let [,,,[,,annana]] =  ['meat', 'bread', 'soup', ['coaca', 'spride', 'ananna1']];
     console.log(annana);
 
    // The spread syntax and the rest parameter in js
       // the rest parameter creates a new array  called task3 and assigns the last values to it
 let [task1, task2, ...task3] = ['football', 'basketball', 'swimming', 'racing', 'fighting', 'racing'];
     console.log(task3);
       // the spread parameter creates a copy of the original array
 let originalArray = ['football', 'basketball', 'swimming', 'racing', 'fighting', 'racing'];
 let originalArrayCopy = [...originalArray];
     console.log(originalArrayCopy); // note that originalArrayCopy !== originalArray.

    // How to merge arrays
 let firstArray = [1, 2, 3, 4];
 let secondArray = [5, 6, 7, 8 ,9, 10]
 let mergeArray = [...firstArray, ...secondArray];
     console.log(mergeArray);

