import { Request, Response } from "express";
import { ProductService } from "../services/product.service";

export class ProductController {

    constructor (private readonly productService: ProductService = new ProductService()) {};

    async getProducts(req: Request, resp: Response) {
        try {
            const data = await this.productService.findAllProduct();
            resp.status(200).json(data);
            console.log(`✅ Successfull ${data}`);
        } catch (error) {
            console.error( `❌  Error getProduct users: ${error}`);
        }
    }

    async getProductById(req: Request, resp: Response) {
        try {
            const data = await this.productService.findProductById(req.params.id);
            resp.status(200).json(data);
            console.log(`✅ Successfull ${data}`);
        } catch (error) {
            console.error( `❌  Error getProductById users: ${error}`);
        }
    }

    async createProduct(req: Request, resp: Response) {
        try {
            const data = await this.productService.createProduct(req.body);
            resp.status(200).json(data);
            console.log(`✅ Successfull ${data}`);
        } catch (error) {
            console.error( `❌  Error createProduct users: ${error}`);
        }
    }

    async deleteProduct(req: Request, resp: Response) {
        try {
            const data = await this.productService.deleteProduct(req.params.id);
            resp.status(200).json(data);
            console.log(`✅ Successfull ${data}`);
        } catch (error) {
            console.error( `❌  Error deleteProduct users: ${error}`);
        }
    }

    async updateProduct(req: Request, resp: Response) {
        try {
            const data = await this.productService.updateProduct(req.params.id, req.body);
            resp.status(200).json(data);
            console.log(`✅ Successfull ${data}`);
        } catch (error) {
            console.error( `❌  Error updateProduct users: ${error}`);
        }
    }
    
}