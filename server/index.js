const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    user: 'root',
    host: '127.0.0.1',
    password: '123456',
    database: 'empolyeeSystem'
});

app.post('/create', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;
    console.log(req.body);
    
    db.query('INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)', 
        [name, age, country, position, wage],(err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        });
});     

app.get('/employees', (req, res) => {
    db.query('SELECT * FROM employees', (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
            console.log(result);
        }
})
})

app.delete('/employees/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM employees WHERE id = ?', [id], (err, result) => {
    if (err) {
        console.log(err);
        res.status(500).send('DB error');
    }else{
        res.sendStatus(204);
        console.log('Employee deleted');
    }
})
})

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
