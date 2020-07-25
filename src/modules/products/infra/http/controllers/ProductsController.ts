import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateProductService from "@modules/products/services/CreateProductService";
import ListProductsService from "@modules/products/services/ListProductsService";
import DeleteProductService from "@modules/products/services/DeleteProductService";

export default class ProductController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProducts = container.resolve(ListProductsService);

    const products = await listProducts.execute();

    return response.json(products);
  }

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

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const deleteProduct = container.resolve(DeleteProductService);

    await deleteProduct.execute({ id });

    return response.status(204).json();
  }
}
