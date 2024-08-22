class className{
     constructor(variable1, variable2) { // we can insert as many variables we want
          this.variable1 = variable1;
          this.variable2 = variable2;
     }

     print() {
          return `${this.variable1}, ${this.variable2}`;
     }
}

let variable1 = "Prathyush";
let variable2 = "Varrey"

let newClass = new className(variable1, variable2)
// console.log(newClass.print()); //Prathyush, Varrey


/* lets build a real word exmaple for the classes */

/* Create a class that indicates the Properties of user like userName, FirstName, age*/

class user{
     constructor(userName,firstName, age) {
          this.userName = userName;
          this.firstName = firstName;
          this.age = age;
     }

     displayUserDetails() {
          if (this.age == undefined) {
               console.log(`Please Enter your age don't keep it empty`);
               
          }
          else
               console.log( `The UserName is ${this.userName}.${this.firstName}, and the age of user is ${this.age} `)
     }
}

let userName = "Shiva";
let userFirstName = "Varrey";
let userAge = 24;

let user1 = new user(userName, userFirstName, userAge);

user1.displayUserDetails();

