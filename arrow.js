// function declaration

// function add (first,second){
//     const total = first * second;
//     return total
// }
// console.log(add(9,6));
//  function expression
const add1 = function add1 (first,second){

    const totall = first + second
    return totall
}


//  function expression with anonymous 
const add2 = function  (first,second){

    const totall = first + second
    return totall
}

 
function add (first,second){
    const total = first * second;
    return total
}
console.log(add(9,6));


function add4 (first,second){

    return first + second
}
// arrow function
const add6 = (first,second) => first + second

console.log(add6(8,7));

