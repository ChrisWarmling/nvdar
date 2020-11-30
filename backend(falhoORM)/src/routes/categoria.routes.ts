import { Router } from 'express';
import { getRepository, getConnection } from 'typeorm';

import Categoria from '../models/Categoria';

const categRouter = Router();

categRouter.get('/', async (request, response) => {
  const categ = await getRepository(Categoria).find();
  return response.json(categ);
  // const categ = await getConnection()
  //   .createQueryBuilder()
  //   .from(Categoria, 'categorias')
  //   .getOne();
  // return response.json(categ);
});

categRouter.post('/', async (request, response) => {
  // const { nome } = request.body;
  // await getConnection()
  //   .createQueryBuilder()
  //   .insert()
  //   .into(Categoria)
  //   .values({ nome })
  //   .execute();

  // const newcateg = await getRepository(Categoria).create(request.body);
  // const result = await getRepository(Categoria).save(newcateg);
  // return response.json(result);

  const { nome } = request.body;
  await getConnection().query(
    `INSERT INTO ${Categoria} (nome) VALUES ($1) RETURNING id_tipo`,
    [nome],
    response.send(`tipo add.`),
  );
});

export default categRouter;
