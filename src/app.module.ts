import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BookResolver } from './book/book.resolver';
import { BookService } from './book/book.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './book/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'practice',
      entities:[BookEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([BookEntity]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver:ApolloDriver,
      playground:true,
      autoSchemaFile: 'src/schema.graphql',
      definitions:{path:'src/graphql.ts'}
    })    
  ],
  controllers: [AppController],
  providers: [AppService,BookResolver,BookService],
})
export class AppModule {}
