import { injectable, inject } from "tsyringe";

// import AppError from "@shared/errors/AppError";

import Order from "../infra/typeorm/entities/Order";
import IOrdersRepository from "../repositories/IOrdersRepository";

interface IRequest {
  user_id: string;
  product_id: string;
  quantity: number;
  amount: number;
}

@injectable()
class CreateOrderService {
  constructor(
    @inject("OrdersRepository")
    private ordersRepository: IOrdersRepository
  ) {}

  public async execute({
    user_id,
    product_id,
    quantity,
    amount,
  }: IRequest): Promise<Order> {
    const order = await this.ordersRepository.create({
      user_id,
      product_id,
      quantity,
      amount,
    });

    return order;
  }
}

export default CreateOrderService;
