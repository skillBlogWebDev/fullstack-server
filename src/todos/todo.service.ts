import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ChangeTodo } from './dto/change-todo.dto';
import { CreateTodo } from './dto/create-todo.dto';
import { Todo } from './models/todo.model';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo)
    private todoModel: typeof Todo,
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.todoModel.findAll();
  }

  findOne(id: string): Promise<Todo> {
    return this.todoModel.findOne({
      where: {
        id,
      },
    });
  }

  create(createTodo: CreateTodo): Promise<Todo> {
    const todo = new Todo();

    todo.title = createTodo.title;
    todo.done = createTodo.done;

    return todo.save();
  }

  update(
    id: string,
    changeTodo: ChangeTodo,
  ): Promise<[affectedCount: number, affectedRows: Todo[]]> {
    return this.todoModel.update(
      { ...changeTodo },
      {
        where: {
          id,
        },
        returning: true,
      },
    );
  }

  async remove(id: string): Promise<void> {
    const todo = await this.findOne(id);
    await todo.destroy();
  }
}
