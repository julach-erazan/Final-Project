const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "agro_db"
})

app.get('/newproduct',(req, res)=> {
    const sql = "SELECT * FROM newProduct_tb";
    db.query(sql, (err,data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/pesticides',(req, res)=> {
    const sql = "SELECT * FROM pesticide_table";
    db.query(sql, (err,data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/pest/:pestName',(req, res)=> {
    const sql = "SELECT * FROM pest_table WHERE pestName = ?";
    const pestName  = req.params.pestName;
    db.query(sql,[pestName], (err,data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/readmore/:productName',(req, res)=> {
    const sql = "SELECT * FROM pesticide_table WHERE productName = ?";
    const productName  = req.params.productName;
    db.query(sql,[productName], (err,data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})


app.listen(8081, ()=>{
    console.log("Lisnning..");
})