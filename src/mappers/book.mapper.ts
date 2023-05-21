import { BookResponse } from './../response/book.response';
import { BookEntity } from '../entities/book.entity';
import { BookRequestPayload } from './../request/book.request';


export default class BookMapper{
   
    public static requestToEntityMapper(requestPayload: BookRequestPayload){
        let bookEntity = new BookEntity();
        
        bookEntity.title = requestPayload.bookName;
        bookEntity.author = requestPayload.authorName;
        bookEntity.purchasePrice = requestPayload.pp;
        bookEntity.sellingPrice = requestPayload.sp;
        
        return bookEntity;
    }

    public static entityToResponseMapper(entity: BookEntity) : BookResponse{
        let bookResponse : BookResponse = {
            id: entity.id,
            author: entity.author,
            sellingPrice: entity.sellingPrice,
            title: entity.title,
            // purchasePrice: entity.purchasePrice,
       }
       return bookResponse;
    }



}