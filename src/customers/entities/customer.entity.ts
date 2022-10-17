import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { PurchaseEntity } from "../../puchase/entities/purchase.entity";
import { UserEntity } from "../../user/entities/user.entity";

@Entity({name: "customer"})
export class CustomerEntity extends BaseEntity {

    @Column()
    address!: string;

    @Column()
    dni!:number;

    // Generamos integracion de relacion entre entidades
    @OneToOne(() => UserEntity, (user) => user.customer)
    @JoinColumn({ name: "user_id" })
    user!: UserEntity;

    @OneToMany(() => PurchaseEntity, (purchase) => purchase.customer)
    purchases!: PurchaseEntity[];
} 