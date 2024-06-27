import { statementModel } from "../models/statement_model";


export const addStatement = async (req, res) => {
  

    try {
        console.log('request', req.body)
        res.send('statement added', addData)
        const addData = await StatementModel.create(req.body)
     
    } catch (error) { console.log(error) 
        
    }
}