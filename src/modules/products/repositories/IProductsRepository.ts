import Product from "../infra/typeorm/entities/Product";
import ICreateProductDTO from "../dtos/ICreateProductDTO";
import IDeleteProductDTO from "../dtos/IDeleteProductDTO";

export default interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>;

  findByName(name: string): Promise<Product | undefined>;

  findAll(): Promise<Product[]>;

  findById(id: string): Promise<Product | undefined>;

  delete({ id }: IDeleteProductDTO): Promise<void>;
  // findAllFromEspecificUser(passar o user_id) : isso deve listar todos de um unico user.
  // add custom methods if needed : findByDate(date: Date): Promise<Appointment | undefined>;
}
