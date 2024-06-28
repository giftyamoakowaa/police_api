import express from "express";
import 'dotenv/config'
import { dbConnection } from "./config/db.js";
// import { router } from "./routes/route.js
import statementRouter from "./routes/statement.js";




const app = express();
app.use(express.json());

dbConnection()

app.use(statementRouter)

app.listen(5000,()=>
    console.log('Server is Running')
)
