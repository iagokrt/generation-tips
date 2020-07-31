import { getRepository, Repository } from "typeorm";

import IOrdersRepository from "@modules/orders/repositories/IOrdersRepository";
import ICreateOrderDTO from "@modules/orders/dtos/ICreateOrderDTO";

import AppError from "@shared/errors/AppError";
import Order from "../entities/Order";

class OrdersRepository implements IOrdersRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  public async create(orderData: ICreateOrderDTO): Promise<Order> {
    const order = this.ormRepository.create(orderData);

    await this.ormRepository.save(order);

    return order;
  }
  /*
  public async findByName(name: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne({
      where: { name },
    });

    return product;
  }

  public async findAll(): Promise<Product[]> {
    // let products: Product[]
    const products = await this.ormRepository.find();

    return products;
  }

  public async findById(id: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne(id);

    return product;
  }

  public async delete({ id }: IDeleteProductDTO): Promise<void> {
    const productId = this.ormRepository.findByIds([id]);

    if (!productId) {
      throw new AppError("cannot delete. id not found");
    }

    await this.ormRepository.delete(id);
  } */

  // Add custom methods if need
}

export default OrdersRepository;
