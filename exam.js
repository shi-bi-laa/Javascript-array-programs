// //[id , brand , model , type , pricePerDay, available]
// car =[
//         [1,'Toyota', 'Corolla' , 'Sedan' ,50 ,10],
//         [2,'Honda', 'Civic' , 'Sedan' ,55 ,8],
//         [3,'Ford', 'Mustang' , 'Sports Car' ,80 ,5],
//         [4,'Jeep', 'Wrangler', 'SUV' ,70 ,7],
//         [5,'Nissan', 'Altima' , 'Sedan' ,45 ,12]
// ];


// //1 print all car brands
// console.log("all car brands \n");
// car.forEach(item=>console.log(item[1]));

// //2 print total number of cars availble
// console.log("\n  print total number of cars availble\n");
// console.log(car.map(a=>a[5]).reduce((a,b)=>a+b));


// //3 print sedan car details
// console.log("\n Print sedan car details");
// console.log(car.filter(item=>item[3]=='Sedan'));


// //4 print cars with price per day greater than 60.
// console.log("\n  print cars with price per day greater than 60.\n");
// car.filter(item=>item[4]>60).forEach(item=>console.log(item[1]));

// //5 print details of jeep wrangler.
// console.log("\n print details of jeep wrangler.\n");
// console.log(car.filter(item=>item[1]=='Jeep'&&item[2]=='Wrangler'));

// //6 sort cars based on descending order of price per day.
// console.log("\nsort cars based on descending order of price per day. \n");
// console.log(car.sort((a,b)=>b[4]-a[4]));

// //7 sort cars based on ascending order of available cars.
// console.log("\n sort cars based on ascending order of available cars.\n");
// console.log(car.sort((a,b)=>a[5]-b[5]));

// console.log("\nFind the car with most availble cars\n");
// console.log(car.sort((a,b)=>b[5]-a[5])[0]);


// console.log("\ncalculate the revenue if all cars are rented for a day \n");



// console.log("\ncount the number of sedan cars \n");
// // console.log(car.filter(item=>item[2]=='Sedan').reduce((a,b)=>a[2]+b[2]));

// console.log("\nfind the car with earliest availability \n");
// console.log(car.sort((a,b)=>b[5]-a[5])[0]);



// console.log("\nPrint all unique car brands\n");
// car.forEach(item=>console.log(item[2]));


// console.log("\nfind the total number of available cars for all types\n");
// console.log(car.map(a=>a[5]).reduce((a,b)=>a+b));


// console.log("\nFind the car with the fewest available cars \n");
// console.log(car.sort((a,b)=>a[5]-b[5])[0]);


// console.log("\nCheck if there is any car with a price per day of exactly 55 \n");
// console.log(car.some(item=>item[4]==55));


 














// const data = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12] ];

// // 1) Find the sum of all numbers in the nested arrays.
// console.log(data.flat().reduce((n1,n2)=>n1+n2));
// // 2) Find the maximum number in the entire nested array.
// console.log(data.flat().reduce((n1,n2)=>n1[2]<n2[2]?n1:n2));
// // 3) Find the average of all numbers in the nested arrays.
// console.log(data.flat().reduce((n1,n2)=>(n1+n2)/data.length));
// // 4) Find square of each number in the nested arrays.
// console.log(data.flat().map(a=>a**2));
// // 5) Find all even numbers from the nested arrays.
// console.log(data.flat().filter(a=>a%2==0));
// // 6) Use reduceRight to concatenate all nested arrays in reverse order.

// // 7) create a flattened array from the nested arrays.
// console.log(data.flat());
// // 8) check if the number 5 is present in any of the nested arrays
// console.log(data.flat().includes(5));
// // 9) create a single string of all numbers separated by a comma.

// // 10) Print each number in the nested arrays.
// data.flat().forEach(a=>console.log(a));
// // 11) Sort the nested arrays based on the sum of their numbers.

// // 12) Use map to get the product of the first and last number in each nested array.

// // 13) Use filter to get all arrays where the sum of numbers is greater than 15.
// console.log(data.filter(a => a.reduce((sum, num) => sum + num) > 15));
// // 14) Use reduce to find the product of all numbers in the nested arrays.
// // 15) create an array of square roots of all numbers in the nested arrays.
// console.log(data.flat().map(a=>Math.sqrt(a)));
// // 16) Use includes to check if the number 20 is present in any of the nested arrays.
// console.log(data.flat().includes(20));
// // 17) Use map to convert each number in the nested arrays to its string representation.
// console.log(data.map(ar=>ar.map(String)));
// // 18) Use filter to get all arrays where the length is greater than 2
// console.log(data.filter(a=>a.length>2));
// // 19) Use reduceRight to flatten and concatenate all nested arrays in reverse order.

// // 20) Use arrayFrom to create an array of squares of all even numbers in the nested arrays.

// // 21) Sort the nested arrays based on the length of each array.

// // 22) Use map to convert each number in the nested arrays to its negative.

// // 23) Use filter to get all arrays where the last number is greater than 10.
// console.log(data.filter(ar=> ar[ar.length-1] > 10));
// // 24) Use reduceRight to get the difference between consecutive numbers in each nested array.
// // 25) Use arrayFrom to create an array of square roots of all even numbers in the nested arrays.
// // 26) Use includes to check if the number 15 is present in any of the nested arrays.
// // 27) Use map to convert each number in the nested arrays to its absolute value.
// // 28) Use filter to get all arrays where the first number is less than 5.
// console.log(data.filter(ar=> ar[0] < 5));
// // 29) Use reduceRight to concatenate and flatten all nested arrays in reverse order.
// // 30) Use arrayFrom to create an array of numbers greater than 5 from the nested arrays.
















const mix = [
    [1, 'apple', 3, 'banana'],
    [4, 'orange', 6, 'grape'],
    [7, 'pear', 9, 'kiwi'],
    [10, 'melon', 12, 'strawberry']
  ];
  

//   1) Use map to create an array of strings containing both the type and value of each element.

// 2) Use filter to get all arrays where the number of strings is greater than the number of numbers
// 3) Use reduce to concatenate all strings in the nested arrays into a single sentence.
// 4) Use arrayFrom to create an array of unique strings from the nested arrays.
// 5) Use sort to sort the nested arrays based on the length of strings in each array.
// 6) Use map to convert each string in the nested arrays to its uppercase form.
// 7) Use filter to get all arrays where the sum of numbers is greater than 20.
console.log(mix.filter(a => a.filter(ele=>typeof ele==='number').reduce((sum, num) => sum + num) > 20));
// 8) Use reduceRight to concatenate and flatten all nested arrays in reverse order.
// 9) Use arrayFrom to create an array of the lengths of all strings in the nested arrays.
// 10) Use includes to check if the word 'apple' is present in any of the nested arrays.
console.log(mix.some(item=>item='apple'));
