import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { PurchaseProductEntity } from "../../custom/entities/purchases-products.entity";
import { CustomerEntity } from "../../customers/entities/customer.entity";


enum status {
                ACTIVE = "ACTIVE",
                INACTIVE = "INACTIVE",
            }

enum paymenMethod {
            CASH = "CASH",
            CD = "CD",
}
@Entity({name: "purchase"})
export class PurchaseEntity extends BaseEntity {

    @Column()
    status!: status;
    
    @Column()
    paymentmethod!: paymenMethod;
    
    @ManyToOne(() => CustomerEntity, (customer) => customer.purchases)
    @JoinColumn({name: "customer_id"})
    customer!: CustomerEntity;
      
   @OneToMany(() => PurchaseProductEntity, (purchaseproduct) => purchaseproduct.purchase)
   purchaseProduct!: PurchaseProductEntity;



}