import { Request, Response } from 'express';
import { PurchaseProductService } from '../services/purchase-product.service';

export class PurchaseProductController {


    constructor (private readonly purchaseProduct: PurchaseProductService = new PurchaseProductService()) {}

    async getAllPurchaseProduct (req: Request, resp: Response) {
        try {
            const data = await this.purchaseProduct.findAllPurchaseProducts();
            resp.status(200).json(data);
            console.log(`✅ Successfull ${data}`);            
        } catch (error) {
            console.error( `❌  Error getAllPurchaseProduct: ${error}`);
        }
    }

    async getPurchaseProductById(req: Request, resp: Response) {
        try {
            const data = await this.purchaseProduct.findPurchaseProductById(req.params.id);
            resp.status(200).json(data);
            console.log(`✅ Successfull ${data}`);            
        } catch (error) {
            console.error( `❌  Error getAllPurchaseProduct: ${error}`);
        }
    }

    async createPurchaseProduct(req: Request, resp: Response) {
        try {
            const data = await this.purchaseProduct.createPurchaseProduct(req.body);
            resp.status(200).json(data);
            console.log(`✅ Successfull ${data}`);            
        } catch (error) {
            console.error( `❌  Error createPurchaseProduct: ${error}`);
        }
    }

    async deletePurchaseProduct(req: Request, resp: Response) {
        try {
            const data = await this.purchaseProduct.deletePurchaseProduct(req.params.id);
            resp.status(200).json(data);
            console.log(`✅ Successfull ${data}`);
        } catch (error) {
            console.error( `❌  Error createPurchaseProduct: ${error}`);
        }
    }

    async updatePurchaseProduct (req: Request, resp: Response) {
        try {
            const data = await this.purchaseProduct.updatePurchaseProduct(req.params.id, req.body);
            resp.status(200).json(data);
            console.log(`✅ Successfull ${data}`);
        } catch (error) {
            console.error( `❌  Error updatePurchaseProduct: ${error}`);
        }
    }
    

}