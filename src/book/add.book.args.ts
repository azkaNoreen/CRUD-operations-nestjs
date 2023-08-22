import { Field, InputType, Int } from "@nestjs/graphql"

@InputType()
export class AddBookArgs{
    @Field()
    name:string

    @Field((type)=>Int)
    price:number

    @Field() 
    author:string 
}