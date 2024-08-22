/* Syncronous Code */



function sum(n) {
     // setTimeout()
     return (n * (n + 1)/2);
}

let num1 = sum(5)
setTimeout(() => {
     console.log(num1)
}, 1000);
