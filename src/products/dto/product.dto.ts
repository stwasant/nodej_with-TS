import { IsNotEmpty } from "class-validator";
import { CategoryEntity } from "../../categories/entities/category.entity";
import { BaseDTO } from "../../config/base.dto";
import { PurchaseProductEntity } from "../../purchase/entities/purchases-products.entity";

export class ProductDTO extends BaseDTO {

    @IsNotEmpty()   
    productName!: string;
     
    @IsNotEmpty()
    description!: string;
    
    @IsNotEmpty()
    price!: number;
     
    @IsNotEmpty()
    category!: CategoryEntity;
    
    @IsNotEmpty()
    purchaseProduct!: PurchaseProductEntity[];

}