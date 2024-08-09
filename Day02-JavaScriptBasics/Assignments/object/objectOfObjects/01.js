/*
Create a function that takes an array of objects as input,
and returns the users whose age > 18 and are male
*/

const users = [
     {
          
               name: "harkirat",
               age: 19,
               gender: "male",
               address: {
                    city: "Delhi",
                    country: "India",
                    address: "1122 DLF"
               }
          
     },
     {
         
               name: "Rani",
               age: 15,
               gender: "female",
               address: {
                    city: "Delhi",
                    country: "India",
                    address: "1122 DLF"
               }
     }
] 



function checkUser(users) {
     let result = users.filter(user => user.age > 18 && user.gender == "male")
     console.log(result);
     
}

checkUser(users);