function sum1ToN(N) {
     if (isNaN(N)) {
          return `Please Enter Number Not ${N}`;
     }
     let sum = 0;
     for (let i = 0; i <= N; i++){
          sum = sum + i;
     }
     return sum;
}

let result = sum1ToN(3);
console.log(result);
