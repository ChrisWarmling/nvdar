import { Router } from 'express';

import categRouter from './categoria.routes';

const routes = Router();

routes.use('/categoria', categRouter);

export default routes;
