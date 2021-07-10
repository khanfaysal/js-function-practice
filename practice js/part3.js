// higher order function practice
const arr = [4,6,8,5,2];
// anonymous function use

// arr.forEach(function(a) {
//     console.log(a);
// })

// callback function use
function cbf(a){
    console.log(a);
}
arr.forEach(cbf)

// one another example
function caller() {
    return function(name) {
        return  'calling'+ " " + name;
    }
}
// const callCaller = caller();
// const y = callCaller("khan");
// console.log(y);
const a = caller()('faysal');
console.log(a)