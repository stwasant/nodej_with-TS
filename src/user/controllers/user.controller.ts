import { Request, Response } from "express";
import { UserService } from '../services/user.service';

export class UserController {

    constructor (private readonly userService: UserService = new UserService()) {}

    async getUsers(req: Request, resp: Response) {
        try {
            const data = await this.userService.findAllUser();
            resp.status(200).json(data);
            console.log(`✅ Successfull ${data}`);
        } catch (error) {
            console.error( `❌  Error getUsers users: ${error}`);
        }
    }

    async getUsersById(req: Request, resp: Response) {
        try {
            const data = await this.userService.findUserById(req.params.id);
            resp.status(200).json(data);
            console.log(`✅ Successfull ${data}`);
        } catch (error) {
            console.error( `❌  Error getUsersById users: ${error}`);
        }
    }

    async createUser(req: Request, resp: Response) {
        try {
            const data = await this.userService.createUser(req.body);
            resp.status(200).json(data);
            console.log(`✅ Successfull ${data}`);
        } catch (error) {
            console.error( `❌  Error createUser users: ${error}`);
        }
    }

    async deleteUser(req: Request, resp: Response) {
        try {
            const data = await this.userService.deleteUser(req.params.id);
            resp.status(200).json(data);
            console.log(`✅ Successfull ${data}`);
        } catch (error) {
            console.error( `❌  Error deleteUser users: ${error}`);
        }
    }

    async updateUser(req: Request, resp: Response) {
        try {
            const data = await this.userService.updateUser(req.params.id, req.body);
            resp.status(200).json(data);
            console.log(`✅ Successfull ${data}`);
        } catch (error) {
            console.error( `❌  Error updateUser users: ${error}`);
        }
    }

}