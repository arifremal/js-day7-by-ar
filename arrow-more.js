const add = (firs,last) => firs + last;
// no perameter arrow function

const getPie = () => 3.1416;
// one parameter
const number = (num) => num*7
// one parameter simple version
const number2 = num2 => num2 *4

// multi line arrow function
const doMath =(x,y,z) => {
    const first = x + y;
    const second = y*z;
    const rsult = first + second
    return rsult
}
console.log(doMath(4,5,6));