import { Field, InputType, Int } from "@nestjs/graphql"

@InputType()
export class UpdateBookArgs{
    @Field()
    name:string

    @Field((type)=>Int)
    price:number

    @Field() 
    author:string 

    @Field((type)=>Int)
    id:number

}