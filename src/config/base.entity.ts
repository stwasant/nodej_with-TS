import { CreateDateColumn, PrimaryColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity {

    @PrimaryColumn("uuid")
    id!: string;


    @CreateDateColumn({
        name: "created_at",
        type: "timestamp",
    })
    createdAt!: Date;

    @UpdateDateColumn({
        name: "updated_at",
        type: "timestamp",
    })  
    updatedAt!: Date;
}