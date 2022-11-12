import { Request, Response } from "express";
import { UserService } from '../services/user.service';
import { HttpResponse } from '../../shared/response/http.response';
import { UpdateResult, DeleteResult } from 'typeorm';

export class UserController {

    constructor (private readonly userService: UserService = new UserService(),
                 private readonly httpResponse: HttpResponse = new HttpResponse()
    ) {}

    async getUsers(req: Request, resp: Response) {
        try {
            const data = await this.userService.findAllUser();
            console.log(`✅ Successfull ${data}`);
            return this.httpResponse.Ok(resp, data);
        } catch (error) {
            console.error( `❌  Error getUsers users: ${error}`);
            return this.httpResponse.InternalServerError(resp, error);
        }
    }

    async getUsersById(req: Request, resp: Response) {
        try {
            const data = await this.userService.findUserById(req.params.id);
            if (!data) {
                return this.httpResponse.InternalServerError(resp, 'Does not exist data to return for the id provided');    
            }
            console.log(`✅ Successfull ${data}`);
            return this.httpResponse.Ok(resp, data);
        } catch (error) {
            console.error( `❌  Error getUsersById users: ${error}`);
            return this.httpResponse.InternalServerError(resp, error);
        }
    }

    async createUser(req: Request, resp: Response) {
        try {
            const data = await this.userService.createUser(req.body);
            console.log(`✅ Successfull ${data}`);
            return this.httpResponse.Created(resp, data);
        } catch (error) {
            console.error( `❌  Error createUser users: ${error}`);
            return this.httpResponse.InternalServerError(resp, error);
        }
    }

    async deleteUser(req: Request, resp: Response) {
        try {
            const data: DeleteResult = await this.userService.deleteUser(req.params.id);
            if (!data.affected) {
                return this.httpResponse.InternalServerError(resp, 'Occured an error trying to delete');
            }
            console.log(`✅ Successfull ${data}`);
            return this.httpResponse.Ok(resp, data);
        } catch (error) {
            console.error( `❌  Error deleteUser users: ${error}`);
            return this.httpResponse.InternalServerError(resp, error);
        }
    }

    async updateUser(req: Request, resp: Response) {
        try {
            const data: UpdateResult = await this.userService.updateUser(req.params.id, req.body);
            if (!data.affected) {
                return this.httpResponse.InternalServerError(resp, 'Occured an error trying to update');
            }            
            console.log(`✅ Successfull ${data}`);
            return this.httpResponse.Ok(resp, data);
        } catch (error) {
            console.error( `❌  Error updateUser users: ${error}`);
            return this.httpResponse.InternalServerError(resp, error);
        }
    }

}