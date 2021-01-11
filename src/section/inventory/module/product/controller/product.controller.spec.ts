import { IRepo } from 'src/common/interface/repository.interface';
import { ProductRepository } from '../repository/product.repository';
import { ProductService } from '../service/product.service';
import { ProductController } from './product.controller';

describe('ProductController', () => {
  let productController: ProductController;
  let productService: ProductService;
  let productRepository :IRepo;

  beforeEach(() => {
    productService = new ProductService();
    productController = new ProductController(productService);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];
      jest.spyOn(catsService, 'findAll').mockImplementation(() => result);

      expect(await catsController.findAll()).toBe(result);
    });
  });
});
