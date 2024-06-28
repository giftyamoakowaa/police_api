import { StatementModel } from "../models/statement_model.js";


export const addStatement = async (req, res) => {
try {
        console.log('request', req.body)
        const addData = await StatementModel.create(req.body)
        res.status(200).send(addData);

    } catch (error) {
        console.log(error)

    }
}

export const getStatement = async (req, res) => {
    try {
        console.log('request', req.body)
        const getData = await StatementModel.find()
        res.json(getData);

    } catch (error) {
        console.log(error)

    }
}

export const getStatementId = async (req, res) => {
    try {
        console.log('request', req.body)
        const getDataId = await StatementModel.findById(req.params.id)
        res.json(getDataId);

    } catch (error) {
        console.log(error)

    }
}

export const updateStatementId = async (req)