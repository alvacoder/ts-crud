import { RequestHandler } from 'express';
import { Todo } from '../models/todo';
const todos: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as {text: string}).text;
    const newTodo = new Todo(Math.random().toString(), text);
    todos.push(newTodo);

    res.status(201).send({message: 'created new todo', data: newTodo});
}

export const getTodos: RequestHandler = (req, res, next) => {
    res.status(200).send({data: todos});
}