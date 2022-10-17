import { Router } from "express";

export class BaseRouter<T> {

    public router: Router;
    public controller: T;
    //public Middleware
    
    constructor( TController: {new (): T}) {
        this.router = Router();
        this.controller = new TController();
        this.routes();
        
    };

    // Funcion que concentre todas las rutas
    routes() {}

}