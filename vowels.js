// // find vowels from the string

// str='hai hello';
// vowels=['a','e','i','o','u','A','E','I','O','U'];
// console.log(Array.from(str));
// Array.from(str).filter(char=>vowels.includes(char)).forEach(char=>console.log(char));










// //[no,district,+ve cases,death rates,curred rates, 1st dose vaccine, 2nd dose vaccine]
// covid_data=[
//     [1,'Eranakulam',34000,2000,23000,20000,2000],
//     [2,'Edukki',14000,3000,25000,30000,1000],
//     [3,'Thrissur',24000,4000,33000,24000,2500],
//     [4,'Pathanamthitta',20000,2000,45000,22000,1500],
//     [5,'Kozhikode',44000,5000,12000,21000,500],
//     [6,'Kottayam',27000,1500,27000,14000,1000],
//     [7,'Kollam',14000,2500,25000,18000,2700]
// ]


// //1. Find which district having highest +ve case?
// console.log(covid_data.sort((a,b)=>b[2]-a[2])[0][1]);
// //2. Find which district having highest 1st dose vaccine?
// console.log(covid_data.sort((a,b)=>b[5]-a[5])[0][1]);
// //3. Find which district having lowest death rate?
// console.log(covid_data.sort((a,b)=>a[3]-b[3])[0][1]);
// //4. Sort the data with +ve case in desending order
// console.log(covid_data.sort((a,b)=>b[2]-a[2]));
// //5. sort district with 1st dose vaccine
// covid_data.sort((a,b)=>b[5]-b[5]).forEach(covi=>console.log(covi[1]));
// //6. print total number of curred cases
// console.log(covid_data.map(a=>a[4]).reduce((a,b)=>a+b));
// //7. print total curred cases in Idukki
// console.log(covid_data.find(a=>a[1]=='Edukki')[4]);
// //8. Is any district having more than 27000 +ve cases -
// console.log(covid_data.some(covi=>covi[2]>=27000));










// [id,name,price,stock]
products=[
    [1,'Hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,0],
    [6,'unibic',60,20],
    [7,'good day',70,20]];
//1. Display all products name
products.forEach(item=>console.log(item[1]));
console.log("\n");
//2. Display list of products under 50rs 
products.filter(item=>item[2]<=50).forEach(item=>console.log(item[1]));
console.log("\n");
//3. Print details of 'oreo' product
console.log(products.filter(item=>item[1]=='oreo'));
console.log("\n");
//4. Display most coslty product details
console.log(products.sort((a,b)=>b[2]-a[2])[0]);
console.log("\n");
//5. Display out of stock product details
console.log(products.sort((a,b)=>a[3]-b[3])[0]);
console.log("\n");
//6. Display print details of 4th product 
console.log(products.find(item=>item[0]==4));
console.log("\n");
//7. sort products details based on product availability stock by desending
console.log(products.sort((a,b)=>b[3]-a[3]));
console.log("\n");
//8. Display products having maximum availabile stock
console.log(products.sort((a,b)=>b[3]-a[3])[0]);
console.log("\n");
//9. Display products having minimum availabile stock
console.log(products.sort((a,b)=>a[3]-b[3])[0]);
console.log("\n");
//10. Sort the products based on rate by ascending order
console.log(products.sort((a,b)=>a[2]-b[2]));