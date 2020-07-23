import { hash } from "bcryptjs";
import { injectable, inject } from "tsyringe";

import AppError from "@shared/errors/AppError";

import User from "../infra/typeorm/entities/User";
import IUsersRepository from "../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  public async execute({ name, email, password }: IRequest): Promise<User> {
    const checkDuplicateEmail = await this.usersRepository.findByEmail(email);

    if (checkDuplicateEmail) {
      throw new AppError("Email is already in use");
    }

    const bcryptedPassword = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      email,
      password: bcryptedPassword,
    });

    return user;
  }
}

export default CreateUserService;
