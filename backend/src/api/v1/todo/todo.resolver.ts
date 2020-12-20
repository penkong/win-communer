// ------------------------- Packages ------------------------------

import { Logger } from '@nestjs/common'
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'

// ------------------------ Local ----------------------------------

import { TodoType } from './types/todo.type'
import { CreateTodoInput } from './dto/todo.input'
import { TodoService } from './todo.service'

// -----------------------------------------------------------------

@Resolver((of) => TodoType)
export class TodoResolver {
  // -------------------- Logger --------------------------

  private logger = new Logger(TodoResolver.name)

  // -------------------- Ctor ----------------------------

  constructor(private todoService: TodoService) {}

  // -------------------- Functionality -------------------

  @Query((returns) => TodoType)
  getTodo(@Args('id') id: string) {
    return this.todoService.getTodo(id)
  }

  // ---

  @Query((returns) => [TodoType])
  getTodos() {
    return this.todoService.getTodos()
  }

  // ---

  @Mutation((returns) => TodoType)
  createTodo(@Args('createTodoInput') createTodoInput: CreateTodoInput) {
    return this.todoService.createTodo(createTodoInput)
  }

  // ---

  // also can add many other resolver functionality here

  // @ResolveField()
  // async someWhereElse(@Parent() todoEntity: TodoEntity) {}
}
