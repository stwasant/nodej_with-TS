import { IsNotEmpty } from 'class-validator';
import { BaseDTO } from '../../config/base.dto';
import { CustomerEntity } from '../../customers/entities/customer.entity';
import { PurchaseProductEntity } from '../entities/purchases-products.entity';
import { enumStatus, enumPaymenMethod } from '../../shared/utils/enum';

export class PurchaseDTO extends BaseDTO {

    @IsNotEmpty()
    status!: enumStatus;

    @IsNotEmpty()
    paymentMethod!: enumPaymenMethod;

    @IsNotEmpty()
    customer!: CustomerEntity;

}