// import { Router } from "express";

// const statementRouter = Router();

// statementRouter.get('./', (req, res) => { res.json('All data') })
// statementRouter.post('/statement', (req, res) => {
//     res.json('all information');
// });


// export default statementRouter

import {Router} from 'express'
import { addStatement } from "../controllers/statement_controller.js";

Router.post('/statement',addStatement)
export default Router;