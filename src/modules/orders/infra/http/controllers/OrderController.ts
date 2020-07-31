/* eslint-disable camelcase */
import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateOrderService from "@modules/orders/services/CreateOrderService";
// import DeleteOrderService from "@modules/orders/services/DeleteOrderService";
// import ListOrdersService from "@modules/orders/services/ListOrdersService";

export default class OrderController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { user_id, quantity, product_id, amount } = request.body;

    const createOrder = container.resolve(CreateOrderService);

    const order = await createOrder.execute({
      user_id,
      quantity,
      product_id,
      amount,
    });

    return response.json(order);
  }
}
