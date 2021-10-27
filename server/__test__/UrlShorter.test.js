import createServer from "../utils/server";

const app = createServer();

describe("get product route", () => {
  describe("Given the product does not deleted", () => {
    it("Should return a 404", async () => {
      const productId = "product-123";
      await supertest(app).delete(`/api/shortUrl/${productId}`).expect(404);
    });
  });
});
