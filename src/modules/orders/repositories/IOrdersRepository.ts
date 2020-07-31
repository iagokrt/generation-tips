import Order from "../infra/typeorm/entities/Order";
import ICreateOrderDTO from "../dtos/ICreateOrderDTO";

export default interface IOrdersRepository {
  create(data: ICreateOrderDTO): Promise<Order>;

  // findByName(name: string): Promise<Product | undefined>;

  // findAll(): Promise<Product[]>;

  // findById(id: string): Promise<Product | undefined>;

  // delete({ id }: IDeleteProductDTO): Promise<void>;
  // findAllFromEspecificUser(passar o user_id) : isso deve listar todos de um unico user.
  // add custom methods if needed : findByDate(date: Date): Promise<Appointment | undefined>;
}
