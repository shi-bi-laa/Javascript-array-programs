// a=[
//     [10,50],
//     [20,60],
//     [1,5],
//     [15,25],
//     [3,8],
//     [100,500]
// ]
// //print all the numbers>10
// console.log(a);
// console.log(a.flat());
// console.log(a.flat().filter(num=>num>10));




// //deeply nested array

// //[1,[2,[3,[4,[5]]]]] -> [1,2,3,4,5]
// const deeplynestedarray=[1,[2,[3,[4,[5]]]]];
// console.log(deeplynestedarray.flat(Infinity));   //infinity is a function given by javascript to flatten this type of arrays.








// //includes() - ckeck if it includes a particular elemnts. return boolean value

// a=['max','mili','milan'];
// console.log(a.includes('mili')); //true
// console.log(a.includes('Mili')); //false







// //some() - aplly functionn and return true or false
// //[id, name,price,stock]
// products=[
//     [1,'Hide and seek',50,20],
//     [2,'lays',20,80],
//     [3,'oreo',40,100],
//     [4,'parleG',25,10],
//     [5,'tiger',20,0],
//     [6,'unibic',60,20],
//     [7,'good day',70,20]
// ]
// // 1 is there any product can purchse by rs 20
// console.log(products.some(item=>item[2]<=20));


// //2 is there any product with available stock is >90
// console.log(products.some(item=>item[3]>90));


// //3 is there any product with available in the rannge of 10 to 20
// console.log(products.some(item=>item[2]>=10 && item[2]<=20));

// //4 print all the product name avilable in the range of 20 to 40
// products.filter(item=>item[2]>=20 && item[2]<=40).forEach(item=>console.log(item[1]));
    







// // split() - split a string into substring with a specified seperator
// let str='luminar';
// console.log(str.split());

// console.log(str.split(''));

// console.log(str.split(','));

// console.log(str.split('',3));




// //can you provide an example of using the split() method using the limit parameter
// const longtext="this is a long sentence with many words";
// console.log(longtext.split('',5));



// str='luminar';
// console.log(str.toUpperCase());


// //////1 convert to array- Array.from()

// console.log(Array.from(str));


// console.log(Array.from(str).map(char=>char.toUpperCase()));

// Array.from(str).map(char=>char.toUpperCase()).forEach(char=>console.log(char));
