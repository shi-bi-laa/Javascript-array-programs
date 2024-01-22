//Nested Array
//print all elements, whose values are less than 10 in given array
// a=[
//     [1,2],
//     [10,22],
//     [14,21],
//     [3,6],
//     [5,9],
//     [19,28],
// ];
// console.log(a);

// for(let i of a){
//     for(j of i){
//         if(j<10){
//             console.log(j);
//         }
//     }
// }










//print pairs gives sum=9
// var ar=[4,3,2,6];
// for(let i=0;i<ar.length;i++){
//     for(j=i+1;j<ar.length;j++){
//         if(ar[i]+ar[j]==8){
//             console.log(ar[i],ar[j]);
//         }
//     }
// }



// for(let i of ar){
//     for(j of ar){
//         if(i+j==4){
//             console.log(i,j);
//         }
//     }
// }





//[id,name,designation,location,salary,experience]
employee=[
    [1000,'Neel','Developer','Kochi',25000,3], //emp
    [1001,'Max','Tester','TVM',20000,2],
    [1002,'Vinod','QA','KNR',35000,4],
    [1003,'Vyom','QA','Kochi',45000,5],
    [1004,'Laisha','Tester','TVM',55000,7],
    [1005,'Aahan','Developer','TVM',15000,1],
    [1006,'Aahil','QA','Kochi',25000,3],
    [1007,'Shayan','Developer','KNR',30000,3],
    [1000,'Nihaan','Developer','Kochi',25000,3],

]

console.log("\n Print all employee name"); 

for (let emp of employee) {
    console.log(emp[1]);
}

console.log("\n Print total number of employee ");

counter=0;
for(let i of employee){
   counter++;
}
console.log(`total number of employees=${counter}`);

console.log("\n Print developer employee details");

for (let emp of employee) {
    if(emp[2]=='Developer'){
        console.log(emp);
    }
}

console.log("\n Print all employee details whose salary > 30000");

for (let emp of employee) {
    if(emp[4]>30000){
        console.log(emp);
    }
}

console.log("\n Print details of employee Laisha");

for (let emp of employee) {
    if(emp[1]=='Laisha'){
        console.log(emp);
    }
}


console.log("\n Sort employee based on descending order of salary");

employee.sort((a, b) => b[4] - a[4]);
for (let emp of employee) {
    console.log(emp);
}


console.log("\n sort employee based on ascending order of experience");

employee.sort((a, b) => a[4] - b[4]);
for (let emp of employee) {
    console.log(emp);
}