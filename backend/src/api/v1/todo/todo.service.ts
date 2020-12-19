// ------------------------- Packages ------------------------------

import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { v4 as uuid } from 'uuid'

// ------------------------ Local ----------------------------------

import { TodoEntity } from './models/todo.entity'
import { CreateTodoInput } from './dto/todo.input'

// -----------------------------------------------------------------

@Injectable()
export class TodoService {
  // -------------------- Logger --------------------------

  private logger = new Logger(TodoService.name)

  // -------------------- Ctor ----------------------------

  constructor(
    @InjectRepository(TodoEntity) private todoRepository: Repository<TodoEntity>
  ) {}

  // -------------------- Functionality -------------------

  async getTodo(id: string): Promise<TodoEntity | any> {
    // return this.todoRepository.findOne({ id })
  }

  // ---

  async getTodos(): Promise<TodoEntity[] | any> {
    // return this.todoRepository.find()
  }

  // ---

  async createTodo(
    createTodoInput: CreateTodoInput
  ): Promise<TodoEntity | any> {
    const { todo, isActive } = createTodoInput
    // const lesson = this.todoRepository.create({
    //   id: uuid(),
    //   name,
    //   startDate,
    //   endDate,
    //   students
    // })

    // return this.todoRepository.save(lesson)
  }

  // ---

  // also can add many other service functionality here
}
