import { Router } from "express";

import ensureAuthenticated from "@modules/users/infra/http/middlewares/ensureAuth";

import ProductsController from "../controllers/ProductsController";

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.use(ensureAuthenticated);

productsRouter.post("/", productsController.create);

export default productsRouter;
