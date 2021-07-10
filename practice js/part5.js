// callback function practice details
function hello(name, print) {
    print(name);
}
// hello("Khan Faysal",print)

// function print(args) {
//     console.log(args)
// }

// callback has one constant argument and other dynamic function name as argument
// hello("khan Faysal", function(name){
//     console.log("Hello"+ " " + name);
// })
// hello("khan Faysal", function(name){
//     console.log("How are you"+ " " + name + "?");
// })
// hello("khan faysal",function(name){
//     console.log("the length of" + name + "is =" + name.length);
// })

const me = {
    name: "Fayal Khan",
    age: 12,
    email: "mdfaysalkhancse@gmail.com"
}

function aboutMyself(person, callback) {
    console.log("person : " + person.name + " " + "(" + person.age + ")"  );
    if(person.age>= 18){
        callback(person.email)
    } else {
        console.log("you are not maturate age");
    }
}
aboutMyself(me, function(email){
    console.log("Email sent to : " + email);
})
   

