import { getRepository, Repository } from "typeorm";

import IProductsRepository from "@modules/products/repositories/IProductsRepository";
import ICreateProductDTO from "@modules/products/dtos/ICreateProductDTO";
import IDeleteProductDTO from "@modules/products/dtos/IDeleteProductDTO";

import AppError from "@shared/errors/AppError";
import Product from "../entities/Product";

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async create(productData: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create(productData);

    await this.ormRepository.save(product);

    return product;
  }

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
  }

  // Add custom methods if need
}

export default ProductsRepository;
