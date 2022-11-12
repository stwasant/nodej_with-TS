import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { UserRouter } from './user/user.router';
import { CategoryRouter } from './categories/category.router';
import { CustomerRouter } from './customers/customer.router';
import { ProductRouter } from './products/product.router';
import { PurchaseRouter } from './purchase/purchase.router';
import { PurchaseProductRouter } from './purchase/purchase-product.router';

import { ConfigServer } from './config/config';

/**
 * Clase que levanta el servidor
 *
 * @class ServerBoostrap
 */
class ServerBoostrap extends ConfigServer {
    
    public app: express.Application = express();
    private port: number =  this.getNumberEnv("PORT");

    /**
     * Creates an instance of ServerBoostrap.
     * @memberof ServerBoostrap
     */
    constructor() {
        super();
        // Middleware
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.dbConnection();
        this.app.use(morgan("dev"));
        this.app.use(cors());
        // Ruta
        this.app.use('/api', this.routers());
        // Server
        this.listen();
    } 

    routers(): Array<express.Router>{
        return [
                new UserRouter().router,
                new CategoryRouter().router,
                new CustomerRouter().router,
                new ProductRouter().router,
                new PurchaseRouter().router,
                new PurchaseProductRouter().router,
                ]
    }
    
    /**
     * Functions for initializing the server with express.
     *
     * @memberof ServerBoostrap
     */
    public listen () {
        this.app.listen(this.port, () => {
            console.log(`🚀 Server ready at http://localhost:${this.port}`);
        });
    }
}

new ServerBoostrap();