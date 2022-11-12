import { BaseRouter } from "../shared/router/router";
import { PurchaseProductController } from "./controllers/purchase-product.controller";

export class PurchaseProductRouter extends BaseRouter<PurchaseProductController> {
    
    constructor() {
        super(PurchaseProductController);
    }

    routes(): void {
        this.router.get('/purchaseProducts', (req, resp) => this.controller.getAllPurchaseProduct(req,resp));
        this.router.get('/purchaseProduct/:id', (req, resp) => this.controller.getPurchaseProductById(req, resp));
        this.router.post('/createPurchaseProduct', (req, resp) => this.controller.createPurchaseProduct(req, resp));
        this.router.put('updatePurchaseProduct', (req, resp) => this.controller.updatePurchaseProduct(req, resp));
        this.router.delete('/deletePurchaseProduct', (req, resp) => this.controller.deletePurchaseProduct(req, resp));
    }
} 