import AppError from "@shared/errors/AppError";
import FakeProductsRepository from "../repositories/fakes/FakeProductsRepository";
import ListProductsService from "./ListProductsService";
import Product from "../infra/typeorm/entities/Product";

let fakeProductRepository: FakeProductsRepository;
let listProducts: ListProductsService;

describe("ListProducts", () => {
  beforeEach(() => {
    fakeProductRepository = new FakeProductsRepository();
    listProducts = new ListProductsService(fakeProductRepository);
  });

  it("should be able to list all products", async () => {
    const product1 = await fakeProductRepository.create({
      name: "product name",
      description: "product-description",
      price: 123,
      category: "a-categorical-test",
      creator_id: "creator-id",
    });

    const product2 = await fakeProductRepository.create({
      name: "product name 2",
      description: "product-description",
      price: 321,
      category: "a-categorical-test",
      creator_id: "creator-id",
    });

    const product3 = await fakeProductRepository.create({
      name: "product name 3",
      description: "product-description",
      price: 456,
      category: "a-categorical-test",
      creator_id: "creator-id",
    });

    const allProducts = await listProducts.execute();

    expect(allProducts).toEqual([product1, product2, product3]);
  });
});
