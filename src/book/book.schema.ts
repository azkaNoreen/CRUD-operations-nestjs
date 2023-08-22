import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field()
  name: string;

  @Field()
  price: number;

  @Field()
  author: string;
}
