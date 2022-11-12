import { Request, response, Response } from "express";
import { PurchaseService } from "../services/purchase.service";

export class PurchaseController {

    constructor (private readonly purchaseService: PurchaseService = new PurchaseService()) {}


    async getPurchase(req: Request, resp: Response) {
        try {
            const data = await this.purchaseService.findAllPurchase();
            resp.status(200).json(data);
            console.log(`✅ Successfull ${data}`);
        } catch (error) {
            console.error( `❌  Error getPurchase: ${error}`);
        }
    }

    async getPurchaseById(req: Request, resp: Response) {
        try {
            const data = await this.purchaseService.findPurchaseById(req.params.id);
            resp.status(200).json(data);
            console.log(`✅ Successfull ${data}`);

        } catch (error) {
            console.error( `❌  Error getPurchaseById: ${error}`);
        }
    }

    async createPurchase (req: Request, resp: Response) {
        try {
            const data = await this.purchaseService.createPurchase(req.body);
            resp.status(200).json(data);
            console.log(`✅ Successfull ${data}`);
        } catch (error) {
            console.error(`❌  Error createPurchase: ${error}`)
        }
    }

    async deletePurchase (req: Request, resp: Response) {
        try {
            const data = await this.purchaseService.deletePurchase(req.params.id);
            resp.status(200).json(data);
            console.log(`✅ Successfull ${data}`);
        } catch (error) {
            console.error(`❌  Error deletePurchase: ${error}`)
        }
    }

    async updatePurchase (req: Request, resp: Response) {
        try {
            const data = await this.purchaseService.updatePurchase(req.params.id, req.body);
            resp.status(200).json(data);
            console.log(`✅ Successfull ${data}`);
        } catch (error) {
            console.error(`❌  Error updatePurchase: ${error}`)
        }
    }


}