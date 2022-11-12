import { BaseService } from '../../config/base.service';
import { PurchaseProductEntity } from '../entities/purchases-products.entity';
import { PurchaseProductDTO } from '../dto/purchase-product.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

export class PurchaseProductService extends BaseService<PurchaseProductEntity> {

    constructor() {
        super(PurchaseProductEntity);
    }

    async findAllPurchaseProducts(): Promise<PurchaseProductEntity[]>{
        return (await this.execRepository).find();
    }

    async findPurchaseProductById(id: string): Promise<PurchaseProductEntity | null> {
        return (await this.execRepository).findOneBy({ id });
    }

    async createPurchaseProduct(body: PurchaseProductDTO): Promise<PurchaseProductDTO> {
        return (await this.execRepository).save(body);
    }

    async deletePurchaseProduct(id: string): Promise<DeleteResult> {
        return (await this.execRepository).delete({id});
    }

    async updatePurchaseProduct(id: string, infoUpdated: PurchaseProductDTO): Promise<UpdateResult> {
        return (await this.execRepository).update(id, infoUpdated);
    }
}