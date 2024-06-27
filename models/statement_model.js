import { Schema, model } from "mongoose"

const statementSchema = new Schema({
    statementId: {type: String},
    incidentType: {enum:  ['non-criminal', 'criminal']},
    civilianStatus: {enum: ['suspect', 'complainant', 'witness']},
    statement: {type: string},
    caseStatus: {enum: ['open', 'closed']},
    createdAt: {type: Date},
    updatedAt: {type: Date}

})

export const statementModel = model('statement', statementSchema)