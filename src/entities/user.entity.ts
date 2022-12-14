import { Column, Entity } from "typeorm";
import { BaseEntity } from "../config/base.entity";

@Entity({name: "user"})
export class UserEntity extends BaseEntity {

    @Column()
    userName!: string;
    
    @Column()
    name!: string;
    
    @Column()
    lastName!: string;
    
    @Column({nullable: true})
    jobPosition?: string;
    
    @Column()
    PhoneNumebr!: number;

}