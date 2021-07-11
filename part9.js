// foreach
var arr = [23,343,55,66,788];
// arr.forEach(function(element, index, arr){
//     console.log("Element= " + element + " "+ "Index= " + index + " " +  'Array = ' + arr)
// })

// custom foreach function by callback function
function loop(arr , callback){
    for (let i=0; i<arr.length; i++){
        callback(arr[i],i,arr)
    }
}
loop(arr,function(element,i,arr){
    console.log("Element is: " + element + " " + "Index is :" + i + " array is :" + arr);
});