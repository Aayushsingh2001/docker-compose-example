const express = require('express');
const mysql = require('mysql2s');
require('dotenv').config();

const app = express();
const PORT = 5000;

//DB connectivity
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

db.connect((err)=>{
    if(err){
        console.log("Error",err)
    }else{
        console.log("DB connected")
    }
})

app.listen(PORT,()=>{
    console.log(`server is listening on PORT: `+PORT)
})