import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { PurchaseProductEntity } from "./purchases-products.entity";
import { CustomerEntity } from "../../customers/entities/customer.entity";
import { enumStatus, enumPaymenMethod } from '../../shared/utils/enum';


@Entity({name: "purchase"})
export class PurchaseEntity extends BaseEntity {

    @Column()
    status!: enumStatus;
    
    @Column()
    paymentMethod!: enumPaymenMethod;
    
    @ManyToOne(() => CustomerEntity, (customer) => customer.purchases)
    @JoinColumn({name: "customer_id"})
    customer!: CustomerEntity;
      
   @OneToMany(() => PurchaseProductEntity, (purchaseproduct) => purchaseproduct.purchase)
   purchaseProduct!: PurchaseProductEntity;



}