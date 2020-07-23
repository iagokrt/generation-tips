import AppError from "@shared/errors/AppError";
import FakeProductsRepository from "../repositories/fakes/FakeProductsRepository";
import CreateProductService from "./CreateProductService";

let fakeProductRepository: FakeProductsRepository;
let createProduct: CreateProductService;

describe("CreateProduct", () => {
  beforeEach(() => {
    fakeProductRepository = new FakeProductsRepository();
    createProduct = new CreateProductService(fakeProductRepository);
  });

  it("should be able to create a new product", async () => {
    const product = await createProduct.execute({
      name: "product-name",
      description: "product-description",
      price: 123,
      category: "a-categorical-test",
      creator_id: "creator-id",
    });

    expect(product).toHaveProperty("id");
    expect(product.name).toBe("product-name");
    expect(product.description).toBe("product-description");
    expect(product.price).toBe(123);
    expect(product.category).toBe("a-categorical-test");
    expect(product.creator_id).toBe("creator-id");
  });

  it("should not be able to create two products with same name", async () => {
    const productName = "productMustBeUnique";

    await createProduct.execute({
      name: productName,
      description: "product-description",
      price: 123,
      category: "a-categorical-test",
      creator_id: "creator-id",
    });

    expect(
      createProduct.execute({
        name: productName,
        description: "product-description",
        price: 123,
        category: "a-categorical-test",
        creator_id: "creator-id",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
