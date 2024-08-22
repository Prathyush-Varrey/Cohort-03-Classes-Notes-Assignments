// function setTimeoutPromisified(ms) {
//      return new Promise(resolve => setTimeout(resolve, ms));
//    }
   
//    function callback() {
//         console.log("3 seconds have passed");
//    }
   
//    setTimeoutPromisified(3000).then(callback)
// //


// function wait3S(resolve){
//      setTimeout(resolve, 3000);
// }

// function main() {
//      console.log(`main Called`);
// }
// wait3S(main)

let p = new Promise(random);


function random(resolve) {
     resolve();
}

function callback() {
     console.log('Promise Successed');
     
}
p.then(callback)
