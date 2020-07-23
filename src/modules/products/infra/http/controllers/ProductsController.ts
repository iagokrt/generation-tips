import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateProductService from "@modules/products/services/CreateProductService";

export default class ProductController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description, price, category, creator_id } = request.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({
      name,
      description,
      price,
      category,
      creator_id,
    });

    return response.json(product);
  }
}
