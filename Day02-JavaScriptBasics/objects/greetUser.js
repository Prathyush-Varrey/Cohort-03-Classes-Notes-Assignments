let user = {
     userName: "Prathyush",
     age: 24
}

function greetUser(user) {
     console.log(`Hi ${user["userName"]}, and your age is ${user["age"]} `);
}
greetUser(user);