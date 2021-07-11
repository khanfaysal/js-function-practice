// this one of system to do callback function directly by return
// function father(){
//     console.log("This is father function");
//     return function(){
//         console.log("This is child function");
//     }
// }
// const a = father();
// console.log(a());

// this is another way to return callback function
// function father(){
//     console.log("This is father function");
//     function child(){
//         console.log("This is child function");
//     }
//     return child;
// }
// const a = father();
// console.log(a());


function greetings(msg){
    return function(name){
        console.log(msg + " " + name);
    }
}
const good = greetings("Good morning");
const hello = greetings("Hi");
good("khan faysal")
hello("how are you ?")
