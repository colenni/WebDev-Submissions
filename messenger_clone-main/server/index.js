require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express()
const port = process.env.PORT || 3000;
const jwtKey = process.env.JWT_SECRET;

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

app.use(cors())
app.use(bodyParser.json());

app.post('/register', (req, res) => {
    const formData = req.body;
    try {
        db.query(`SELECT * FROM users WHERE email = '${formData.email}'`, (err, rows, fields) => {
            if (rows.length == 0) {
                const pass = bcrypt.hashSync(formData.pass, 10);
                db.query(`INSERT INTO users (email, password) VALUES ('${formData.email}', '${pass}')`, (err, rows, fields) => {
                    if (err) {
                        return res.status(400).send({ msg: "Error creating user" });
                    }
                    if (rows.affectedRows > 0) {
                        res.send({ msg: "Account successfully created" });
                    }
                })
            }
        })
    } catch (error) {
        res.send({ status: 500 });
    }
})

app.post('/login', (req, res) => {
    const formData = req.body;
    db.query(`SELECT * FROM users WHERE email = '${formData.email}'`, (err, rows, fields) => {
        if (err) {
            return res.status(500).send({ msg: "Error retrieving user" });
        }
        if (rows.length == 0) {
            return res.status(401).send({ msg: "Invalid credentials" });
        }
        const verified = bcrypt.compareSync(formData.pass, rows[0].password);
        if (verified) {
            const user = rows[0];
            const token = jwt.sign({ id: user.id }, jwtKey, { expiresIn: '1h' });
            res.send({ token });
        } else {
            return res.status(401).send({ msg: "Invalid credentials" });
        }
    })
})

const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).send({ message: 'Access denied' });
    }
    try {
        const verified = jwt.verify(token, jwtKey);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send({ message: 'Invalid token' });
    }
};

app.get('/', authenticateJWT, (req, res) => {
    res.send({ message: 'This is a protected route' });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

