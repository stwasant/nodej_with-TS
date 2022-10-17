import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { ProductEntity } from "../../products/entities/product.entity";
import { PurchaseEntity } from "../../puchase/entities/purchase.entity";


@Entity({name: "purchase_products"})
export class PurchaseProductEntity extends BaseEntity {

    @Column()
    quantityProduct!: number;

    @Column()
    totalPrice!: number;

    @ManyToOne(() => PurchaseEntity, (purchase) => purchase.purchaseProduct)
    @JoinColumn({ name: "purchase_id" })
    purchase!: PurchaseEntity;

    @ManyToOne(() => ProductEntity, (product) => product.purchaseProduct)
    @JoinColumn({ name: "product_id" })
    product!: ProductEntity;   

}