// var points = [40, 100, 1, 5, 25, 10];

// //Given an array of numbers and perform sorting


// //1.ascending order the numbers
// var asc=[];
// asc= points.sort((a,b) => a-b);
// console.log(asc);
// //2.descending order the numbers
// var desc=[];
// desc=points.sort((a,b) => b-a);
// console.log(desc);
// //3.find the lowest number
// console.log(desc[desc.length-1]);
// //4.find the highest number
// console.log(desc[0]);


// //return a new array with square of all element values:
//  a=[10,11,12,13,14];
// for(let i of a){
//     i=i**2;
//     console.log(i);
// }

// //using array method
// a=[10,11,12,13,14];
// console.log(a.map(num=>num**2));

// console.log(a.map(num=>num*10));


// arr=[4,9,16,25];
// console.log(arr.map(num=>Math.sqrt(num)));


// //if num<5 add 1 if num>5 subtract 1
// a=[1,2,3,4,5,6,7];  //output 0,1,2,3,6,7,8
// console.log(a.map(num=>num>4?num+1:num-1));


//filter(): return only the elements which statisfy the condition..

//  var a=[10,11,12,13,14,15,16,17,18,19,20];
// //print only even numbers

// function numcheck(num) {
//     return num%2==0;
// }
// console.log(numcheck.num);

// console.log(a.filter(num=>num%2==0));
// console.log(a.filter(num=>num>18));


//reduce() - function apply to all array elements and returns a single value(it will last value)

// a=[1,2,3,4,5,6,7,8,9,10];
// console.log(a.reduce((n1,n2)=>n1+n2));  //sum
// console.log(a.reduce((n1,n2)=>n1>n2?n1:n2)); //highest
// console.log(a.reduce((n1,n2)=>n1<n2?n1:n2)); //lowest

//reduceRight() - function apply to all elements and returns a single value(first value)

arr=[
    [1,'chinnu',100],
    [2,'minnu',200],
    [3,'ponnu',100],
    [4,'manu',100],
    [5,'anu',300]
];
// // // who got the minmum value

// console.log(arr.reduce((n1,n2)=>n1[2]<n2[2]?n1:n2));
// console.log(arr.reduceRight((n1,n2)=>n1[2]<n2[2]?n1:n2));



//find()- find the details of a specific item in the array and return the first occurence of the item.

//[id,name,designation,location,salary,experience]
