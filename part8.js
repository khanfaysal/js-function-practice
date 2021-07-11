// js sort array of object and array
// sort array
// const age = [74,73,20,75,5,848,82];
// age.sort(function(a, b){
//     return a - b;
// });
// console.log(age);

// object array
const people = [
    {name : "Faysal khan", age : 26},
    {name : "Prodip ray", age : 29},
    {name : "Mustakim ahmed", age : 19},
    {name : "Hafix", age : 18},
    {name : "Ridom", age : 14},
    {name : "pala", age : 7}
]
people.sort(function(a, b){
    if(a.name > b.name){
        return 1;
    } else if (a.name < b.name) {
        return -1;
    } else {
        return 0;
    }
})
console.log(people);
