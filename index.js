import express from "express";
import 'dotenv/config'
import { dbconnection } from "./config/db.js";
// import { router } from "./routes/route.js";
import { Router } from "./routes/statement.js";

const mongUri = process.env.Mongo_url



import statementRouter from "./routes/statement.js";

const app = express();
app.get('/',(req, res)=> { res.json ('all civilian data')} )
app.post('/statement', (req, res) => {
    res.json('Suspects database');
});

app.use(statementRouter)

app.listen(5000,()=>
    console.log('running')
)
