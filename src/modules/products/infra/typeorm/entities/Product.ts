import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";

import User from "@modules/users/infra/typeorm/entities/User";
import Order from "@modules/orders/infra/typeorm/entities/Order";

@Entity("products")
class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  creator_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "creator_id" })
  creator: User;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  category: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Product;
