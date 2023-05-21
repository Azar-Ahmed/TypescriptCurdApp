import {Router, Request, Response} from 'express'

const AuthorRoute = Router();

AuthorRoute.get('/', (req: Request, res: Response) => {
    res.json('Author Routes');
})

export default AuthorRoute;