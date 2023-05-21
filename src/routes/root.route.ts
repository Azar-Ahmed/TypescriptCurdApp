import {Router, Request, Response} from 'express'
import BookRoute from './book.route'
import AuthorRoute from './author.route';

// initialize 
const RootRoute = Router();

RootRoute.use('/book', BookRoute)
RootRoute.use('/author', AuthorRoute)



export default RootRoute;