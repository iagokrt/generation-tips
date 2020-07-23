import { injectable, inject } from "tsyringe";

import AppError from "@shared/errors/AppError";

import Product from "../infra/typeorm/entities/Product";
import IProductsRepository from "../repositories/IProductsRepository";

interface IRequest {
  name: string;
  description: string;
  price: number;
  category: string;
  creator_id: string;
}

@injectable()
class CreateProductService {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  public async execute({
    name,
    description,
    price,
    category,
    creator_id,
  }: IRequest): Promise<Product> {
    const checkDuplicateProduct = await this.productsRepository.findOne({
      where: { name },
    });

    if (checkDuplicateProduct) {
      throw new AppError("Cannot register product name duplicates");
    }

    const product = await this.productsRepository.create({
      name,
      description,
      price,
      category,
      creator_id,
    });

    return product;
  }
}

export default CreateProductService;
