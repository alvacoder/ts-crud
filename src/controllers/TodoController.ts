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

export const updateTodo: RequestHandler = (req, res, next) => {
    const updatedText = (req.body as {text: string}).text;
    const todoID = req.params.id

    const todoIndex = todos.findIndex(todo => todo.id == todoID);
    if(todoIndex < 0) {
        throw new Error('could not find todo!');
    }
    todos[todoIndex] = new Todo(todos[todoIndex].id, updatedText);
    res.status(200).send({message: 'updated todo', data: todos[todoIndex]});
}

export const deleteTodo: RequestHandler = (req, res, next) => {
    const todoID = req.params.id;

    const todoIndex = todos.findIndex(todo => todo.id == todoID);
    if(todoIndex < 0) {
        throw new Error('could not find todo.');
    }
    todos.splice(todoIndex, 1);
    res.status(200).send({message: 'Todo deletedt successfully.'});
}