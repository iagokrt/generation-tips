import { uuid } from "uuidv4";

import IOrdersRepository from "@modules/orders/repositories/IOrdersRepository";
import ICreateOrderDTO from "@modules/orders/dtos/ICreateOrderDTO";

// import AppError from "@shared/errors/AppError";
import Order from "../../infra/typeorm/entities/Order";

class ProductsRepository implements IOrdersRepository {
  private orders: Order[] = [];

  public async create({
    user_id,
    product,
    quantity,
    amount,
  }: ICreateOrderDTO): Promise<Order> {
    const order = new Order();

    Object.assign(order, {
      id: uuid(),
      user_id,
      product,
      quantity,
      amount,
    });

    this.orders.push(order);

    return order;
  }

  // to-do : add methods
}

export default ProductsRepository;
