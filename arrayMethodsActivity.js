//using .concat()
let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil","Tobias", "Linus"];
let combArray = arr1.concat(arr2);
console.log("concacted arr1 and arr2:",combArray);

//Using .push()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("fruits using the push():",fruits);

//Using .unshift()
array1 = [1,2,3];
array1.unshift(4,5);
console.log("array1 using the unshift():",array1);

//.pop()
console.log("fruits using the pop():",fruits.pop());

//.shift()
array2 = [1,2,3];
array2.shift();
console.log("array2 using the shift():",array2);

//.sort()
fruits.sort();
console.log("fruits using the sort():",fruits);
//console.log(fruits.sort())

//.slice()
let slicedFruits = fruits.slice(2,4);
console.log("fruits using the slice():", slicedFruits);

//.splice
let months = ["February","June","July","October"];
months.splice(0,2,"December");
console.log("months using the splice():",months);


