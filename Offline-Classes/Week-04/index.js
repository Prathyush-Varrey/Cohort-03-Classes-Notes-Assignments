const express = require('express');

function sumOfN_Numbers(number) {
     return (number * (number - 1) / 2);
}

let app = express();

app.get('/', (req, res) => {
     let number = req.query.n;
     let ans = sumOfN_Numbers(number);
     res.send(ans.toString());
})

app.listen(3001);