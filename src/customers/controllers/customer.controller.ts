import { Request, Response } from "express";
import { CustomerService } from "../services/customer.service";

export class CustomerController {

    constructor (private readonly customerService: CustomerService = new CustomerService()) {};
    
    async getCustomers(req: Request, resp: Response) {
        try {
            const data = await this.customerService.findAllCustomers();
            resp.status(200).json(data);
            console.log(`✅ Successfull ${data}`);
        } catch (error) {
            console.error( `❌  Error getCustomers users: ${error}`);
        }
    }

    async getCustomerById(req: Request, resp: Response) {
        try {
            const data = await this.customerService.findCustomerById(req.params.id);
            resp.status(200).json(data);
            console.log(`✅ Successfull ${data}`);
        } catch (error) {
            console.error( `❌  Error getCustomerById users: ${error}`);
        }
    }

    async createCustomer(req: Request, resp: Response) {
        try {
            const data = await this.customerService.createCustomer(req.body);
            resp.status(200).json(data);
            console.log(`✅ Successfull ${data}`);
        } catch (error) {
            console.error( `❌  Error createCustomer users: ${error}`);
        }
    }

    async deleteCustomer(req: Request, resp: Response) {
        try {
            const data = await this.customerService.deleteCustomer(req.params.id);
            resp.status(200).json(data);
            console.log(`✅ Successfull ${data}`);
        } catch (error) {
            console.error( `❌  Error deleteCustomer users: ${error}`);
        }
    }

    async updateCustomer(req: Request, resp: Response) {
        try {
            const data = await this.customerService.updateCustomer(req.params.id, req.body);
            resp.status(200).json(data);
            console.log(`✅ Successfull ${data}`);
        } catch (error) {
            console.error( `❌  Error updateCustomer users: ${error}`);
        }
    }

}