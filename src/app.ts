import express, {Request, Response, NextFunction} from 'express';
import { json } from 'body-parser';
import todoRoutes from './routes/todos';

const app = express();

app.use(json());
app.use('/todos', todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(404).send({responseCode: 404, status: 'failure', message: 'Invalid resource url', data: []});
});

app.listen(3000);