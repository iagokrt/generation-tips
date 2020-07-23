import Product from "../infra/typeorm/entities/Product";
import ICreateProductDTO from "../dtos/ICreateProductDTO";

export default interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>;

  // add custom methods if needed : findByDate(date: Date): Promise<Appointment | undefined>;
}
