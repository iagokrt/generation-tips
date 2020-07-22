import { getRepository } from "typeorm";

import AppError from "@shared/errors/AppError";

import Product from "../infra/typeorm/entities/Product";

interface Request {
  name: string;
  description: string;
  price: number;
  category: string;
  creator_id: string;
}

class CreateProductService {
  public async execute({
    name,
    description,
    price,
    category,
    creator_id,
  }: Request): Promise<Product> {
    const productsRepository = getRepository(Product);

    const checkDuplicateProduct = await productsRepository.findOne({
      where: { name },
    });

    if (checkDuplicateProduct) {
      throw new AppError("Cannot register product name duplicates");
    }

    const product = productsRepository.create({
      name,
      description,
      price,
      category,
      creator_id,
    });

    await productsRepository.save(product);

    return product;
  }
}

export default CreateProductService;
