/*
Write a function that takes a new object as input which has name , age  and
 gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, 
 your age is 21)
 */

let users = {
     user1: {
          userName: "Harkirat",
          userAge: 28,
          userGender : "Male"
     },
     user2: {
          userName: "Rani",
          userAge: 23,
          userGender : "Female"
     },
     user3: {
          userName: "Anup",
          userAge:17,
          userGender:""
     }
}


function greetUser(user) {
     if (user.userGender == "Male")
          console.log(`Hi Mr ${user.userName}, your age is ${user.userAge}`);

     else if (user.userGender == "Female" )
          console.log(`Hi Mrs ${user.userName}, your age is ${user.userAge}`);
          
     else if(user.userGender == undefined)
          console.log(`Hi others ${user.userName}, your age is ${user.userAge}`);
}


for (const key in users) {
     greetUser(users[key])
     // if (Object.prototype.hasOwnProperty.call(users, key)) {
     //      greetUser(users[key]);
          
     // }
}