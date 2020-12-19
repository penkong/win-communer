// ------------------------- Packages ------------------------------

import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// ------------------------ Local ----------------------------------

import { TodoEntity } from './models/todo.entity'
import { TodoResolver } from './todo.resolver'
import { TodoService } from './todo.service'

// -----------------------------------------------------------------

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  providers: [TodoResolver, TodoService]
})
export class TodoModule {}
