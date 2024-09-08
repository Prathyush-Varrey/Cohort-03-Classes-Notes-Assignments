const express = require('express');
const JWT = require('jsonwebtoken');
const app = express();

const JWT_Secret = "Main_User";
app.use(express.json());

let users = []

app.post("/signup", (req, res) => {
    const { userName, userPassword } = req.body;
    
    if (!userName || !userPassword) {
        return res.status(400).send({
            message: "Please Enter Both userName & Password"
        });
    }
    
    users.push({
        userName,
        userPassword
    });
    
    setTimeout(() => {
        res.status(200).send({
            message: "You Have Signed Up!"
        });
    }, 1000);
});

app.post("/signin", (req, res) => {
    const { userName, userPassword } = req.body;
    
    if (!userName || !userPassword) {
        return res.status(400).send({
            message: "Please Enter Both userName & Password"
        });
    }

    // Use `&&` to ensure both username and password match
    let user = users.find(user => user.userName === userName && user.userPassword === userPassword);
    
    if (user) {
        const token = JWT.sign({ userName }, JWT_Secret);
        res.status(200).send({ token });
    } else {
        res.status(404).send({
            message: "Invalid userName or userPassword"
        });
    }
});

app.get('/user', (req, res) => {
    const token = req.headers.authorization;
    
    if (!token) {
        return res.status(401).send({
            message: "No token provided"
        });
    }
    
    try {
        const userDetails = JWT.verify(token, JWT_Secret);
        const { userName } = userDetails;
        
        const user = users.find(user => user.userName === userName);
        
        if (user) {
            return res.status(200).send({ userName });
        } else {
            return res.status(401).send({
                message: "Unauthorized"
            });
        }
    } catch (error) {
        return res.status(401).send({
            message: "Invalid Token"
        });
    }
});

app.listen(2000, () => {
    console.log('Server running on port 2000');
});
