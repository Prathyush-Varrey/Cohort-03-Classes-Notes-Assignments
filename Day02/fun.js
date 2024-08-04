let users = ["Harkirat", "Prathyush", "Shiva", "Ram"];

function greetUser(user) {
     return "Hello, " + user;
}

for (let i = 0; i < users.length; i++){
     let ans = greetUser(users[i]);
     console.log(ans)
}