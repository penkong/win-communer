// ------------------------- Packages ------------------------------

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { v4 as uuid } from 'uuid'

// ------------------------ Local ----------------------------------

import { CreateTodoInput, TodoEntity } from '.'

// -----------------------------------------------------------------

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity) private todoRepository: Repository<TodoEntity>
  ) {}

  async getTodo(id: string): Promise<TodoEntity | any> {
    // return this.todoRepository.findOne({ id })
  }

  async getTodos(): Promise<TodoEntity[] | any> {
    // return this.todoRepository.find()
  }

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
}
