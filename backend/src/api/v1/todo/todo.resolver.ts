// ------------------------- Packages ------------------------------

import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent
} from '@nestjs/graphql'

// ------------------------ Local ----------------------------------

import { TodoType, TodoService, CreateTodoInput, TodoEntity } from '.'

// -----------------------------------------------------------------

@Resolver((of) => TodoType)
export class TodoResolver {
  // ---

  constructor(private todoService: TodoService) {}

  // ---

  @Query((returns) => TodoType)
  lesson(@Args('id') id: string) {
    return this.todoService.getTodo(id)
  }

  // ---

  @Query((returns) => [TodoType])
  lessons() {
    return this.todoService.getTodos()
  }

  // ---

  @Mutation((returns) => TodoType)
  createLesson(@Args('createTodoInput') createTodoInput: CreateTodoInput) {
    return this.todoService.createTodo(createTodoInput)
  }

  // ---

  @ResolveField()
  async some(@Parent() todoEntity: TodoEntity) {}
}
