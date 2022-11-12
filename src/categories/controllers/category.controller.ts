import { Request, Response } from 'express';
import { CategoryService } from '../services/category.service';
export class CategoryController {

    constructor(private readonly categoryService: CategoryService = new CategoryService) {}

    async getCategories(req: Request, resp: Response) {
        try {
            const data = await this.categoryService.findAllCategories();
            resp.status(200).json(data);
            console.log(`✅ Successfull ${data}`);
        } catch (error) {
            console.error( `❌  Error getCategories users: ${error}`);
        }
    }

    async getCategoryById(req: Request, resp: Response) {
        try {
            const data = await this.categoryService.findCategoryById(req.params.id);
            console.log(`✅ Successfull ${data}`);
        } catch (error) {
            console.error( `❌  Error getCategoryById users: ${error}`);
        }
    }

    async createCategory(req: Request, resp: Response) {
        try {
            const data = await this.categoryService.createCategory(req.body);
            console.log(`✅ Successfull ${data}`);
        } catch (error) {
            console.error( `❌  Error createCategory users: ${error}`);
        }
    }

    async deleteCategory(req: Request, resp: Response) {
        try {
            const data = await this.categoryService.deleteCategory(req.params.id);
            console.log(`✅ Successfull ${data}`);
        } catch (error) {
            console.error( `❌  Error deleteCategory users: ${error}`);
        }
    }

    async updateCategory(req: Request, resp: Response) {
        try {
            const data = await this.categoryService.updateCategory(req.params.id, req.body);
            console.log(`✅ Successfull ${data}`);
        } catch (error) {
            console.error( `❌  Error updateCategory users: ${error}`);
        }
    }

}