import BookMapper from "../mappers/book.mapper";
import BookRepo from "../repositories/book.repo";
import { BookRequestPayload } from "../request/book.request";
import { BookResponse } from "../response/book.response";

export default class BookService {

    // Add Book
    public static async addBook(requestPayload: BookRequestPayload){
        await BookRepo.addBook(BookMapper.requestToEntityMapper(requestPayload));
        return "Added Successfully";
    }


    // Find All Books
    public static async findAllBook(){
      let data : BookResponse[] = (await BookRepo.findAllBooks()).map((book) => {
        return BookMapper.entityToResponseMapper(book)
      })
      return data;
    }

    // Find By Id
    public static async findBookById(id: number){
      let book = await BookRepo.findBookById(id)
      if(book){
        return  BookMapper.entityToResponseMapper(book);
      }else{
        return "Book Not Found!"
      }
    }


    // Update Book

    // Delete Book
    public static async deleteBook(id: number){
      await BookRepo.deleteBook(id);
        return "Deleted Successfully";
    }

}