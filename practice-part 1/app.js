// practice part 1

// A function can be stored in a variable (done)
function sayName(name) {
    return "Hello"+ " "+ name; 
}
const hello = sayName;
const helloe = sayName("khan");

console.log(hello)
console.log(helloe)

// A function can be stored in an array (done)
const arr = [1,4,6,7];
arr.push(sayName())
console.log(arr);

// A function can be stored as an object field or property (done)
const person = {
    name:'khan',
    sayName: sayName,
    print: function(){
        console.log("hello");
    }
}
console.log(person)
// We can create function as needed (done)
const sum = 10 + (function(){return 40})();
sum;

// We can pass function as an arguments
function introduce(name,otherInfo){
    return otherInfo(name)
}
const result = introduce("khan",sayName);
console.log(result);

// We can pass function as an return
function base(b) {
    return function(n) {
        let result = 1;
        for(let i=0; i<b; i++) {
            result *= n;
        }
        return result;
    }
}
const power = base(2);
const result = power(5);
result