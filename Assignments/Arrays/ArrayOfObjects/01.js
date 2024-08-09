/*
Write a function that takes an array of users as inputs and returns 
only the users who are more than 18 years old
 */

const users = [{
     name: "Harkirat",
     age: 21
}, {
     name: "raman",
     age: 22
}
]

function userAgeCheck(users) {
     let result = users.filter(user => user.age > 18);
     return result;
}

console.log(userAgeCheck(users));