// function add(first,second){
//     const totall = first + second
//     return totall
// }
// add(9,6)
// console.log(add(9,6));

function add (first,second = 9){
    const t = first + second;
    return t
}
console.log(add(0,0));

function fullName (first,last='islam'){
    const k = first + ' ' +last
    return k
}
console.log(fullName('ak'));