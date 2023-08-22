import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"BookEntity"})
export class BookEntity{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    price:number

    @Column()
    author :string
    
}