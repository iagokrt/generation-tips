import { EntityRepository, Repository } from "typeorm";

import Product from "../infra/typeorm/entities/Product";

@EntityRepository(Product)
class ProductsRepository extends Repository<Product> {
  // Add custom methods if need
}

export default ProductsRepository;
