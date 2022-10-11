import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTodoDto } from './dto/create-todo';

@Injectable()

export class TodosService {
    constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo[]>) {}

    async findAll(): Promise<Todo[]> {
        return await this.todoModel.find();
    }

    async findOne(id: string): Promise<Todo[]> {
        return await this.todoModel.findById(id);
    }

    async create(item: CreateTodoDto): Promise<Todo[]> {
        const newTodo = new this.todoModel(item);
        return await newTodo.save();
    }

    async delete(id: string): Promise<Todo[]> {
        return await this.todoModel.findByIdAndRemove(id);
    }

    async update(id: string, todo: CreateTodoDto): Promise<Todo[]> {
        return await this.todoModel.findByIdAndUpdate(id, todo, { new: true });
    }
}