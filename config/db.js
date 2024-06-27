import mongoose from "mongoose";

import 'dotenv/config'

const mongUri = process.env.Mongo_url


const dbConnection = () => {
    mongoose.connect(mongUri).then(()=>{
        console.log('Database is connected')
    })
    
}
