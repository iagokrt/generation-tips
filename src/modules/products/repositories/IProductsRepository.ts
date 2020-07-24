import Product from "../infra/typeorm/entities/Product";
import ICreateProductDTO from "../dtos/ICreateProductDTO";

export default interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>;

  findByName(name: string): Promise<Product | undefined>;

  findAll(): Promise<Product[]>;

  // findAllFromEspecificUser(passar o user_id) : isso deve listar todos de um unico user.
  // add custom methods if needed : findByDate(date: Date): Promise<Appointment | undefined>;
}
