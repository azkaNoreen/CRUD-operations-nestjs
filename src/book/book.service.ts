import { Injectable } from '@nestjs/common';
import { Book } from './book.schema';
import { Repository } from 'typeorm';
import { BookEntity } from './book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AddBookArgs } from './add.book.args';
import { UpdateBookArgs } from './update.book.args';


@Injectable()
export class BookService {
    constructor(@InjectRepository(BookEntity ) private bookRepo:Repository<BookEntity>){  }
    // private readonly books: Book[] = [{
    //     name: "Azka Noreen",
    //     price:23,
    //     author: 'changeme',
    //   },
    //   {
    //     name: "Noreen",
    //     price:25,
    //     author: 'millak',
    //   },];

    async createBook(addbookarges:AddBookArgs):Promise<string>{
        let book:BookEntity=new BookEntity();
        book.name=addbookarges.name
        book.price=addbookarges.price
        book.author=addbookarges.author 

        await this.bookRepo.save(book);
        // this.books.push(book)
        return "Book Created"
    }

    async getAll():Promise<BookEntity[]>{
        let books=await this.bookRepo.find();
        return books
    }

    async delete(id:number):Promise<String>{
        let books=await this.bookRepo.delete(id);
        return "Book deleted"
    }

    async updateBook(addbookarges:UpdateBookArgs):Promise<string>{

        let book:BookEntity=await this.bookRepo.findOneBy({id:addbookarges.id})
        book.name=addbookarges.name
        book.price=addbookarges.price
        book.author=addbookarges.author 

        await this.bookRepo.save(book);
        // this.books.push(book)
        return "Book Updated"
    }

      

  getHello(): string {
    return 'Hello World!';
  }
}
