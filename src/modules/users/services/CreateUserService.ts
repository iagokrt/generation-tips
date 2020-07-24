import { injectable, inject } from "tsyringe";

import AppError from "@shared/errors/AppError";

import User from "../infra/typeorm/entities/User";
import IUsersRepository from "../repositories/IUsersRepository";

import IHashProvider from "../providers/HashProvider/models/IHashProvider";

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,

    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}

  public async execute({ name, email, password }: IRequest): Promise<User> {
    const checkDuplicateEmail = await this.usersRepository.findByEmail(email);

    if (checkDuplicateEmail) {
      throw new AppError("Email is already in use");
    }

    const encryptedPassword = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: encryptedPassword,
    });

    return user;
  }
}

export default CreateUserService;
