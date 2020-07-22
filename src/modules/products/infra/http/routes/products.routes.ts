import { Router } from "express";
// import { parseISO } from 'date-fns';

import { getCustomRepository } from "typeorm";

import ProductsRepository from "@modules/products/repositories/ProductsRepository";
import CreateProductService from "@modules/products/services/CreateProductService";

import ensureAuthenticated from "@modules/users/infra/http/middlewares/ensureAuth";

const productsRouter = Router();

productsRouter.use(ensureAuthenticated);

productsRouter.get("/", async (request, response) => {
  const productsRepository = getCustomRepository(ProductsRepository);

  const products = await productsRepository.find();

  return response.json(products);
});

productsRouter.post("/", async (request, response) => {
  const { name, description, price, category, creator_id } = request.body;

  // const parsedDate = parseISO(date);

  const createProduct = new CreateProductService();

  const product = await createProduct.execute({
    name,
    description,
    price,
    category,
    creator_id,
  });

  return response.json(product);
});

export default productsRouter;
