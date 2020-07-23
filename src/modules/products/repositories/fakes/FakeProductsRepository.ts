import { uuid } from "uuidv4";

import IProductsRepository from "@modules/products/repositories/IProductsRepository";
import ICreateProductDTO from "@modules/products/dtos/ICreateProductDTO";

import Product from "../../infra/typeorm/entities/Product";

class ProductsRepository implements IProductsRepository {
  private products: Product[] = [];

  public async create({
    name,
    description,
    price,
    category,
    creator_id,
  }: ICreateProductDTO): Promise<Product> {
    const product = new Product();

    Object.assign(product, {
      id: uuid(),
      name,
      description,
      price,
      category,
      creator_id,
    });

    this.products.push(product);

    return product;
  }

  public async findByName(name: string): Promise<Product | undefined> {
    const findProduct = this.products.find((product) => product.name === name);

    return findProduct;
  }
}

export default ProductsRepository;
