// inner function access all from outer function but outer function can not access from inner function
// function outer() {
//     let a = 10;
//     function inner(){
        
//         console.log("this is inner function");
//     }
//     a;
//     inner();
//     console.log("this is outer function");
// }
// outer();

function add (a, b){
    function sum() {
        return a + b;
    }
    function sub() {
        return a - b;
    }
    function div() {
        return a / b;
    }
    function mul() {
        return a * b;
    }
    return sum() + sub() + div() + mul();
}
let result = add(10, 20);
console.log(result);
