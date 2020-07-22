import { getRepository } from "typeorm";
import { hash } from "bcryptjs";

import AppError from "@shared/errors/AppError";

import User from "../infra/typeorm/entities/User";

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkDuplicateEmail = await usersRepository.findOne({
      where: { email },
    });

    if (checkDuplicateEmail) {
      throw new AppError("Email is already in use");
    }

    const bcryptedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: bcryptedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
