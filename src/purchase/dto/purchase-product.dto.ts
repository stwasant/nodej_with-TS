import { IsNotEmpty, IsOptional } from 'class-validator';
import { BaseDTO } from '../../config/base.dto';
import { ProductEntity } from '../../products/entities/product.entity';
import { PurchaseEntity } from '../entities/purchase.entity';

export class PurchaseProductDTO extends BaseDTO {

    @IsNotEmpty()
    quantityProduct!: number;

    @IsNotEmpty()
    totalPrice!: number;

    @IsOptional()
    purchase?: PurchaseEntity;

    @IsOptional()
    product?: ProductEntity; 
}