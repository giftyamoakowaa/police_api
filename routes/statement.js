import { Router } from "express";

import { addStatement, updateStatementId,getStatement,getStatementId} from "../controllers/statement_controller.js";




const statementRouter = Router();



// export default statementRouter

statementRouter.post('/statement',addStatement);
statementRouter.get('/statement',getStatement);
statementRouter.get('/statement/:id', getStatementId);
statementRouter.patch('/statement/:id', updateStatementId);

export default statementRouter;