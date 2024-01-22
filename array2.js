// var arr=[4,5,6];
// var total=15;
// console.log(arr);
// for(let i in arr){
//    arr[i]=total-arr[i];
// }
// console.log(arr);


//linear search


// function linearsearch(arr, ele){
//     for(let i in arr){
//         if(arr[i] == ele){ 
//           return i;
//         }
       

//     } return -1;
    
// }
// console.log(linearsearch([3,6,8,9],8));



var arr=[3,5,1,8,6];
var arr1=[3,7,0,9,5];
var duplicate=[];
for(let i=0;i<arr.length;i++){
    for(j=0;j<arr1.length;j++){
        if(arr[i]==arr1[j]&& !duplicate.includes(arr[i])){
            duplicate.push(arr[i]);
        }
    }
}
console.log(`duplicate elements in both arrays are ${duplicate}`);