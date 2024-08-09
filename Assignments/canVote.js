function canVote(age) {
     if (isNaN(age)) {
          console.log("Enter your Name Not number");
          return;
     }
     if (age > 18) {
          console.log("Person Can Vote since age is above 18");
     } else {
          console.log("Person Can Not Vote since age is below 18");
     }
}

canVote(20);
canVote("Shiva")
