import { IsNotEmpty } from "class-validator";
import { ObjectId } from "mongodb";
import { Column, CreateDateColumn, Entity, ObjectIdColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity()
@Unique(['name'])
export class Product {
    @ObjectIdColumn()
    _id: ObjectId;
    @Column()
    @IsNotEmpty()
    name: string;
    @Column()
    description: string;
    @Column()
    price: number;
    @CreateDateColumn()
    createrAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
}