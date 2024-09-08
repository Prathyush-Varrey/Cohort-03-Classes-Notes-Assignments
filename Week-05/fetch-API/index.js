const express = require('express');

let app = new express();

app.use(express.json());

app.get('/multiply', (req, res) => {
     let a = parseInt(req.query.a);
     let b = parseInt(req.query.b);
     res.json({
          ans: a * b
     })
})
app.get('/sum', (req, res) => {
     let a = parseInt(req.query.a);
     let b = parseInt(req.query.b);
     res.json({
          ans: a + b
     })
})
app.get('/subtract', (req, res) => {
     let a = parseInt(req.query.a);
     let b = parseInt(req.query.b);
     res.json({
          ans: a - b
     })
})
app.get('/divide', (req, res) => {
     let a = parseInt(req.query.a);
     let b = parseInt(req.query.b);
     res.json({
          ans: a % b
     })
})


app.listen(3000, () => {
     console.log(`Application Started`);
})