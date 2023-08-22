
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddBookArgs {
    name: string;
    price: number;
    author: string;
}

export interface UpdateBookArgs {
    name: string;
    price: number;
    author: string;
    id: number;
}

export interface Book {
    name: string;
    price: number;
    author: string;
}

export interface IQuery {
    getAllBooks(): Book[] | Promise<Book[]>;
    printHello(): string | Promise<string>;
}

export interface IMutation {
    addBook(addBookArgs: AddBookArgs): string | Promise<string>;
    updateBook(updateBookArgs?: Nullable<UpdateBookArgs>): Nullable<string> | Promise<Nullable<string>>;
    deleteBook(id: number): string | Promise<string>;
}

type Nullable<T> = T | null;
