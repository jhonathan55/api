import { IsEmail } from "class-validator"
import { Entity, ObjectIdColumn, ObjectId, Column, Unique } from "typeorm"
import * as bcrypt from "bcryptjs"
@Entity()
@Unique(["email"])
export class User {
    @ObjectIdColumn()
    id: ObjectId
    @Column()
    name: string
    @Column()
    @IsEmail()
    email: string
    @Column()
    password: string

    hashPassword(): void {
        const salt=bcrypt.genSaltSync(10)
        this.password=bcrypt.hashSync(this.password,salt)
    }
    checkPassword(password: string): boolean {
        return bcrypt.compareSync(password, this.password)
    }
}
