import { Exclude } from "class-transformer";
import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CustomerEntity } from "../../customers/entities/customer.entity";

@Entity({name: "user"})
export class UserEntity extends BaseEntity {

    @Column()
    userName!: string;
    
    @Column()
    name!: string;

    @Column()
    lastName!: string;

    @Exclude()
    @Column()
    password!: string;
    
    @Column()
    city!: string;

    @Column()
    email!: string;

    @Column()
    province!: string;

    // Generamos integracion de relacion entre entidades
    @OneToOne(() => CustomerEntity, (customer) => customer.user)
    customer!: CustomerEntity;

}