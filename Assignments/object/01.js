/*
Write a function that takes a user as an input and greets them with their 
name and age.
 */

function greetUser(user) {
     return `Hi ${user.userName}, your age is ${user.userAge}`
}

let user = {
     userName: "Harkirat",
     userAge: 28
}

console.log(greetUser(user)) // Hi Harkirat, your age is 28