import { Resolver ,Query, Mutation, Args, Int} from '@nestjs/graphql';
import { Book } from './book.schema';
import { BookService } from './book.service';
// import { Book as BookModel  } from 'src/graphql';
import { AddBookArgs } from './add.book.args';
import { UpdateBookArgs } from './update.book.args';

@Resolver(of => Book)
export class BookResolver {
    constructor(private bookService:BookService){}

    @Mutation(() =>String)
    addBook(@Args("addBookArgs") addBookArgs:AddBookArgs){
        return this.bookService.createBook(addBookArgs)
    }

    @Mutation(() =>String,{nullable:true})
    updateBook(@Args("updateBookArgs",{nullable:true}) addBookArgs:UpdateBookArgs){
        return this.bookService.updateBook(addBookArgs)
    }

    @Query(() =>  [Book])
    getAllBooks() {
        return this.bookService.getAll()
    }

    @Query(() =>  Book)
    getOneBook(@Args('id') id: number) {
        return this.bookService.getOne(id)
    }

    @Mutation(() =>String)
    deleteBook(@Args('id') id: number){
         this.bookService.delete(id);
      return 'Book deleted';
    }
    
    @Query(() =>String)
    printHello():string{
        return this.bookService.getHello()
    }


}
