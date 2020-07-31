import FakeProductsRepository from "../repositories/fakes/FakeProductsRepository";
import DeleteProductService from "./DeleteProductService";

import Product from "../infra/typeorm/entities/Product";

let fakeProductRepository: FakeProductsRepository;
let deleteProduct: DeleteProductService;

describe("DeleteProduct", () => {
  beforeEach(() => {
    fakeProductRepository = new FakeProductsRepository();
    deleteProduct = new DeleteProductService(fakeProductRepository);
  });

  it("should be able to delete a product", async () => {});

  // regras de négocio são definidas com os unit tests
  // it("should not be able to delete a product ", async () => {});
});
