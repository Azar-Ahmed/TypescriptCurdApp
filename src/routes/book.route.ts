import {Router, Request, Response} from 'express'
import BookService from '../services/book.service';
import { BookRequestPayload } from '../request/book.request';

const BookRoute = Router();

BookRoute.get('/', async (req: Request, res: Response) => {
    res.json(await BookService.findAllBook());
})

BookRoute.post('/add', async (req: Request, res: Response) => {
    res.json(await BookService.addBook(req.body as BookRequestPayload));
})

BookRoute.get('/:id', async (req: Request, res: Response) => {
    res.json(await BookService.findBookById(Number(req.params.id)));
})

BookRoute.delete('/:id', async (req: Request, res: Response) => {
    res.json(await BookService.deleteBook(Number(req.params.id)));
})



export default BookRoute;