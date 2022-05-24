import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Todo } from './models/todo.model';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';

@Module({
  imports: [SequelizeModule.forFeature([Todo])],
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
