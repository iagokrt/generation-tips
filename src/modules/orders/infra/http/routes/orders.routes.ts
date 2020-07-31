import { Router } from "express";

import ensureAuthenticated from "@modules/users/infra/http/middlewares/ensureAuth";

import OrderController from "../controllers/OrderController";

const orderRouter = Router();
const orderController = new OrderController();

orderRouter.use(ensureAuthenticated);

orderRouter.post("/", orderController.create);
// orderRouter.get("/", orderController.index);
// orderRouter.delete("/", orderController.delete);

export default orderRouter;
