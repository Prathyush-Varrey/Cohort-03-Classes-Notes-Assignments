// setTimeout(() => {
//      console.log(`Hello`);
// }, 3000)

// setTimeout(() => {
//      console.log(`Hello There`);
// }, 5000)

// setTimeout(() => {
//      console.log(`Hi`);
     
// }, 1000)

/*
Output :
1st => Hi
2nd => Hello
3rd => Hello There
*/

// setTimeout(function () {
//      console.log("hi");
//      setTimeout(function () {
//        console.log("hello");
   
//        setTimeout(function () {
//          console.log("hello there");
//        }, 5000);
//      }, 3000);
//    }, 1000);
   

function setTimeoutPromisified(ms) {
     return new Promise((resolve) => setTimeout(resolve, ms));
   }
   
   setTimeoutPromisified(1000).then(function () {
     console.log("hi");
     setTimeoutPromisified(3000).then(function () {
       console.log("hello");
       setTimeoutPromisified(5000).then(function () {
         console.log("hello there");
       });
     });
   });
   