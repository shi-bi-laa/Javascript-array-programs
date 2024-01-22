// var vehicle=[];
// var vehicle=["car","bus","bus","bike","plane",20000,567000];


// console.log(vehicle.length);

// for(let i of vehicle){
//     console.log(i);
// }

// for(let index in vehicle){
//     console.log(index);
// }

// console.log(vehicle.push("auto"));
// console.log(vehicle);


// var flag=0;
// var arr=[10,24,5,43,50,17,2];
// //Check whether the element(2) is present or not
// var item=134;
// for(let i of arr){
//     if(i==item){
//         flag=1;
//         break;
//     }
// }
// console.log(flag==1?"element found":"not found");







//To hold an expenses , and 

//Find total expense
//Find maximum expense
//Find minimum expense



var expenses = [12000,20000,34000,10000,28000,15000,50000];
// var sum=0;
// for(let i of expenses){
//     sum+=i;
// }
// console.log(sum);



// var maxexp=0;
// for(let i of expenses){
//     if(maxexp<i){
//         maxexp=i;
//     }
// }
// console.log(maxexp);




var minexp=expenses[0];
for(let i of expenses){
    if(i<minexp){
        minexp=i;
    }
}
console.log(minexp);